import { Outfit } from "next/font/google";

import { Toaster } from "@/components/ui/toast";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
