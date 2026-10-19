import Image from 'next/image';
import Link from 'next/link';

// Portada de las páginas internas: foto con zoom al salir, migas y título grande.
export default function PageHero({ crumbs = [], title, intro, introAs: Intro = 'p', image, alt = '', position = 'center', children }) {
    return <section className="bz-page-hero" data-surface="dark" data-exit-scene data-pointer-stage aria-labelledby="page-title">
        <div className="bz-page-hero-photo"><Image src={image} alt={alt} fill sizes="100vw" priority style={{ objectPosition: position }} /></div>
        <div className="bz-page-hero-shade" />
        <div className="bz-page-hero-content">
            <nav className="bz-crumbs" aria-label="Ruta de navegación">
                <Link href="/">Inicio</Link>
                {crumbs.map(([label, href]) => <span key={href}><span aria-hidden="true">/</span> <Link href={href}>{label}</Link></span>)}
            </nav>
            <h1 id="page-title">{title}</h1>
            {intro && <Intro className="bz-page-hero-intro">{intro}</Intro>}
            {children && <div className="bz-page-hero-actions">{children}</div>}
        </div>
    </section>;
}
