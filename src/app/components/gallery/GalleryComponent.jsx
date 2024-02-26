'use client';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const GalleryComponent = ({images}) => {
    

    return (
        <ImageGallery 
            items={images}
            infinite={true}
            thumbnailPosition='bottom'
            showBullets={true}
            showIndex={true}
            autoPlay={true}
            disableSwipe={false}
            slideInterval={6000}
            slideDuration={1500}
        />
    );
};

export default GalleryComponent;