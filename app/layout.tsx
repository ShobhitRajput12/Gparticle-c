import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GParticle",
  description:
    "GParticle is building the infrastructure to make every device AI-native.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
