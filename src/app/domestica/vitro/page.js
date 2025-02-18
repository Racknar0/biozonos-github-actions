import Breadcrumbs from '../../components/breadcumbs/Breadcumbs'
import Image from 'next/image'
import '../../scss/pages/domestica/acrilico.scss'
import GalleryComponent from '@/app/components/gallery/GalleryComponent'

const images = [
  {
    original: "/products/vitro/vitro_black.jpg",
    thumbnail: "/products/vitro/vitro_black.jpg",
    thumbnailAlt: 'Vitro Black',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/vitro/vitro_white.jpg",
    thumbnail: "/products/vitro/vitro_white.jpg",
    thumbnailAlt: 'Vitro White',
    thumbnailClass: 'thumbnail',
  }
  ,
  {
    original: "/products/vitro/vitro_stone.jpg",
    thumbnail: "/products/vitro/vitro_stone.jpg",
    thumbnailAlt: 'Vitro Stone',
    thumbnailClass: 'thumbnail',
  }
];

export const metadata = {
  title: "Biozonos | Vitro",
  description: "Purificadores de Agua y filtros de ozono en Duitama, Sogamoso, Tunja y Boyacá",
};

const page = () => {
  return (
    <div className="acrilico_main_container">
      <Breadcrumbs link="/domestica/vitro" nombre="Vitro" />
      <div className='hero_container'>
        <div className='overlay'></div>
        <Image src="/products/cocina_vitro.png" alt="imagen_cocina" width={1920} height={581}  className="image" />
        <div className="hero_text">
          <h1 className='hero_title'>Equipos vitrificados</h1>
          <p className='hero_description'>Experimenta la excelencia en purificación de agua con nuestro equipo de ozono en cristal. Diseñado para ofrecer la máxima calidad y durabilidad, nuestro equipo proporciona una purificación eficiente y confiable. Disfruta del agua más pura y cristalina en tu hogar o negocio con nuestra solución elegante y moderna.</p>
        </div>
      </div>
      <div className='gallery_container'>
        <GalleryComponent images={images} />
      </div>
      <div className='characteristic_container'>
            <h2 className='characteristic_title'>Características</h2>
            <p className='characteristic_description'>La serie Acero en purificadores de agua, semi industriales Vitro de alto higiene “Requisito INVIMA” satisface todas las necesidades El agua ozonizada cuenta con muchos beneficios para la salud.</p>
            <p className='characteristic_description'>Estos equipos son ideales para la purificación de agua en tu hogar, con la más alta tecnología y los más altos estándares de calidad, garantizamos un alto desempeño en nuestros equipos.</p>
            <p className='characteristic'>- Capacidad de purificación de 10 litros por minuto</p>
            <p className='characteristic'>- Material de alta calidad en acrílico</p>
            <p className='characteristic'>- Fácil instalación</p>
            <p className='characteristic'>- Fácil mantenimiento</p>
            <p className='characteristic'>- Diseño moderno</p>
        </div>
    </div>
  )
}

export default page