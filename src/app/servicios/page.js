import React from 'react';
import Breadcrumbs from '../components/breadcumbs/Breadcumbs';
import Image from 'next/image';
import '../scss/pages/servicios/servicios.scss';
import ButtonWater from '../components/button/ButtonWater';

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
                        Nuestros servicios están diseñados solucionar problemas
                        y necesidades de nuestros clientes.
                    </h2>
                </div>
            </div>

            <div className='description_container'>
                <h2 className="description_title">Nuestros servicios</h2>
                <p className="description_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a est accusamus possimus. Quas dolores voluptatibus vero quasi sint commodi suscipit odio rerum! Nemo esse alias placeat velit enim et!
                    Sapiente, perspiciatis sint aspernatur saepe consequuntur dolorem dolor placeat itaque, officiis sit inventore labore reprehenderit hic impedit. Necessitatibus mollitia laboriosam eum beatae? Reprehenderit ea odit illo eos repellat error alias!
                    Nemo voluptates odit minima, laboriosam at dolorem harum tenetur enim vitae optio qui architecto, praesentium sed velit molestias esse facere dolorum, aspernatur similique. Maxime iure odio eius inventore provident est!
                    
                </p>
            </div>

            <div className="grid_container row">
                <div className="grid_item_container col-md-6 ">
                    <div className="grid_item">
                        <div className="grid_image">
                            <Image
                                src="/services/image.jpg"
                                alt="Servicio 1"
                                width={300}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="grid_text">
                            <h3 className="grid_title">Servicio 1</h3>
                            <p className="grid_description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla auctor, erat nec
                                tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid_item_container col-md-6 ">
                    <div className="grid_item">
                        <div className="grid_image">
                            <Image
                                src="/services/image.jpg"
                                alt="Servicio 1"
                                width={300}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="grid_text">
                            <h3 className="grid_title">Servicio 1</h3>
                            <p className="grid_description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla auctor, erat nec
                                tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid_item_container col-md-6 ">
                    <div className="grid_item">
                        <div className="grid_image">
                            <Image
                                src="/services/image.jpg"
                                alt="Servicio 1"
                                width={300}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="grid_text">
                            <h3 className="grid_title">Servicio 1</h3>
                            <p className="grid_description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla auctor, erat nec
                                tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid_item_container col-md-6 ">
                    <div className="grid_item">
                        <div className="grid_image">
                            <Image
                                src="/services/image.jpg"
                                alt="Servicio 1"
                                width={300}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="grid_text">
                            <h3 className="grid_title">Servicio 1</h3>
                            <p className="grid_description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla auctor, erat nec
                                tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ButtonWater text={"Contáctanos"}></ButtonWater>
        </div>
    );
};

export default page;
