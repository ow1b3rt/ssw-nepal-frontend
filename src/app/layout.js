import Navbar from "@/components/navbar";

import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={outfit.className}
    >
      <body className="min-h-full flex flex-col">
        
        <Navbar />
        
        {children}
        
        </body>
    </html>
  );
}
