import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ParentHero — Your child's school superhero",
  description: "Follow your school's curriculum. Get teaching scripts, practice tools, and certificates.",
  manifest: "/manifest.json",
  themeColor: "#1CB0F6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="bg-[#F9FAFB] antialiased">{children}</body>
    </html>
  );
}
