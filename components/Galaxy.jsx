"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const GALAXY_PARTICLES = 18000;
const STARFIELD_PARTICLES = 3200;
const GALAXY_RADIUS = 11.8;
const BRANCHES = 4;
const SPIN = 1.2;
const GALAXY_BRIGHTNESS = 0.58;

function createDiscTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );

  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.18, "rgba(255,255,255,0.95)");
  gradient.addColorStop(0.45, "rgba(255,255,255,0.34)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function buildGalaxyGeometry() {
  const positions = new Float32Array(GALAXY_PARTICLES * 3);
  const colors = new Float32Array(GALAXY_PARTICLES * 3);
  const innerColor = new THREE.Color("#ff9ecb");
  const outerColor = new THREE.Color("#4c6fff");
  const mixedColor = new THREE.Color();

  for (let index = 0; index < GALAXY_PARTICLES; index += 1) {
    const i3 = index * 3;
    const radius = Math.pow(Math.random(), 1.75) * GALAXY_RADIUS;
    const branchAngle = ((index % BRANCHES) / BRANCHES) * Math.PI * 2;
    const spinAngle = radius * SPIN;
    const angle = branchAngle + spinAngle;

    const randomScale = 0.22 + radius * 0.16;
    const randomX =
      Math.pow(Math.random(), 3) *
      (Math.random() < 0.5 ? -1 : 1) *
      randomScale;
    const randomY =
      Math.pow(Math.random(), 2) *
      (Math.random() < 0.5 ? -1 : 1) *
      (0.05 + (1 - radius / GALAXY_RADIUS) * 0.28);
    const randomZ =
      Math.pow(Math.random(), 3) *
      (Math.random() < 0.5 ? -1 : 1) *
      randomScale;

    positions[i3] = Math.cos(angle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(angle) * radius + randomZ;

    mixedColor.copy(innerColor).lerp(outerColor, radius / GALAXY_RADIUS);

    const coreBoost = 1.05 + Math.pow(1 - radius / GALAXY_RADIUS, 2.2) * 1.1;
    const edgeFade = 0.82 - Math.pow(radius / GALAXY_RADIUS, 1.55) * 0.28;

    colors[i3] = Math.min(mixedColor.r * coreBoost * edgeFade, 1) * GALAXY_BRIGHTNESS;
    colors[i3 + 1] =
      Math.min(mixedColor.g * coreBoost * edgeFade, 1) * GALAXY_BRIGHTNESS;
    colors[i3 + 2] =
      Math.min(mixedColor.b * coreBoost * edgeFade, 1) * GALAXY_BRIGHTNESS;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  return geometry;
}

function buildStarfieldGeometry() {
  const positions = new Float32Array(STARFIELD_PARTICLES * 3);
  const colors = new Float32Array(STARFIELD_PARTICLES * 3);
  const color = new THREE.Color("#9fb5ff");

  for (let index = 0; index < STARFIELD_PARTICLES; index += 1) {
    const i3 = index * 3;
    const radius = 20 + Math.random() * 65;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.cos(phi) * 0.6;
    positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

    const intensity = 0.15 + Math.random() * 0.45;
    colors[i3] = color.r * intensity;
    colors[i3 + 1] = color.g * intensity;
    colors[i3 + 2] = color.b * intensity;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  return geometry;
}

export default function Galaxy() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000");

    const camera = new THREE.PerspectiveCamera(
      52,
      mount.clientWidth / mount.clientHeight,
      0.1,
      180
    );
    camera.position.set(0.6, 3.1, 11.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const galaxyGroup = new THREE.Group();
    scene.add(galaxyGroup);

    const particleTexture = createDiscTexture();

    const galaxyGeometry = buildGalaxyGeometry();
    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.28,
      sizeAttenuation: true,
      depthWrite: false,
      transparent: true,
      opacity: 0.88,
      map: particleTexture,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
    galaxy.rotation.x = -0.16;
    galaxyGroup.add(galaxy);

    const starfieldGeometry = buildStarfieldGeometry();
    const starfieldMaterial = new THREE.PointsMaterial({
      size: 0.055,
      sizeAttenuation: true,
      depthWrite: false,
      transparent: true,
      opacity: 0.7,
      map: particleTexture,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    const starfield = new THREE.Points(starfieldGeometry, starfieldMaterial);
    scene.add(starfield);

    const ambientLight = new THREE.AmbientLight("#ffffff", 0.35);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.045;
    controls.enablePan = true;
    controls.minDistance = 5.5;
    controls.maxDistance = 18;
    controls.rotateSpeed = 0.65;
    controls.zoomSpeed = 0.8;
    controls.panSpeed = 0.55;
    controls.target.set(-0.95, 0.15, 0);
    controls.update();

    const pointer = new THREE.Vector2(0, 0);
    const parallax = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();
    let animationFrameId = 0;

    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const handleResize = () => {
      if (!mount) {
        return;
      }

      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      parallax.x += (pointer.x * 0.2 - parallax.x) * 0.035;
      parallax.y += (pointer.y * 0.12 - parallax.y) * 0.035;

      galaxyGroup.rotation.y = elapsedTime * 0.045 + parallax.x;
      galaxyGroup.rotation.x = -0.16 + parallax.y;
      galaxyGroup.position.x = -2.15 + parallax.x * 0.25;
      galaxyGroup.position.y = parallax.y * 0.18;

      starfield.rotation.y = elapsedTime * 0.01;
      starfield.rotation.x = parallax.y * 0.08;

      controls.update();
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      galaxyGeometry.dispose();
      starfieldGeometry.dispose();
      galaxyMaterial.dispose();
      starfieldMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
      scene.clear();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
