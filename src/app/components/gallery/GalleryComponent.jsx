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
        />
    );
};

export default GalleryComponent;