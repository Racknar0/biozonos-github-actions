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
import PopularProducts, { FilterCatalog } from './components/home/PopularProducts';
import NavBar from './layout/navbar/navbar';
import Footer from './layout/footer/Footer';
import BtnWhsatpp from './components/BtnWhsatpp/BtnWhsatpp';

export const metadata = {
    title: 'Biozonos | Inicio',
    description:
        'Sistemas de purificación de agua y filtros de ozono en Duitama, Sogamoso, Tunja y todo Boyacá para hogares, empresas y comercios.',
};

export default function Home() {
    return (
        <>
            <NavBar />

            <div
                className="hero_main_container"
                style={{
                    overflow: 'hidden',
                }}
            >
                <section className="home_hero" aria-labelledby="home-title">
                    <h1 id="home-title" className="main_title title_section">
                        Purificadores de Agua y filtros de ozono en Duitama,
                        Sogamoso, Tunja y Boyacá
                    </h1>
                    <ButtonWater
                        text="Contactanos"
                        isExternal={true}
                        href="https://wa.me/573233642951"
                    />
                    <Hero />
                </section>
                <PopularProducts />
                <FilterCatalog />
                <IntroContainer />
                <Services />
                <div className="separator_container">
                    <Image
                        src="/home/separator.png"
                        alt="ozonos_sogamos_separator"
                        width={1920}
                        height={481}
                        className="separator"
                    />
                </div>
                <Repairing />
                <p className="life_text text-center fw-bold" data-aos="fade-up">
                    Vive bien, Bebe sano.❤️
                </p>
            </div>
            <BtnWhsatpp />
            <Footer />
        </>
    );
}
