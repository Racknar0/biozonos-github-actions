import PageHero from '../components/site/PageHero';
import CtaBand from '../components/site/CtaBand';
import { WHATSAPP_URL } from '../components/site/contact';

export const metadata = {
    title: "Biozonos | Nosotros",
    description: "Purificadores de Agua y filtros de ozono en Sogamoso, Duitama, Tunja y Boyacá",
};

const highlights = [
    ['De distribuidores a fabricantes', 'Iniciamos como distribuidores y llegamos a fabricar productos orientados al bienestar y la salud de las personas.'],
    ['Presencia nacional', 'Clientes en toda la Región Caribe y en ciudades como Bogotá, Bucaramanga, Cúcuta y Villavicencio.'],
    ['Carbón activado certificado', 'Se ajusta a los requerimientos de sustancias extraíbles con agua de la norma europea EN 12915.'],
];

export default function NosotrosPage() {
    return <>
        <PageHero crumbs={[['Nosotros', '/nosotros']]} title={<>Acerca de <em>Nosotros</em></>}
            intro="Empresa de Duitama, Boyacá, dedicada a la fabricación, el mantenimiento y la reparación de purificadores de agua con base en ozono."
            image="/home/premium/kitchen-water.png" alt="Vaso de agua sobre la encimera de una cocina" position="70% center" />

        <section className="bz-section" data-surface="light" aria-labelledby="historia-title">
            <div className="bz-split">
                <header data-reveal>
                    <span className="bz-eyebrow">Nuestra historia</span>
                    <h2 id="historia-title" className="bz-section-title">Hechos en <em>Boyacá</em></h2>
                </header>
                <div className="bz-prose" data-reveal>
                    <p className="bz-lead">BIOZONOS una empresa creada en la ciudad de Duitama, Boyacá dedicada a la fabricación y prestación de servicios de mantenimientos y reparaciones de equipos purificadores de agua con base en ozono.</p>
                    <p>Iniciamos como distribuidores y llegamos a fabricar productos orientados al bienestar y la salud de las personas en el sector residencial e industrial donde requiera agua purificada.</p>
                    <p>Hemos llegado a conquistar clientes en todas las ciudades de la Región Caribe, y en ciudades del interior como Bogotá, Bucaramanga, Cúcuta, Villavicencio entre otras. En nuestro afán de siempre ofrecer productos con excelente calidad utilizamos carbón activado, del cual podemos certificar que se ajusta a los requerimientos de las sustancias extraíbles con agua según la norma europea EN 12915. Y es un componente indispensable en el proceso de purificación del agua destinada para consumo humano.</p>
                    <p>Además, siempre buscamos proporcionar a nuestros clientes y consumidores finales un producto hecho dentro de los parámetros de calidad confiable. BIOZONOS, ha ido siempre, y seguirá igualmente adelante en innovación y calidad de sus productos, además de ofrecer el mantenimiento, reparación y repuestos originales.</p>
                </div>
            </div>
        </section>

        <section className="bz-section bz-section--blue" data-surface="light" aria-label="Lo que nos distingue">
            <div className="bz-cards">{highlights.map(([title, text], i) => <article key={title} className="bz-card" data-reveal style={{ '--i': i }}>
                <span className="bz-card-index" aria-hidden="true">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
            </article>)}</div>
        </section>

        <CtaBand title={<>Hablemos de <em>tu agua</em></>} text="Te asesoramos para elegir el equipo ideal para tu hogar o tu empresa." label="Más información" href={WHATSAPP_URL} />
    </>;
}
