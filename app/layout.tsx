import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight:['200', '400','500','700','800']
})

export const metadata: Metadata = {
  title: "jspytutor",
  description: "Javascript and python learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="">
            {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
    </html>
  );
}
