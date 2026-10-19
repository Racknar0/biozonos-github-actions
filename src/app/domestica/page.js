import PageHero from '../components/site/PageHero';
import ServicePanels from '../components/site/ServicePanels';
import CtaBand from '../components/site/CtaBand';
import { WHATSAPP_URL } from '../components/site/contact';

export const metadata = {
    title: 'Biozonos | Línea Doméstica',
    description: 'Purificadores de agua con ozono para el hogar: líneas Acrílico, Acero Inoxidable, Vitro y Touch en Duitama, Sogamoso, Tunja y Boyacá.',
};

const lines = [
    { title: 'Acrílico', description: 'Purificadores de ozono en acrílico, con diseños para cada cocina y una purificación efectiva para tu hogar.', image: '/products/cocina.png', alt: 'Cocina con purificador de acrílico', href: '/domestica/acrilico', label: 'Ver modelos' },
    { title: 'Acero Inoxidable', description: 'Equipos elegantes y duraderos en acero inoxidable para agua limpia y fresca en casa o en la empresa.', image: '/products/cocina_inox.png', alt: 'Cocina con purificador de acero inoxidable', href: '/domestica/inox', label: 'Ver modelos' },
    { title: 'Vitro', description: 'Equipos de ozono en cristal, con acabados Black, White y Stone para una cocina moderna.', image: '/products/cocina_vitro.png', alt: 'Cocina con purificador vitrificado', href: '/domestica/vitro', label: 'Ver modelos' },
    { title: 'Touch', description: 'Panel de cristal y botón táctil: agua purificada con solo tocar un botón.', image: '/products/cocina_futuro.png', alt: 'Cocina moderna con purificador Touch', href: '/domestica/touch', label: 'Ver modelo' },
];

export default function DomesticaPage() {
    return <>
        <PageHero crumbs={[['Línea doméstica', '/domestica']]} title={<>Línea <em>Doméstica</em></>}
            intro="Purificadores de agua con ozono para tu hogar. Elige la línea que mejor va con tu cocina."
            image="/products/cocina_inox.png" alt="Cocina con purificador de agua instalado" />

        <section className="bz-section" data-surface="light" aria-labelledby="lines-title">
            <header className="bz-section-head" data-reveal>
                <span className="bz-eyebrow">Nuestras líneas</span>
                <h2 id="lines-title" className="bz-section-title">Elige <em>tu estilo</em></h2>
            </header>
            <ServicePanels items={lines} />
        </section>

        <CtaBand title={<>¿No sabes <em>cuál elegir</em>?</>} text="Escríbenos y te recomendamos el equipo ideal según tu consumo." label="Contactanos" href={WHATSAPP_URL} />
    </>;
}
