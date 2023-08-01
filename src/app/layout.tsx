import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exercises",
  description:
    "Various exercises consisting of learning Next.js, creating functions and solving problems displayed in codewars and many more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-200 p-4`}>
        {children}
      </body>
    </html>
  );
}
