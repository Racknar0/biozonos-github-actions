import Image from 'next/image';
import ButtonWater from './components/button/ButtonWater';
import Hero from './components/home/Hero';
import IntroContainer from './components/home/IntroContainer';
import Services from './components/home/Services';

//separator
import './scss/pages/home/separator.scss';

//repairing
import './scss/pages/home/repairing.scss';
import Repairing from './components/home/Repairing';
import PopularProducts from './components/home/PopularProducts';


export const metadata = {
    title: "Biozonos | Inicio",
    description: "Sistemas de purificación de agua y filtros de ozono en Sogamoso, Duitama, Tunja y todo Boyacá para hogares, empresas y comercios.",
  };

export default function Home() {
    
    return (
        <div
            className="hero_main_container"
            style={{
                overflow: 'hidden',
            }}
        >

            <h1 className="main_title title_section">
                Purificadores de Agua y filtros de ozono en Sogamoso, Duitama,
                Tunja y Boyacá
            </h1>
            <ButtonWater
                text="Contactanos"
                isExternal={true}
                href="https://wa.me/573233642951"
            />
            <Hero />
            <IntroContainer />
            <Services />
            <div className="separator_container">
                <Image
                    src="/home/separator.png"
                    alt="ozonos_sogamos_separator"
                    objectPosition="right"
                    width={1920}
                    height={481}
                    className="separator"
                />
            </div>
            <Repairing />
            <PopularProducts />
            <p className="life_text text-center fw-bold" data-aos="fade-up">
                Vive bien, Bebe sano.❤️
            </p>
        </div>
    );
}
