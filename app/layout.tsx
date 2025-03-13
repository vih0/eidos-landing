import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eidos",
  description: "Instituto Eidos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans scroll-smooth`}>{children}</body>
    </html>
  );
}
