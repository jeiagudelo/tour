import Link from "next/link";
import Navigation from "@/componentes/Navigation";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ExploraMundo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
      </head>
      <body className={`${inter.className} fondo`}>
        <Navigation />
        <header className="banner2">
          <div className="banner-content2">
            <h1>Bienvenido a ExploraMundo</h1>
            <p>Descubre los mejores destinos alrededor del mundo</p>
            
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
