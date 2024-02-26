import React from 'react';
import Breadcrumbs from '../components/breadcumbs/Breadcumbs';
import Image from 'next/image';
import '../scss/pages/servicios/servicios.scss';
import ButtonWater from '../components/button/ButtonWater';


export const metadata = {
    title: "Biozonos | Servicios",
    description: "Purificadores de Agua y filtros de ozono en Sogamoso, Duitama, Tunja y Boyacá",
  };

const page = () => {
    return (
        <div className="servicios_main_container">
            <Breadcrumbs link="/servicios" nombre="Servicios" />

            <div className="hero_container">
                <div className="overlay"></div>
                <Image
                    className="image"
                    src="/services/water.png"
                    alt="Servicios"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="hero_text">
                    <h1 className="hero_title">Servicios</h1>
                    <h2 className="hero_description">
                        En BIOZONOS ofrecemos una amplia gama de servicios ,
                        estamos seguros que encontrará el que mejor se adapte a
                        sus necesidades.
                    </h2>
                </div>
            </div>

            <div className="description_container">
                <h2 className="description_title title_section">
                    Nuestros servicios
                </h2>
                <p className="standard_text_section text-center">
                    En BIOZONOS, en Sogamoso, Boyacá, nos especializamos en
                    ofrecer una gama completa de servicios para la purificación
                    del agua y el tratamiento del aire. Desde la fabricación de
                    plantas de purificación hasta la instalación de sistemas de
                    ozono y bebederos para agua en colegios y empresas,
                    brindamos soluciones integrales y de alta calidad. Nuestro
                    equipo de expertos está comprometido con la excelencia y la
                    innovación, asegurando un ambiente más limpio y saludable
                    para nuestros clientes en cada proyecto.
                </p>
            </div>

            <div className="grid_container row">
                <div className="grid_item_container col-md-6 ">
                    <div className="grid_item" data-aos="fade-up">
                        <div className="grid_image">
                            <Image
                                src="/services/service_1.jpg"
                                alt="Servicio 1"
                                width={300}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="grid_text">
                            <h3 className="title_small grid_title">
                                Diseño Plantas de Purificación
                            </h3>
                            <p className="standard_text_section grid_description">
                                Diseñamos y construimos plantas de purificación
                                avanzadas basadas en ozono y filtros de gravedad
                                para garantizar la calidad del agua en hogares y
                                empresas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid_item_container col-md-6 ">
                    <div className="grid_item" data-aos="fade-up">
                        <div className="grid_image">
                            <Image
                                src="/services/electronica.png"
                                alt="Servicio 1"
                                width={300}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="grid_text">
                            <h3 className="title_small grid_title">
                                Reparación de equipos Ozono
                            </h3>
                            <p className="standard_text_section grid_description">
                                Profesionales en la instalación de sistemas de
                                ozono, asegurando una implementación eficiente y
                                segura para la purificación del aire y el agua
                                en cualquier entorno.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid_item_container col-md-6 ">
                    <div className="grid_item" data-aos="fade-up">
                        <div className="grid_image">
                            <Image
                                src="/services/bebedero.png"
                                alt="Servicio 1"
                                width={300}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="grid_text">
                            <h3 className="title_small grid_title">
                                Bebederos para Agua en Colegios y Empresas
                            </h3>
                            <p className="standard_text_section grid_description">
                                Ofrecemos soluciones de hidratación con
                                bebederos de agua de alta calidad, ideales para
                                colegios y empresas, garantizando agua limpia y
                                fresca en todo momento.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid_item_container col-md-6 ">
                    <div className="grid_item" data-aos="fade-up">
                        <div className="grid_image">
                            <Image
                                src="/services/aire.png"
                                alt="Servicio 1"
                                width={300}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="grid_text">
                            <h3 className="title_small grid_title">
                                Plantas de Tratamiento de Aire para Hogar
                            </h3>
                            <p className="standard_text_section grid_description">
                                Desarrollamos sistemas de purificación de aire
                                innovadores y eficientes, diseñados para
                                eliminar contaminantes y mejorar la calidad del
                                aire en interiores y exteriores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ButtonWater
                text="Contactanos"
                isExternal={true}
                href="https://wa.me/573233642951"
            />
        </div>
    );
};

export default page;
