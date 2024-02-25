import Image from "next/image";
import ButtonWater from "./components/button/ButtonWater";
import Hero from "./components/home/Hero";
import IntroContainer from "./components/home/IntroContainer";
import Services from "./components/home/Services";




//separator
import './scss/pages/home/separator.scss'

//repairing
import './scss/pages/home/repairing.scss'
import Repairing from "./components/home/Repairing";
import PopularProducts from "./components/home/PopularProducts";



export default function Home() {
  return (
    <div className="hero_main_container" style={{
      overflow: "hidden"
    }}>
      <h1 className='main_title'>Purificadores de Agua y filtros de ozono en Sogamoso, Duitama, Tunja y Boyacá</h1>
      <ButtonWater text="Más Info" />
      <Hero />
      <IntroContainer />
      <Services />
      <div className="separator_container">
        <Image src="/home/separator.png" alt="hero" objectPosition='right' width={1920} height={481}  className="separator" />
      </div>
      <Repairing />
      <PopularProducts />
      

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        data-aos="zoom-in" 
        style={{
          height: "200px",
          backgroundColor: "red",
          width: "400px",
          overflow: "hidden",
        }}
      >

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
