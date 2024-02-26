import Breadcrumbs from '../../components/breadcumbs/Breadcumbs'
import Image from 'next/image'
import '../../scss/pages/domestica/acrilico.scss'
import GalleryComponent from '@/app/components/gallery/GalleryComponent'

const images = [
  {
    original: "/products/touch/touch.jpg",
    thumbnail: "/products/touch/touch.jpg",
    thumbnailAlt: 'Touch',
    thumbnailClass: 'thumbnail',
  }
];

export const metadata = {
  title: "Biozonos | Puricadores Touch",
  description: "Purificadores de Agua y filtros de ozono en Sogamoso, Duitama, Tunja y Boyacá",
};

const page = () => {
  return (
    <div className="acrilico_main_container">
      <Breadcrumbs link="/domestica/touch" nombre="Touch" />
      <div className='hero_container'>
        <div className='overlay'></div>
        <Image src="/products/cocina_futuro.png" alt="imagen_cocina" width={1920} height={581}  className="image" />
        <div className="hero_text">
          <h1 className='hero_title'>Equipos con tecnología Touch</h1>
          <p className='hero_description'>Descubre la innovación en purificación de agua con nuestro equipo de ozono con panel de cristal y botón táctil. Diseñado para brindar comodidad y eficiencia, este equipo combina tecnología de vanguardia con un diseño elegante. Disfruta de agua purificada al alcance de tu mano con solo tocar un botón, garantizando la calidad y frescura que tu hogar o negocio merece.</p>
        </div>
      </div>
      <div className='gallery_container'>
        <GalleryComponent images={images} />
      </div>
      <div className='characteristic_container'>
            <h2 className='characteristic_title'>Características</h2>
            <p className='characteristic_description'>La serie Touch Technology en purificadores de agua, con panel touch frontal alto higiene “Requisito INVIMA” satisface todas las necesidades El agua ozonizada cuenta con muchos beneficios para la salud.</p>
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