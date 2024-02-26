import { Inter } from "next/font/google";

import Footer from "./layout/footer/Footer";
import NavBar from "./layout/navbar/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";

import BootstrapImport from "./imports/BootstrapImport"; 
import AOSImport from "./imports/AOSImport";
import BtnWhsatpp from "./components/BtnWhsatpp/BtnWhsatpp";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biozonos | Vive bien, Bebe sano",
  description: "Purificadores de Agua y filtros de ozono en Sogamoso, Duitama, Tunja y Boyacá",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <AOSImport />
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        <BtnWhsatpp />

        
       <BootstrapImport />
        
      </body>
    </html>
  );
}
