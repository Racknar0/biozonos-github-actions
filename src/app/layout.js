import { Inter } from 'next/font/google';
import Script from 'next/script';
import { AppWrapper } from './context';
import BootstrapImport from './imports/BootstrapImport';
import AOSImport from './imports/AOSImport';
import Spinner from './components/Spinner/Spinner';


import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

const inter = Inter({ subsets: ['latin'] });

// Google Analytics 4 (propiedad "Biozonos", flujo "Biozonos web").
const GA_ID = 'G-BBNXG98JYF';

export const metadata = {
    title: 'Biozonos | Inicio',
    description:
        'Purificadores de Agua y filtros de ozono en Duitama, Sogamoso , Tunja y Boyacá',
};

export default function RootLayout({ children }) {



    return (
        <html lang="es">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {/* Fuente del botón "Contactanos". Antes iba con @import en button-water.css;
                    Turbopack (Next 16) descarta esos @import. Poppins/Montserrat/Noto Serif/Londrina
                    también estaban con @import pero nunca llegaron a cargar en producción, así que
                    no se añaden para que el sitio se vea igual que antes. */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Code+Pro:200,900"
                />
            </head>
            <AOSImport />
            <body className={inter.className}>
                <AppWrapper>
                    <Spinner />
                    {children}
                    <BootstrapImport />
                </AppWrapper>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
                </Script>
            </body>
        </html>
    );
}
