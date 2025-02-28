import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IELTS Writing Helper",
  description: "Help you to boost your IELTS writing score powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
