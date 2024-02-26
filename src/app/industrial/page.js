import React from 'react';
import Breadcrumbs from '../components/breadcumbs/Breadcumbs';
import Image from 'next/image';
import '../scss/pages/industrial/industrial.scss';
import ButtonWater from '../components/button/ButtonWater';

export const metadata = {
    title: 'Biozonos | Línea Industrial',
    description: 'Línea Industrial'
};

const page = () => {
    return (
        <>
            <div className="industrial_main_container">
                <Breadcrumbs link="/industrial" nombre="Línea Industrial" />
                <div className="main_info">
                    <h1 className="title_section main_info_title">
                        Línea Industrial
                    </h1>
                    <p className="standard_text_section description">
                        Este Equipo consta de tres (3) sistemas independientes
                        entre sí pero que actúan en perfecta sincronización.
                    </p>
                    <ul>
                        <li className="standard_text_section">
                            SISTEMA DE FILTRACIÒN
                        </li>
                        <li className="standard_text_section">
                            SISTEMA DE OZONONIZACIÒN
                        </li>
                        <li className="standard_text_section">
                            SISTEMA DE REFRIGERACIÓN
                        </li>
                    </ul>
                    <p className="standard_text_section description">
                        En los colegios de la zona las áreas de cocina y los
                        lugares donde se procesan los alimentos en algunos
                        colegios e instituciones no se cuenta de un correcto
                        tratamiento del agua con el cual se procesan los
                        alimentos, es importante esto ya que el no hacerlo
                        conlleva a muchos problemas como la probabilidad de
                        adquirir enfermedades que son transmitidas por el agua.
                        Adicionalmente es importante brindarle agua de calidad y
                        purificada gratuita a los estudiantes a la comunidad.
                    </p>
                    <p className="standard_text_section description">
                        En muchos otros lugares del país como en universidades y
                        colegios del sector privado se cuentan con estos
                        sistemas de bebederos que son usados para este fin.
                    </p>
                    <h2
                        className="title_section main_info_title"
                        data-aos="fade-up"
                    >
                        Beneficiarios
                    </h2>
                    <p
                        className="standard_text_section description"
                        data-aos="fade-up"
                    >
                        Las instituciones educativas ya que brindan un mejor
                        servicio a los estudiantes; y directamente los
                        estudiantes porque sus alimentos serán procesados con
                        agua correctamente tratada, y contaran con agua 100%
                        pura y consumible en cualquier momento.
                    </p>
                    <p
                        className="standard_text_section description"
                        data-aos="fade-up"
                    >
                        En cuanto al tratamiento de agua BIOZONOS plantea una
                        instalación de una planta de tratamiento para las
                        cocinas y demás lugares donde se utilice agua para el
                        consumo en las instituciones. Para la dispensación del
                        agua en los colegios BIOZONOS plantea la instalación de
                        uno o dos bebederos según lo requiera la institución
                        para abastecer de líquido totalmente pura a esta
                    </p>
                </div>

                <div className="gallery_container">
                    <div className="gallery_section row">
                        <h3
                            className="gallery_section_title title_small"
                            data-aos="fade-up"
                        >
                            BEBEDERO COLLEGE DE 25 LITROS – 2 SALIDAS D2L25
                        </h3>
                        <div
                            className="gallery_item col-md-6"
                            data-aos="fade-up"
                        >
                            <Image
                                src="/industrial/25L_2salidas.jpg"
                                alt="ozono1"
                                className="gallery_image img-fluid"
                                width={767}
                                height={1024}
                            />
                        </div>

                        <div
                            className="gallery_item col-md-6"
                            data-aos="fade-up"
                        >
                            <Image
                                src="/industrial/25L_2salidas_2.jpg"
                                alt="ozono1"
                                className="gallery_image img-fluid"
                                width={767}
                                height={1024}
                            />
                        </div>
                    </div>

                    <div className="gallery_section  row">
                        <h3
                            className="gallery_section_title title_small"
                            data-aos="fade-up"
                        >
                            BEBEDERO COLLEGE DE 50 LITROS – 4 SALIDAS D4L50
                        </h3>
                        <div
                            className="gallery_item col-md-6"
                            data-aos="fade-up"
                        >
                            <Image
                                src="/industrial/25L_4salidas_1.jpg"
                                alt="ozono1"
                                className="gallery_image img-fluid"
                                width={767}
                                height={1024}
                            />
                        </div>

                        <div
                            className="gallery_item col-md-6"
                            data-aos="fade-up"
                        >
                            <Image
                                src="/industrial/25L_4salidas_2.jpg"
                                alt="ozono1"
                                className="gallery_image img-fluid"
                                width={767}
                                height={1024}
                            />
                        </div>
                    </div>

                    <div className="gallery_section row">
                        <h3
                            className="gallery_section_title title_small"
                            data-aos="fade-up"
                        >
                            BEBEDERO COLLEGE DE 50 LITROS – 4 SALIDAS D4L50
                        </h3>
                        <div
                            className="gallery_item col-md-6"
                            data-aos="fade-up"
                        >
                            <Image
                                src="/industrial/50L.jpg"
                                alt="ozono1"
                                className="gallery_image img-fluid"
                                width={1024}
                                height={576}
                            />
                        </div>

                        <div
                            className="gallery_item col-md-6"
                            data-aos="fade-up"
                        >
                            <Image
                                src="/industrial/50L_2.jpg"
                                alt="ozono1"
                                className="gallery_image img-fluid"
                                width={1024}
                                height={576}
                            />
                        </div>
                    </div>
                </div>

                <div className="characteristic_container">
                    <p
                        className="standard_text_section description"
                        data-aos="fade-up"
                    >
                        Bebedero de agua con capacidad de 100 litros por hora,
                        con 7 salidas de agua, ideal para instituciones
                        educativas, colegios, universidades, empresas, entre
                        otros. Este bebedero cuenta con un sistema de
                        filtración, ozonización y refrigeración, que garantiza
                        un agua pura y de calidad para el consumo de los
                        estudiantes y trabajadores.
                    </p>

                    <p
                        className="standard_text_section description"
                        data-aos="fade-up"
                    >
                        Para la instalación de las plantas de tratamiento se
                        deben tener como requisito:
                    </p>
                    <ul>
                        <li
                            data-aos="fade-up"
                            className="standard_text_section"
                        >
                            1 punto de salida de agua.
                        </li>
                        <li
                            data-aos="fade-up"
                            className="standard_text_section"
                        >
                            1 punto de energía a 110v
                        </li>
                    </ul>

                    <p
                        className="description standard_text_section fw-bold"
                        data-aos="fade-up"
                    >
                        Características de las plantas:
                    </p>
                    <ul>
                        <li
                            className="standard_text_section"
                            data-aos="fade-up"
                        >
                            14 MESES de garantía
                        </li>
                        <li
                            className="standard_text_section"
                            data-aos="fade-up"
                        >
                            Carcasa en acero quirúrgico, acrílico o vidrio
                            templando de alto higiene “Requisito INVIMA”
                        </li>
                        <li
                            className="standard_text_section"
                            data-aos="fade-up"
                        >
                            Capacidad de purificación 150 L/H
                        </li>
                        <li
                            className="standard_text_section"
                            data-aos="fade-up"
                        >
                            Bajo consumo hasta 15W
                        </li>
                        <li
                            className="standard_text_section"
                            data-aos="fade-up"
                        >
                            Flujo continuo hasta 8 Lt s/m
                        </li>
                    </ul>
                    <div data-aos="fade-up">
                        <ButtonWater
                            text="Más información"
                            isExternal={true}
                            href="https://wa.me/573233642951"
                        />
                    </div>

                    <p
                        className="life_text text-center fw-bold"
                        data-aos="fade-up"
                    >
                        Vive bien, Bebe sano.❤️
                    </p>
                </div>
            </div>
        </>
    );
};

export default page;
