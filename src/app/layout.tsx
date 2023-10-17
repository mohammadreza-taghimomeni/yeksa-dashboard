import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "../component/ThemeRegistry/ThemeRegistry";
import Box from "@mui/material/Box";
import DrawerAppBar from "../component/DrawerAppBar";
import Toolbar from "@mui/material/Toolbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inicio - Acerinox Stainless Steel Manufacturer",
  description: "Inicio - Acerinox Stainless Steel Manufacturer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <DrawerAppBar>{children}</DrawerAppBar>
        </ThemeRegistry>
      </body>
    </html>
  );
}
