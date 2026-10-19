'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HomeHeader() {
    const dialog = useRef(null);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (!open) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previous; };
    }, [open]);
    const close = () => dialog.current.close();
    return <>
        <header className="bz-header" data-surface="dark">
            <Link href="/" className="bz-logo" aria-label="Biozonos · Inicio">
                <Image src="/logo.png" alt="Biozonos" width={210} height={97} sizes="(max-width: 767px) 145px, 200px" priority />
            </Link>
            <a className="bz-header-catalog" href="/#catalogo">Productos Populares <span aria-hidden="true">↘</span></a>
            <button className="bz-menu-toggle" onClick={() => { dialog.current.showModal(); setOpen(true); }} aria-haspopup="dialog" aria-expanded={open}>Menú <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8h18M8 16h13" /></svg></button>
        </header>
        <dialog ref={dialog} className="bz-menu" aria-label="Menú principal" onClose={() => setOpen(false)}>
            <div className="bz-menu-top"><span>BIOZONOS</span><button autoFocus onClick={close}>Cerrar <span aria-hidden="true">×</span></button></div>
            <nav aria-label="Navegación principal">
                {[['Inicio', '/'], ['Productos Populares', '/#catalogo'], ['Línea doméstica', '/domestica'], ['Línea industrial', '/industrial'], ['Nosotros', '/nosotros'], ['Servicios', '/servicios'], ['Contacto', '/contacto']].map(([label, href], i) => <Link key={href} href={href} onClick={close}><small aria-hidden="true">0{i + 1}</small>{label}<span aria-hidden="true">↗</span></Link>)}
            </nav>
            <a className="bz-pill bz-cta" href="https://wa.me/573233642951" target="_blank" rel="noopener noreferrer">Contactanos <span aria-hidden="true">↗</span></a>
        </dialog>
    </>;
}
