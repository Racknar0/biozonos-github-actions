import PageHero from './PageHero';
import CtaBand from './CtaBand';
import { ProductCard } from '../home/PopularProducts';
import { whatsappText } from './contact';

// Plantilla de las páginas de cada línea doméstica: portada, modelos, características y cierre.
// products: [nombre, imagen]; features: { paragraphs: [], items: [] }.
export default function ProductLine({ crumb, href, title, intro, image, products, features }) {
    return <>
        <PageHero crumbs={[['Línea doméstica', '/domestica'], [crumb, href]]} title={title} intro={intro} image={image} alt="Cocina con purificador de agua instalado">
            <a className="bz-pill bz-cta" href="#modelos">Ver modelos <span aria-hidden="true">↓</span></a>
        </PageHero>

        <section id="modelos" className="home_catalog" data-surface="light" aria-labelledby="models-title">
            <div className="catalog_line" data-catalog-scene>
                <h2 id="models-title" className="title_small catalog_line_title">Modelos {crumb}</h2>
                <div className={'catalog_grid' + (products.length === 1 ? ' catalog_grid_single' : '')}>
                    {products.map((product, index) => <ProductCard key={product[1]} product={product} eager={index < 2} />)}
                </div>
            </div>
        </section>

        <section className="bz-section bz-section--tint" data-surface="light" aria-labelledby="features-title">
            <div className="bz-split">
                <header data-reveal>
                    <span className="bz-eyebrow">Línea {crumb}</span>
                    <h2 id="features-title" className="bz-section-title">Carac&shy;terísticas</h2>
                </header>
                <div className="bz-prose" data-reveal>
                    {features.paragraphs.map((text, i) => <p key={i} className={i === 0 ? 'bz-lead' : undefined}>{text}</p>)}
                    <ul className="bz-features">{features.items.map((item, i) => <li key={item} data-reveal style={{ '--i': i }}>{item}</li>)}</ul>
                </div>
            </div>
        </section>

        <CtaBand title={<>Encuentra <em>tu equipo</em></>} text="Te asesoramos por WhatsApp para elegir el modelo ideal para tu hogar." label="Cotizar ahora" href={whatsappText('Hola, quiero información sobre la línea ' + crumb + '.')} />
    </>;
}
