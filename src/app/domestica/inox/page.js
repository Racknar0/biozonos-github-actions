import ProductLine from '../../components/site/ProductLine';

export const metadata = {
    title: "Biozonos | Acero Inoxidable",
    description: "Purificadores de Agua y filtros de ozono en Duitama, Sogamoso, Tunja y Boyacá",
};

const products = [
    ['Vitro Inox', '/products/inox/vitro-inox.png'],
    ['Inox G', '/products/inox/inox-g.png'],
    ['Inox M', '/products/inox/inox-m.png'],
    ['Inox C', '/products/inox/inox-c.png'],
];

const features = {
    paragraphs: [
        'La serie Acero en purificadores de agua, semi industriales Vitro de alto higiene “Requisito INVIMA” satisface todas las necesidades El agua ozonizada cuenta con muchos beneficios para la salud.',
        'Estos equipos son ideales para la purificación de agua en tu hogar, con la más alta tecnología y los más altos estándares de calidad, garantizamos un alto desempeño en nuestros equipos.',
    ],
    items: ['Capacidad de purificación de 10 litros por minuto', 'Material de alta calidad en acero inoxidable', 'Fácil instalación', 'Fácil mantenimiento', 'Diseño moderno'],
};

export default function InoxPage() {
    return <ProductLine crumb="Acero Inoxidable" href="/domestica/inox" title={<>Equipos en <em>Acero Inoxidable</em></>}
        intro="Descubre la pureza del agua con nuestros equipos de purificación en acero inoxidable. Con un diseño elegante y duradero, nuestro equipo garantiza una purificación eficaz y confiable. Disfruta de agua limpia y fresca en tu hogar o empresa con nuestra solución moderna y de alta calidad"
        image="/products/cocina_inox.png" products={products} features={features} />;
}
