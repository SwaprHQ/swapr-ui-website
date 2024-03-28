import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swapr UI",
  description: "Web3 components to build dapps fast",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
