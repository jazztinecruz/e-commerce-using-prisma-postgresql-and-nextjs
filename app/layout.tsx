import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/core/styles/globals.css";
import Navbar from "@/core/components/navbar";
import Providers from "@/core/providers";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="grid grid-rows-[auto,1fr] gap-6">
          <Navbar />
          <main className="w-full max-w-5xl mx-auto px-6 lg:px-0">
            <Providers>
              {children}
              <Toaster position="top-right" reverseOrder={false} />
            </Providers>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
