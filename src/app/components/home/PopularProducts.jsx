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
                        src="/home/bugia.jpg"
                        alt="producto_ozonos"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Reemplazo Filtro Bugía AP200
                    </h5>
                    <p className="popular_product_description">
                        Repuesto para filtro, bugía AP-200 con 3 meses de garantía e instalación en tu domicilio.
                    </p>
                    <ButtonWater text="Comprar" isExternal={true} href="https://wa.me/573233642951" />
                </div>

                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/gravedad.jpg"
                        alt="producto_ozonos"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Equipo de purificación de gravedad
                    </h5>
                    <p className="popular_product_description">
                        Equipo completo de purificación de agua domestico de gravedad, con 6 meses de garantía.
                    </p>
                    <ButtonWater text="Comprar" isExternal={true} href="https://wa.me/573233642951" />
                </div>

                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/touch.jpg"
                        alt="producto_ozonos"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Purificador de agua Ozono Touch
                    </h5>
                    <p className="popular_product_description">
                        Purificador de agua, con panel táctil vitrificado, capacidad de purificación 50 L/H
                    </p>
                    <ButtonWater text="Comprar" isExternal={true} href="https://wa.me/573233642951" />
                </div>

                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/inox.jpg"
                        alt="producto_ozonos"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Purificador de agua Ozono Inox
                    </h5>
                    <p className="popular_product_description">
                        Purificador de agua, con panel en acero inoxidable, capacidad de purificación 120 L/H
                    </p>
                    <ButtonWater text="Comprar" isExternal={true} href="https://wa.me/573233642951" />
                </div>

                <div className="popular_product" data-aos="fade-up">
                    <Image
                        src="/home/white.jpg"
                        alt="producto_ozonos"
                        objectPosition="right"
                        width={400}
                        height={400}
                        className="popular_product_image"
                    />
                    <h5 className="popular_product_title">
                        Purificador de agua Vitro White
                    </h5>
                    <p className="popular_product_description">
                        Purificador de agua, con panel frontal vitrificado, capacidad de purificación 50 L/H
                    </p>
                    <ButtonWater text="Comprar" isExternal={true} href="https://wa.me/573233642951" />
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;
