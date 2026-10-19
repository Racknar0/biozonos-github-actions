import Image from 'next/image';
import PageHero from '../components/site/PageHero';
import CtaBand from '../components/site/CtaBand';
import { WHATSAPP_URL } from '../components/site/contact';

export const metadata = {
    title: 'Biozonos | Línea Industrial',
    description: 'Línea Industrial'
};

const systems = [
    ['Sistema de filtración', 'Retiene sedimentos e impurezas antes de tratar el agua.'],
    ['Sistema de ozonización', 'Desinfecta el agua con ozono, sin químicos.'],
    ['Sistema de refrigeración', 'Entrega el agua fresca y lista para beber.'],
];

const showcase = [
    { title: 'BEBEDERO COLLEGE DE 25 LITROS – 2 SALIDAS D2L25', images: ['/industrial/25L_2salidas.jpg', '/industrial/25L_2salidas_2.jpg'], size: [767, 1024] },
    { title: 'BEBEDERO COLLEGE DE 50 LITROS – 4 SALIDAS D4L50', images: ['/industrial/25L_4salidas_1.jpg', '/industrial/25L_4salidas_2.jpg'], size: [593, 861] },
    { title: 'BEBEDERO COLLEGE DE 50 LITROS – 4 SALIDAS D4L50', images: ['/industrial/50L.jpg', '/industrial/50L_2.jpg'], size: [1024, 576], wide: true },
];

const requirements = ['1 punto de salida de agua.', '1 punto de energía a 110v'];
const plantFeatures = ['14 MESES de garantía', 'Carcasa en acero quirúrgico, acrílico o vidrio templando de alto higiene “Requisito INVIMA”', 'Capacidad de purificación 150 L/H', 'Bajo consumo hasta 15W', 'Flujo continuo hasta 8 Lt s/m'];

export default function IndustrialPage() {
    return <>
        <PageHero crumbs={[['Línea Industrial', '/industrial']]} title={<>Línea <em>Industrial</em></>}
            intro="Este Equipo consta de tres (3) sistemas independientes entre sí pero que actúan en perfecta sincronización."
            image="/industrial/50L.jpg" alt="Bebedero industrial de acero inoxidable">
            <a className="bz-pill bz-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Solicitar cotización <span aria-hidden="true">↗</span></a>
        </PageHero>

        <section className="bz-section bz-section--blue" data-surface="light" aria-label="Sistemas del equipo">
            <ul className="bz-cards" style={{ listStyle: 'none', margin: 0, padding: 0 }}>{systems.map(([title, text], i) => <li key={title} className="bz-card" data-reveal style={{ '--i': i }}>
                <span className="bz-card-index" aria-hidden="true">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
            </li>)}</ul>
        </section>

        <section className="bz-section" data-surface="light" aria-labelledby="beneficiarios-title">
            <div className="bz-split">
                <header data-reveal>
                    <span className="bz-eyebrow">Colegios e instituciones</span>
                    <h2 id="beneficiarios-title" className="bz-section-title">Beneficiarios</h2>
                </header>
                <div className="bz-prose" data-reveal>
                    <p className="bz-lead">Las instituciones educativas ya que brindan un mejor servicio a los estudiantes; y directamente los estudiantes porque sus alimentos serán procesados con agua correctamente tratada, y contaran con agua 100% pura y consumible en cualquier momento.</p>
                    <p>En los colegios de la zona las áreas de cocina y los lugares donde se procesan los alimentos en algunos colegios e instituciones no se cuenta de un correcto tratamiento del agua con el cual se procesan los alimentos, es importante esto ya que el no hacerlo conlleva a muchos problemas como la probabilidad de adquirir enfermedades que son transmitidas por el agua. Adicionalmente es importante brindarle agua de calidad y purificada gratuita a los estudiantes a la comunidad.</p>
                    <p>En muchos otros lugares del país como en universidades y colegios del sector privado se cuentan con estos sistemas de bebederos que son usados para este fin.</p>
                    <p>En cuanto al tratamiento de agua BIOZONOS plantea una instalación de una planta de tratamiento para las cocinas y demás lugares donde se utilice agua para el consumo en las instituciones. Para la dispensación del agua en los colegios BIOZONOS plantea la instalación de uno o dos bebederos según lo requiera la institución para abastecer de líquido totalmente pura a esta</p>
                </div>
            </div>
        </section>

        <section className="bz-section bz-section--tint" data-surface="light" aria-labelledby="bebederos-title">
            <header className="bz-section-head" data-reveal>
                <span className="bz-eyebrow">Equipos</span>
                <h2 id="bebederos-title" className="bz-section-title">Nuestros <em>bebederos</em></h2>
            </header>
            <div className="bz-showcase">{showcase.map(({ title, images, size, wide }, i) => <article key={i} className="bz-showcase-item">
                <h3 data-reveal>{title}</h3>
                <div className={'bz-showcase-images' + (wide ? ' bz-showcase-images--wide' : '')}>
                    {images.map((src, j) => <figure key={src} data-reveal style={{ '--i': j }}><Image src={src} alt={title.toLowerCase() + ' – vista ' + (j + 1)} fill sizes="(min-width: 768px) 50vw, 100vw" /></figure>)}
                </div>
            </article>)}</div>
        </section>

        <section className="bz-section" data-surface="light" aria-labelledby="plantas-title">
            <div className="bz-split">
                <header data-reveal>
                    <span className="bz-eyebrow">Plantas de tratamiento</span>
                    <h2 id="plantas-title" className="bz-section-title">Carac&shy;terísticas</h2>
                </header>
                <div className="bz-prose" data-reveal>
                    <p className="bz-lead">Bebedero de agua con capacidad de 100 litros por hora, con 7 salidas de agua, ideal para instituciones educativas, colegios, universidades, empresas, entre otros.</p>
                    <p>Este bebedero cuenta con un sistema de filtración, ozonización y refrigeración, que garantiza un agua pura y de calidad para el consumo de los estudiantes y trabajadores.</p>
                    <ul className="bz-features">{plantFeatures.map((item, i) => <li key={item} data-reveal style={{ '--i': i }}>{item}</li>)}</ul>
                    <p style={{ marginTop: 40 }}><strong>Para la instalación de las plantas de tratamiento se deben tener como requisito:</strong></p>
                    <ul className="bz-features">{requirements.map((item, i) => <li key={item} data-reveal style={{ '--i': i }}>{item}</li>)}</ul>
                </div>
            </div>
        </section>

        <CtaBand title={<>Agua pura para <em>tu institución</em></>} text="Diseñamos la solución según el número de personas y el espacio disponible." label="Más información" href={WHATSAPP_URL} />
    </>;
}
