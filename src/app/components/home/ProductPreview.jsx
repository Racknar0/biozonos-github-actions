'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './ProductPreview.module.scss';

export default function ProductPreview({ name, image, children }) {
    const dialogRef = useRef(null);
    const triggerRef = useRef(null);
    const viewportRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const bodyOverflow = document.body.style.overflow;
        const rootOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = bodyOverflow;
            document.documentElement.style.overflow = rootOverflow;
        };
    }, [isOpen]);

    function openPreview() {
        setIsZoomed(false);
        setIsOpen(true);
        dialogRef.current.showModal();
        if (viewportRef.current) viewportRef.current.scrollTo(0, 0);
    }

    function onClose() {
        setIsOpen(false);
        setIsZoomed(false);
        triggerRef.current?.focus({ preventScroll: true });
    }

    function toggleZoom() {
        setIsZoomed(value => !value);
        viewportRef.current?.scrollTo(0, 0);
    }

    const buyUrl = 'https://wa.me/573233642951?text=' + encodeURIComponent(
        'Hola, me interesa ' + name + '. Quisiera más información.'
    );

    return (
        <>
            <button ref={triggerRef} type="button"
                className={'catalog_product_photo ' + styles.trigger}
                aria-label={'Ampliar ' + name} aria-haspopup="dialog"
                onClick={openPreview}>
                {children}
                <span className={styles.hint} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></svg>
                </span>
            </button>
            <dialog ref={dialogRef} className={styles.dialog}
                aria-label={'Vista ampliada de ' + name} onClose={onClose}>
                <div className={styles.toolbar}>
                    <button type="button" onClick={toggleZoom} aria-pressed={isZoomed}>
                        {isZoomed ? 'Ajustar' : 'Ampliar'}
                    </button>
                    <button type="button" autoFocus onClick={() => dialogRef.current.close()}>
                        Cerrar <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div ref={viewportRef} className={styles.viewport} tabIndex={0}
                    aria-label={isZoomed ? 'Imagen ampliada. Desplázate para verla completa.' : 'Imagen del producto'}>
                    {isOpen && <Image src={image} alt={name} width={1024} height={1300}
                        sizes="(min-width: 1024px) 1024px, 100vw" loading="eager"
                        className={styles.image + (isZoomed ? ' ' + styles.zoomed : '')} />}
                </div>
                <div className={styles.bottomBar}>
                    <a href={buyUrl} target="_blank" rel="noopener noreferrer"
                        aria-label={'Comprar ' + name}>
                        Comprar <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </dialog>
        </>
    );
}
