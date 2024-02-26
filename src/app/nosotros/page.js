import Breadcrumbs from '../components/breadcumbs/Breadcumbs';
import ButtonWater from '../components/button/ButtonWater';
import '../scss/pages/nosotros/nosotros.scss';
import Image from 'next/image';

const page = () => {
    return (
        <div className="nosotros_main_container">
            <Breadcrumbs link="/domestica/acrilico" nombre="Acrílico" />

            <div className="title_container">
                <h1 className="title">¿Quien es Biozonos?</h1>
            </div>

            <div className="description_container">
                <p className="description">
                    BIOZONOS una empresa creada en la ciudad de Sogamoso, Boyacá
                    dedicada a la fabricación y prestación de servicios de
                    mantenimientos y reparaciones de equipos purificadores de
                    agua con base en ozono.
                </p>

                <p className="description">
                    Iniciamos como distribuidores y llegamos a fabricar
                    productos orientados al bienestar y la salud de las personas
                    en el sector residencial e industrial donde requiera agua
                    purificada.
                </p>

                <p className="description">
                    Hemos llegado a conquistar clientes en todas las ciudades de
                    la Región Caribe, y en ciudades del interior como Bogotá,
                    Bucaramanga, Cúcuta, Villavicencio entre otras. En nuestro
                    afán de siempre ofrecer productos con excelente calidad
                    utilizamos carbón activado, del cual podemos certificar que
                    se ajusta a los requerimientos de las sustancias extraíbles
                    con agua según la norma europea EN 12915. Y es un componente
                    indispensable en el proceso de purificación del agua
                    destinada para consumo humano.
                </p>

                <p className="description">
                    Además, siempre buscamos proporcionar a nuestros clientes y
                    consumidores finales un producto hecho dentro de los
                    parámetros de calidad confiable. BIOZONOS, ha ido siempre, y
                    seguirá igualmente adelante en innovación y calidad de sus
                    productos, además de ofrecer el mantenimiento, reparación y
                    repuestos originales.
                </p>

                <ButtonWater 
                  text={"Conoce más"}
                />
            </div>
        </div>
    );
};

export default page;
