import Image from 'next/image';
import Link from 'next/link';
import PopularProducts, { FilterCatalog } from './components/home/PopularProducts';
import SiteShell from './components/site/SiteShell';
import ServicePanels from './components/site/ServicePanels';
import { WHATSAPP_URL } from './components/site/contact';

export const metadata = {
    title: 'Biozonos | Inicio',
    description: 'Sistemas de purificación de agua y filtros de ozono en Duitama, Sogamoso, Tunja y todo Boyacá para hogares, empresas y comercios.',
};

const services = [
    { title: 'Purificadores de Agua', description: 'Agua limpia y con buen sabor directamente del grifo. Instalamos equipos para hogares, oficinas y comercios, con asesoría según tu consumo.', image: '/home/purificacion.jpg', alt: 'Vaso llenándose de agua del grifo' },
    { title: 'Purificadores de Aire', description: 'Respira un aire libre de olores, humo y microorganismos. Ideales para habitaciones, consultorios, cocinas y locales.', image: '/home/aire.jpg', alt: 'Mujer descansando y respirando aire limpio en casa' },
    { title: 'Bebederos de Ozono', description: 'Agua purificada al instante para colegios, empresas y espacios con mucha gente. Higiénicos, prácticos y de bajo mantenimiento.', image: '/home/bebederos.jpg', alt: 'Bebedero de acero inoxidable con varias llaves' },
];

export default function Home() {
    return <SiteShell>
            <section className="bz-hero" data-surface="dark" data-pointer-stage data-hero-scene aria-labelledby="home-title">
              <div className="bz-hero-stage">
                <div className="bz-hero-photo"><Image src="/home/premium/water-hero.png" alt="" fill sizes="100vw" priority /></div>
                <div className="bz-hero-shade" />
                <div className="bz-hero-content">
                    <h1 id="home-title"><span className="bz-hero-heading"><span className="bz-hero-line bz-hero-line-first">Purificadores</span>{' '}<span className="bz-hero-line bz-hero-line-second">de Agua</span></span>{' '}<span className="bz-hero-location">y filtros de ozono en Duitama, Sogamoso, Tunja y Boyacá</span></h1>
                    <div className="bz-hero-action"><a className="bz-pill bz-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contactanos <span aria-hidden="true">↗</span></a></div>
                </div>
                <div className="bz-hero-bottom"><span aria-hidden="true">BIOZONOS</span><a href="#catalogo" aria-label="Ver Productos Populares">↓</a></div>
              </div>
            </section>
            <PopularProducts />
            <FilterCatalog />
            <section id="nosotros" className="bz-story" data-surface="dark" data-scroll-scene aria-labelledby="care-title">
                <div className="bz-story-stage">
                    <div className="bz-story-photo" data-parallax><Image src="/home/premium/kitchen-water.png" alt="Vaso de agua en una cocina" fill sizes="100vw" /></div>
                    <div className="bz-story-shade" />
                    <div className="bz-story-copy" data-reveal>
                        <h2 id="care-title">Cuida a los que <em>más quieres</em></h2>
                        <h3>Purificadores de agua con ozono en Duitama, Sogamoso, Tunja y Boyacá</h3>
                        <p>El ozono elimina bacterias, virus y malos olores sin químicos. Nuestros equipos purifican el agua y el aire de tu casa con tecnología moderna, fácil de usar y pensada para durar.</p>
                    </div>
                    <figure className="bz-quote" data-reveal>
                        <blockquote>&quot;Si hay magia en este planeta, está contenida en el agua.&quot;</blockquote>
                        <figcaption>- Loren Eiseley -<span>Escritor de ciencia y naturaleza</span></figcaption>
                    </figure>
                </div>
            </section>
            <section id="servicios" className="bz-services" data-surface="light" aria-labelledby="services-title">
                <header data-reveal><p>Lo que hacemos por ti</p><h2 id="services-title">Nuestros <em>servicios</em></h2></header>
                <ServicePanels items={services} />
            </section>
            <section className="bz-repair" data-surface="dark" data-pointer-stage aria-labelledby="repair-title">
                <div className="bz-repair-photo" data-parallax><Image src="/home/plomero.png" alt="Técnico revisando la instalación bajo el fregadero de una cocina" fill sizes="100vw" /></div>
                <div className="bz-repair-shade" />
                <span className="bz-repair-mark" aria-hidden="true">B.</span>
                <div data-reveal><h2 id="repair-title">Reparación <em>y mantenimiento</em> de purificadores</h2>
                    <p>¿Tu equipo dejó de funcionar? Nuestros técnicos lo revisan, lo reparan y lo dejan como nuevo. Años de experiencia y garantía en cada servicio.</p>
                    <Link className="bz-pill" href="/contacto">Agenda tu revisión <span aria-hidden="true">↗</span></Link>
                </div>
            </section>
    </SiteShell>;
}
