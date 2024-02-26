import Breadcrumbs from '../../components/breadcumbs/Breadcumbs';
import Image from 'next/image';
import '../../scss/pages/domestica/acrilico.scss';
import GalleryComponent from '@/app/components/gallery/GalleryComponent';



export const metadata = {
  title: "Biozonos | Puricadores Acero Inoxidable",
  description: "Purificadores de Agua y filtros de ozono en Sogamoso, Duitama, Tunja y Boyacá",
};

const page = () => {
    const images = [
        {
            original: '/products/inox/vitro-inox.jpg',
            thumbnail: '/products/inox/vitro-inox.jpg',
            thumbnailAlt: 'Vitro Inox',
            thumbnailClass: 'thumbnail',
        },
        {
            original: '/products/inox/inox-g.jpg',
            thumbnail: '/products/inox/inox-g.jpg',
            thumbnailAlt: 'Inox G',
            thumbnailClass: 'thumbnail',
        },
        {
            original: '/products/inox/inox-m.jpg',
            thumbnail: '/products/inox/inox-m.jpg',
            thumbnailAlt: 'Inox M',
            thumbnailClass: 'thumbnail',
        },
        {
            original: '/products/inox/inox-c.jpg',
            thumbnail: '/products/inox/inox-c.jpg',
            thumbnailAlt: 'Inox C',
            thumbnailClass: 'thumbnail',
        },
        {
            original: '/products/inox/miniacero.png',
            thumbnail: '/products/inox/miniacero.png',
            thumbnailAlt: 'Inox C',
            thumbnailClass: 'thumbnail',
        },
    ];

    return (
        <div className="acrilico_main_container">
            <Breadcrumbs link="/domestica/inox" nombre="Acero Inoxidable" />
            <div className="hero_container">
                <div className="overlay"></div>
                <Image
                    src="/products/cocina_inox.png"
                    alt="imagen_cocina"
                    width={1920}
                    height={581}
                    className="image"
                />
                <div className="hero_text">
                    <h1 className="hero_title">Equipos en Acero Inoxidable</h1>
                    <p className="hero_description">
                        Descubre la pureza del agua con nuestros equipos de
                        purificación en acero inoxidable. Con un diseño elegante
                        y duradero, nuestro equipo garantiza una purificación
                        eficaz y confiable. Disfruta de agua limpia y fresca en
                        tu hogar o empresa con nuestra solución moderna y de
                        alta calidad
                    </p>
                </div>
            </div>
            <div className="gallery_container">
                <GalleryComponent images={images} />
            </div>
            <div className="characteristic_container">
                <h2 className="characteristic_title">Características</h2>
                <p className="characteristic_description">
                    La serie Acero en purificadores de agua, semi industriales
                    Vitro de alto higiene “Requisito INVIMA” satisface todas las
                    necesidades El agua ozonizada cuenta con muchos beneficios
                    para la salud.
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
                    - Material de alta calidad en acero inoxidable
                </p>
                <p className="characteristic">- Fácil instalación</p>
                <p className="characteristic">- Fácil mantenimiento</p>
                <p className="characteristic">- Diseño moderno</p>
            </div>
        </div>
    );
};

export default page;
