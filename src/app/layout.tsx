import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Coffee from "@/components/Coffee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TodoFy | Simplify Your Day",
  description: "TodoFy is a clean, intuitive to-do web app designed to help you stay focused and productive. Whether you're managing daily tasks, planning projects, or organizing your life, TodoFy makes it easy to capture, prioritize, and complete your goals—anytime, anywhere. With smart features and a distraction-free interface, getting things done has never felt this good.",
  icons: {
    icon: "/todofy.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>
        <div className="flex items-center justify-center w-full">
          <Coffee />
        </div>
        <Footer />
      </body>
    </html>
  );
}
