import React from 'react';
import Breadcrumbs from '../../components/breadcumbs/Breadcumbs';
import Image from 'next/image';
import '../../scss/pages/domestica/acrilico.scss';
import GalleryComponent from '@/app/components/gallery/GalleryComponent';

const images = [
    {
        original: '/products/acrilico/aero.png',
        thumbnail: '/products/acrilico/aero.png',
        thumbnailAlt: 'Aero',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/nova-s.png',
        thumbnail: '/products/acrilico/nova-s.png',
        thumbnailAlt: 'Nova S',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/nova-m.png',
        thumbnail: '/products/acrilico/nova-m.png',
        thumbnailAlt: 'Nova M',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/mini.png',
        thumbnail: '/products/acrilico/mini.png',
        thumbnailAlt: 'Mini',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/manzana.png',
        thumbnail: '/products/acrilico/manzana.png',
        thumbnailAlt: 'Manzana R',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/manzana-v.png',
        thumbnail: '/products/acrilico/manzana-v.png',
        thumbnailAlt: 'Manzana V',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/gota.png',
        thumbnail: '/products/acrilico/gota.png',
        thumbnailAlt: 'Gota',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/toro.png',
        thumbnail: '/products/acrilico/toro.png',
        thumbnailAlt: 'Toro',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/oso.png',
        thumbnail: '/products/acrilico/oso.png',
        thumbnailAlt: 'Oso',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/vaca.png',
        thumbnail: '/products/acrilico/vaca.png',
        thumbnailAlt: 'Vaca',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/fresa.png',
        thumbnail: '/products/acrilico/fresa.png',
        thumbnailAlt: 'Fresa',
        thumbnailClass: 'thumbnail',
    },
    {
        original: '/products/acrilico/chef.png',
        thumbnail: '/products/acrilico/chef.png',
        thumbnailAlt: 'Chef',
        thumbnailClass: 'thumbnail',
    },
];

export const metadata = {
    title: 'Biozonos | Acricílico',
    description:
        'Purificadores de Agua y filtros de ozono en Duitama, Sogamoso, Tunja y Boyacá',
};

const page = () => {
    return (
        <div className="acrilico_main_container">
            <Breadcrumbs link="/domestica/acrilico" nombre="Acrílico" />
            <div className="hero_container">
                <div className="overlay"></div>
                <Image
                    src="/products/cocina.png"
                    alt="imagen_cocina"
                    width={1920}
                    height={581}
                    className="image"
                />
                <div className="hero_text">
                    <h1 className="hero_title">Equipos de Acrílico</h1>
                    <p className="hero_description">
                        Descubre la última innovación en purificación de agua
                        con nuestro equipo de purificación de ozono en acrílico.
                        Diseñado con la más alta calidad y tecnología avanzada,
                        nuestro equipo garantiza una purificación efectiva y
                        eficiente del agua en tu hogar o empresa.
                    </p>
                </div>
            </div>
            <div className="gallery_container">
                <GalleryComponent images={images} />
            </div>
            <div className="characteristic_container">
                <h2 className="characteristic_title">Características</h2>
                <p className="characteristic_description">
                    La serie Acrilico en purificadores de agua, domesticos
                    satisface todas las necesidades El agua ozonizada cuenta con
                    muchos beneficios para la salud como . Prevenir la
                    celulitis, tonificar la piel por hidratación , cuida las
                    paredes estomacales previniendo la acidez, gastritis, úlcera
                    y todo malestar estomacal.
                </p>
                <p className="characteristic_description">
                    Estos equipos son ideales para la purificación de agua en tu
                    hogar, con la más alta tecnología y los más altos estándares
                    de calidad, garantizamos un alto desempeño en nuestros
                    equipos.
                </p>
                <p className="characteristic">
                    - Capacidad de purificación de 10 litros por minuto
                </p>
                <p className="characteristic">
                    - Material de alta calidad en acrílico
                </p>
                <p className="characteristic">- Fácil instalación</p>
                <p className="characteristic">- Fácil mantenimiento</p>
                <p className="characteristic">- Diseño moderno</p>
            </div>
        </div>
    );
};

export default page;
