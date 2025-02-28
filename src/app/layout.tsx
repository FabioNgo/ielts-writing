import type { Metadata } from "next";
import { ReactNode } from "react";
import React from "react";

export const metadata: Metadata = {
  title: "IELTS Writing Helper",
  description: "Help you to boost your IELTS writing score powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
