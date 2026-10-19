import ProductLine from '../../components/site/ProductLine';

export const metadata = {
  title: "Biozonos | Touch",
  description: "Purificadores de Agua y filtros de ozono en Duitama, Sogamoso, Tunja y Boyacá",
};

const products = [
  ['Touch', '/products/touch/touch.png'],
];

const features = {
  paragraphs: [
    'La serie Touch Technology en purificadores de agua, con panel touch frontal alto higiene “Requisito INVIMA” satisface todas las necesidades El agua ozonizada cuenta con muchos beneficios para la salud.',
    'Estos equipos son ideales para la purificación de agua en tu hogar, con la más alta tecnología y los más altos estándares de calidad, garantizamos un alto desempeño en nuestros equipos.',
  ],
  items: ['Capacidad de purificación de 10 litros por minuto', 'Panel de cristal con botón táctil', 'Fácil instalación', 'Fácil mantenimiento', 'Diseño moderno'],
};

export default function TouchPage() {
  return <ProductLine crumb="Touch" href="/domestica/touch" title={<>Equipos con <em>tecnología Touch</em></>}
    intro="Descubre la innovación en purificación de agua con nuestro equipo de ozono con panel de cristal y botón táctil. Diseñado para brindar comodidad y eficiencia, este equipo combina tecnología de vanguardia con un diseño elegante. Disfruta de agua purificada al alcance de tu mano con solo tocar un botón, garantizando la calidad y frescura que tu hogar o negocio merece."
    image="/products/cocina_futuro.png" products={products} features={features} />;
}
