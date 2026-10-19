import Link from 'next/link';
import { WHATSAPP_URL } from './contact';

export default function SiteFooter() {
    return <footer className="bz-footer" data-surface="light">
        <p className="bz-footer-motto" data-reveal>Vive bien,<br />{' '}<em>bebe sano.</em>❤️</p>
        <div className="bz-footer-links"><nav aria-label="Navegación del pie de página">{[['Inicio', '/'], ['Línea doméstica', '/domestica'], ['Línea industrial', '/industrial'], ['Nosotros', '/nosotros'], ['Servicios', '/servicios'], ['Contacto', '/contacto']].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
            <div><h3>Redes Sociales</h3><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div>
        </div>
        <div className="bz-footer-legal"><p>© 2026 Biozonos · Ozonos Duitama. Todos los derechos reservados.</p><p>Desarrollado por <a href="https://j-torres.netlify.app/" target="_blank" rel="noopener noreferrer">Jonathan Camilo Torres</a></p></div>
    </footer>;
}
