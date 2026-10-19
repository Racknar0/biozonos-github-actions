'use client';
import ImageGallery from 'react-image-gallery';
import { getImageProps } from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';

const GalleryComponent = ({images}) => {
    // Las láminas originales se conservan completas; la galería recibe versiones
    // optimizadas para no descargar el PNG completo en cada miniatura.
    const galleryImages = images.map((image) => {
        if (!image.original.startsWith('/products/') || !image.original.endsWith('.png')) {
            return image;
        }
        const alt = image.thumbnailAlt || '';
        return {
            ...image,
            original: getImageProps({ src: image.original, width: 1024, height: 1300, alt }).props.src,
            thumbnail: getImageProps({ src: image.thumbnail, width: 100, height: 127, alt }).props.src,
        };
    });

    return (
        <ImageGallery 
            items={galleryImages}
            infinite={true}
            thumbnailPosition='bottom'
            showBullets={true}
            showIndex={true}
            autoPlay={true}
            disableSwipe={false}
            slideInterval={6000}
        />
    );
};

export default GalleryComponent;
