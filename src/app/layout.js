import { Outfit } from "next/font/google";

import "./globals.css";


import { cn } from "@/packages/admin";

const outFit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "SSW Nepal",
  icons: {
    icon: "/images/enlighten-logo.svg",
  },
};

const RootLayout = async ({
  children,
}) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", outFit.variable, "font-sans")}
    >
      <body>
          {children}
      </body>
    </html>
  );
};

export default RootLayout;
