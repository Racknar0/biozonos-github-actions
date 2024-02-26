
import React from 'react'
import Breadcrumbs from '../../components/breadcumbs/Breadcumbs'
import Image from 'next/image'
import '../../scss/pages/domestica/acrilico.scss'
import GalleryComponent from '@/app/components/gallery/GalleryComponent'

const images = [
  {
    original: "/products/acrilico/aero.jpg",
    thumbnail: "/products/acrilico/aero.jpg",
    thumbnailAlt: 'Aero',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/nova-s.jpg",
    thumbnail: "/products/acrilico/nova-s.jpg",
    thumbnailAlt: 'Nova S',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/nova-m.jpg",
    thumbnail: "/products/acrilico/nova-m.jpg",
    thumbnailAlt: 'Nova M',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/mini.jpg",
    thumbnail: "/products/acrilico/mini.jpg",
    thumbnailAlt: 'Mini',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/manzana.jpg",
    thumbnail: "/products/acrilico/manzana.jpg",
    thumbnailAlt: 'Manzana R',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/manzana-v.jpg",
    thumbnail: "/products/acrilico/manzana-v.jpg",
    thumbnailAlt: 'Manzana V',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/GOTA.jpg",
    thumbnail: "/products/acrilico/GOTA.jpg",
    thumbnailAlt: 'Gota',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/toro.jpg",
    thumbnail: "/products/acrilico/toro.jpg",
    thumbnailAlt: 'Toro',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/oso.jpg",
    thumbnail: "/products/acrilico/oso.jpg",
    thumbnailAlt: 'Oso',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/vaca.jpg",
    thumbnail: "/products/acrilico/vaca.jpg",
    thumbnailAlt: 'Vaca',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/fresa.jpg",
    thumbnail: "/products/acrilico/fresa.jpg",
    thumbnailAlt: 'Fresa',
    thumbnailClass: 'thumbnail',
  },
  {
    original: "/products/acrilico/chef.jpg",
    thumbnail: "/products/acrilico/chef.jpg",
    thumbnailAlt: 'Chef',
    thumbnailClass: 'thumbnail',
  },
  
];


const page = () => {
  return (
    <div className="acrilico_main_container">
      <Breadcrumbs link="/domestica/acrilico" nombre="Acrílico" />
      <div className='hero_container'>
        <div className='overlay'></div>
        <Image src="/products/cocina.png" alt="imagen_cocina" width={1920} height={581}  className="image" />
        <div className="hero_text">
          <h1 className='hero_title'>Equipos de Acrílico</h1>
          <p className='hero_description'>Contamos con equipos de última tecnología para la purificación de aguas/aire en tu casa, equipos modernos diseñados con los más altos estándares para garantizar un alto desempeño.</p>
        </div>
      </div>
      <div className='gallery_container'>
        <GalleryComponent images={images} />
      </div>
      <div className='characteristic_container'>
            <h2 className='characteristic_title'>Características</h2>
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