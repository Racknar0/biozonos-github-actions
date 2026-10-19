import Image from 'next/image';
import Link from 'next/link';
import '../../scss/pages/home/popular_products.scss';
import ProductPreview from './ProductPreview';

const lines = [
    {
        id: 'acrilico', label: 'Línea Acrílico', href: '/domestica/acrilico',
        products: [
            ['Aero', '/products/acrilico/aero.png'],
            ['Nova S', '/products/acrilico/nova-s.png'],
            ['Nova M', '/products/acrilico/nova-m.png'],
            ['Mini', '/products/acrilico/mini.png'],
            ['Manzana R', '/products/acrilico/manzana.png'],
            ['Manzana V', '/products/acrilico/manzana-v.png'],
            ['Gota', '/products/acrilico/gota.png'],
            ['Toro', '/products/acrilico/toro.png'],
            ['Oso', '/products/acrilico/oso.png'],
            ['Vaca', '/products/acrilico/vaca.png'],
            ['Fresa', '/products/acrilico/fresa.png'],
            ['Chef', '/products/acrilico/chef.png'],
        ],
    },
    {
        id: 'inox', label: 'Línea Inox', href: '/domestica/inox',
        products: [
            ['Purificador de agua Ozono Inox', '/products/inox/vitro-inox.png'],
            ['Inox G', '/products/inox/inox-g.png'],
            ['Inox M', '/products/inox/inox-m.png'],
            ['Inox C', '/products/inox/inox-c.png'],
        ],
    },
    {
        id: 'vitro', label: 'Línea Vitro', href: '/domestica/vitro',
        products: [
            ['Purificador de agua Vitro White', '/products/vitro/vitro_white.png'],
            ['Vitro Black', '/products/vitro/vitro_black.png'],
            ['Vitro Stone', '/products/vitro/vitro_stone.png'],
        ],
    },
    {
        id: 'touch', label: 'Touch', href: '/domestica/touch',
        products: [
            ['Purificador de agua Ozono Touch', '/products/touch/touch.png'],
        ],
    },
];

const filters = [
    ['Reemplazo Filtro Bugía AP200', '/home/bugia.jpg'],
    ['Equipo de purificación de gravedad', '/products/gravedad/gravedad.png'],
];

export function ProductCard({ product, eager }) {
    const [name, image] = product;
    const photo = <Image src={image} alt={name} width={1024} height={1300}
        sizes="(min-width: 1200px) 270px, (min-width: 992px) 25vw, (min-width: 768px) 33vw, calc(100vw - 32px)"
        loading={eager ? 'eager' : 'lazy'} className="catalog_product_image" />;

    return (
        <article className="catalog_product" data-scroll-card>
            <ProductPreview name={name} image={image}>{photo}</ProductPreview>
            <div className="catalog_product_body">
                <a href={'https://wa.me/573233642951?text=' + encodeURIComponent('Hola, me interesa ' + name + '. Quisiera más información.')}
                    target="_blank" rel="noopener noreferrer" className="catalog_buy"
                    aria-label={'Comprar ' + name}>
                    Comprar
                    <span aria-hidden="true">↗</span>
                </a>
            </div>
        </article>
    );
}

export default function PopularProducts() {
    return (
        <section className="home_catalog popular_products" id="catalogo" data-surface="light" aria-labelledby="catalog-title">
            <header className="catalog_header">
                <h2 id="catalog-title" className="title_section">Productos Populares</h2>
                <p className="subtitle_section">Productos que más solicitan nuestros clientes</p>
            </header>
            {lines.map(line => (
                <section key={line.id} id={'linea-' + line.id} className="catalog_line" data-catalog-scene
                    aria-labelledby={'catalog-heading-' + line.id}>
                    <h3 id={'catalog-heading-' + line.id} className="title_small catalog_line_title">
                        <Link href={line.href} prefetch={false}>{line.label}<span aria-hidden="true">↗</span></Link>
                    </h3>
                    <div className={'catalog_grid' + (line.products.length === 1 ? ' catalog_grid_single' : '')}>
                        {line.products.map((product, index) => (
                            <ProductCard key={product[1]} product={product}
                                eager={line.id === 'acrilico' && index < 2} />
                        ))}
                    </div>
                </section>
            ))}
        </section>
    );
}

export function FilterCatalog() {
    return (
        <section className="home_catalog filter_catalog" id="filtros" data-surface="light" aria-labelledby="filter-title">
            <header className="catalog_header">
                <h2 id="filter-title" className="title_section">Repuestos y filtros de gravedad</h2>
                <p className="subtitle_section">Mantén tu equipo funcionando como el primer día con repuestos originales.</p>
            </header>
            <div className="catalog_grid catalog_grid_filters">
                {filters.map(product => <ProductCard key={product[1]} product={product} />)}
            </div>
        </section>
    );
}
