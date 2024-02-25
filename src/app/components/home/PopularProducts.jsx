import React from 'react';
import ButtonWater from '../button/ButtonWater';
import '../../scss/pages/home/popular_products.scss';
import Image from 'next/image';

const PopularProducts = () => {
    return (
        <div className="popular_products">
            <h3 className="popular_product_title" data-aos="fade-up">
                Productos Populares
            </h3>
            <h4 className="popular_product_subtitle" data-aos="fade-up">
                Productos que más solicitan nuestros clientes
            </h4>

            <div className="popular_products_container">
                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/400x400_white.png"
                        alt="hero"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Purificadores de Agua
                    </h5>
                    <p className="popular_product_description">
                        Contamos con equipos de última tecnología para la
                        purificación de aguas/aire en tu casa, equipos modernos
                        diseñados con los más altos estándares para garantizar
                        un alto desempeño.
                    </p>
                    <ButtonWater text="Conoce más" />
                </div>

                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/400x400_white.png"
                        alt="hero"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Purificadores de Agua
                    </h5>
                    <p className="popular_product_description">
                        Contamos con equipos de última tecnología para la
                        purificación de aguas/aire en tu casa, equipos modernos
                        diseñados con los más altos estándares para garantizar
                        un alto desempeño.
                    </p>
                    <ButtonWater text="Conoce más" />
                </div>

                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/400x400_white.png"
                        alt="hero"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Purificadores de Agua
                    </h5>
                    <p className="popular_product_description">
                        Contamos con equipos de última tecnología para la
                        purificación de aguas/aire en tu casa, equipos modernos
                        diseñados con los más altos estándares para garantizar
                        un alto desempeño.
                    </p>
                    <ButtonWater text="Conoce más" />
                </div>

                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/400x400_white.png"
                        alt="hero"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Purificadores de Agua
                    </h5>
                    <p className="popular_product_description">
                        Contamos con equipos de última tecnología para la
                        purificación de aguas/aire en tu casa, equipos modernos
                        diseñados con los más altos estándares para garantizar
                        un alto desempeño.
                    </p>
                    <ButtonWater text="Conoce más" />
                </div>

                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/400x400_white.png"
                        alt="hero"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Purificadores de Agua
                    </h5>
                    <p className="popular_product_description">
                        Contamos con equipos de última tecnología para la
                        purificación de aguas/aire en tu casa, equipos modernos
                        diseñados con los más altos estándares para garantizar
                        un alto desempeño.
                    </p>
                    <ButtonWater text="Conoce más" />
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;
