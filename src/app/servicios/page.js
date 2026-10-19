import PageHero from '../components/site/PageHero';
import CtaBand from '../components/site/CtaBand';
import ServicePanels from '../components/site/ServicePanels';
import { WHATSAPP_URL } from '../components/site/contact';

export const metadata = {
    title: "Biozonos | Servicios",
    description: "Purificadores de Agua y filtros de ozono en Duitama, Sogamoso, Tunja y Boyacá",
};

const services = [
    { title: 'Diseño Plantas de Purificación', description: 'Diseñamos y construimos plantas de purificación avanzadas basadas en ozono y filtros de gravedad para garantizar la calidad del agua en hogares y empresas.', image: '/services/service_1.jpg', alt: 'Planta de purificación de agua' },
    { title: 'Reparación de equipos Ozono', description: 'Profesionales en la instalación de sistemas de ozono, asegurando una implementación eficiente y segura para la purificación del aire y el agua en cualquier entorno.', image: '/services/electronica.png', alt: 'Reparación electrónica de un equipo de ozono' },
    { title: 'Bebederos para Agua en Colegios y Empresas', description: 'Ofrecemos soluciones de hidratación con bebederos de agua de alta calidad, ideales para colegios y empresas, garantizando agua limpia y fresca en todo momento.', image: '/services/bebedero.png', alt: 'Bebedero de agua para colegios y empresas' },
    { title: 'Plantas de Tratamiento de Aire para Hogar', description: 'Desarrollamos sistemas de purificación de aire innovadores y eficientes, diseñados para eliminar contaminantes y mejorar la calidad del aire en interiores y exteriores.', image: '/services/aire.png', alt: 'Purificación de aire en el hogar' },
];

export default function ServiciosPage() {
    return <>
        <PageHero crumbs={[['Servicios', '/servicios']]} title="Servicios" introAs="h2"
            intro="En BIOZONOS ofrecemos una amplia gama de servicios, estamos seguros que encontrará el que mejor se adapte a sus necesidades."
            image="/services/water.png" alt="Agua cristalina" />

        <section className="bz-section" data-surface="light" aria-labelledby="services-title">
            <div className="bz-split bz-section-head">
                <header data-reveal>
                    <span className="bz-eyebrow">Lo que hacemos por ti</span>
                    <h2 id="services-title" className="bz-section-title">Nuestros <em>servicios</em></h2>
                </header>
                <div className="bz-prose" data-reveal>
                    <p className="bz-lead">En BIOZONOS Duitama, Boyacá, nos especializamos en ofrecer una gama completa de servicios para la purificación del agua y el tratamiento del aire.</p>
                    <p>Desde la fabricación de plantas de purificación hasta la instalación de sistemas de ozono y bebederos para agua en colegios y empresas, brindamos soluciones integrales y de alta calidad. Nuestro equipo de expertos está comprometido con la excelencia y la innovación, asegurando un ambiente más limpio y saludable para nuestros clientes en cada proyecto.</p>
                </div>
            </div>
            <ServicePanels items={services} />
        </section>

        <CtaBand title={<>¿Listo para <em>empezar</em>?</>} text="Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución." label="Contactanos" href={WHATSAPP_URL} />
    </>;
}
