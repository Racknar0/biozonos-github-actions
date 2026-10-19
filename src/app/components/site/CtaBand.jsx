// Bloque final oscuro con llamado a la acción; el brillo sigue al puntero.
export default function CtaBand({ title, text, label, href, external = true }) {
    return <section className="bz-cta-band" data-surface="dark" data-pointer-stage aria-label={label}>
        <div data-reveal>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
            <a className="bz-pill bz-cta" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label} <span aria-hidden="true">↗</span></a>
        </div>
    </section>;
}
