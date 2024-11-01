import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Kovács Endre orgonaművész emlékoldala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className="bg-basicBackground font-basic flex flex-col justify-center items-center">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
