import { Inter } from 'next/font/google';
import { AppWrapper } from './context';
import BootstrapImport from './imports/BootstrapImport';
import AOSImport from './imports/AOSImport';
import Spinner from './components/Spinner/Spinner';


import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

const inter = Inter({ subsets: ['latin'] });

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
            </head>
            <AOSImport />
            <body className={inter.className}>
                <AppWrapper>
                    <Spinner />
                    {children}
                    <BootstrapImport />
                </AppWrapper>
            </body>
        </html>
    );
}
