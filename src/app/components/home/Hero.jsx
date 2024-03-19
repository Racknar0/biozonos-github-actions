import Image from 'next/image';
import '../../scss/pages/home/hero.scss';

const Hero = () => {
    return (
        <div className="hero_container">
            <Image
                src="/home/water.png"
                alt="ozonos_water_hero_image"
                objectPosition="right"
                width={1920}
                height={852}
                loading='eager'
            />
        </div>
    );
};

export default Hero;
