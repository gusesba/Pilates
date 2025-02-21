import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pilates",
  description: "Gerencie seu estúdio de pilates",
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
