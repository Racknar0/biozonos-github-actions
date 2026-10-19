import ProductLine from '../../components/site/ProductLine';

export const metadata = {
    title: 'Biozonos | Acrílico',
    description:
        'Purificadores de Agua y filtros de ozono en Duitama, Sogamoso, Tunja y Boyacá',
};

const products = [
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
];

const features = {
    paragraphs: [
        'La serie Acrilico en purificadores de agua, domesticos satisface todas las necesidades El agua ozonizada cuenta con muchos beneficios para la salud como . Prevenir la celulitis, tonificar la piel por hidratación , cuida las paredes estomacales previniendo la acidez, gastritis, úlcera y todo malestar estomacal.',
        'Estos equipos son ideales para la purificación de agua en tu hogar, con la más alta tecnología y los más altos estándares de calidad, garantizamos un alto desempeño en nuestros equipos.',
    ],
    items: ['Capacidad de purificación de 10 litros por minuto', 'Material de alta calidad en acrílico', 'Fácil instalación', 'Fácil mantenimiento', 'Diseño moderno'],
};

export default function AcrilicoPage() {
    return <ProductLine crumb="Acrílico" href="/domestica/acrilico" title={<>Equipos de <em>Acrílico</em></>}
        intro="Descubre la última innovación en purificación de agua con nuestro equipo de purificación de ozono en acrílico. Diseñado con la más alta calidad y tecnología avanzada, nuestro equipo garantiza una purificación efectiva y eficiente del agua en tu hogar o empresa."
        image="/products/cocina.png" products={products} features={features} />;
}
