import type { Metadata } from "next";
import { Mulish as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";

const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
});

export const metadata: Metadata = {
   title: "Angan",
   description: "To-Let and real-estate searching platform",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
         >
            {children}
         </body>
      </html>
   );
}
