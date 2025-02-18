import Image from 'next/image';
import '../../scss/pages/home/hero.scss';

const Hero = () => {

    return (
        <div className="hero_container">
            <Image
                src="/home/water.png"
                alt="ozonos_water_hero_image"
                width={1920}
                height={852}
                loading='eager'
                priority
            />
        </div>
    );
};

export default Hero;
