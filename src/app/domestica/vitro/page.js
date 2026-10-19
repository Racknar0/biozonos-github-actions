import ProductLine from '../../components/site/ProductLine';

export const metadata = {
  title: "Biozonos | Vitro",
  description: "Purificadores de Agua y filtros de ozono en Duitama, Sogamoso, Tunja y Boyacá",
};

const products = [
  ['Vitro Black', '/products/vitro/vitro_black.png'],
  ['Vitro White', '/products/vitro/vitro_white.png'],
  ['Vitro Stone', '/products/vitro/vitro_stone.png'],
];

const features = {
  paragraphs: [
    'La serie Acero en purificadores de agua, semi industriales Vitro de alto higiene “Requisito INVIMA” satisface todas las necesidades El agua ozonizada cuenta con muchos beneficios para la salud.',
    'Estos equipos son ideales para la purificación de agua en tu hogar, con la más alta tecnología y los más altos estándares de calidad, garantizamos un alto desempeño en nuestros equipos.',
  ],
  items: ['Capacidad de purificación de 10 litros por minuto', 'Material de alta calidad en acrílico', 'Fácil instalación', 'Fácil mantenimiento', 'Diseño moderno'],
};

export default function VitroPage() {
  return <ProductLine crumb="Vitro" href="/domestica/vitro" title={<>Equipos <em>vitrificados</em></>}
    intro="Experimenta la excelencia en purificación de agua con nuestro equipo de ozono en cristal. Diseñado para ofrecer la máxima calidad y durabilidad, nuestro equipo proporciona una purificación eficiente y confiable. Disfruta del agua más pura y cristalina en tu hogar o negocio con nuestra solución elegante y moderna."
    image="/products/cocina_vitro.png" products={products} features={features} />;
}
