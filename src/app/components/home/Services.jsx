import React from 'react'
//section_services
import '../../scss/pages/home/section_services.scss'
import ButtonWater from '../button/ButtonWater'
import Image from 'next/image'


const Services = () => {
  return (
    <div className="services">
    <h3 className="services_title title_section" data-aos="fade-up">
      Nuestros servicios
    </h3>
    <h4 className="services_subtitle subtitle_section" data-aos="fade-up">
      Servicios que ofrecemos
    </h4>

    <div className="services_container">
      
      <div className="service"  data-aos="fade-up">
        <Image src="/home/purificacion.jpg" alt="service_image" objectPosition='right' width={400} height={400}  className="service_image"/>
        <h5 className="title_small service_title">Purificadores de Agua</h5>
        <p className="standard_text_section service_description">Ofrecemos equipos de vanguardia para purificar agua en hogares y empresas. Diseñados con altos estándares, garantizan un rendimiento óptimo.</p>
        
      </div>

      <div className="service"  data-aos="fade-up">
        <Image src="/home/aire.jpg" alt="service_image" objectPosition='right' width={400} height={400}  className="service_image" />
        <h5 className="title_small service_title">Purificadores de Aire</h5>
        <p className="standard_text_section service_description ">Presentamos equipos innovadores para la purificación del aire en hogares y empresas. Con estándares de calidad superiores, aseguran un ambiente saludable.</p>
        
      </div>

      <div className="service" data-aos="fade-up">
        <Image src="/home/bebederos.jpg" alt="service_image" objectPosition='right' width={400} height={400}  className="service_image" />
        <h5 className= "title_small service_title">Bebederos de Ozono</h5>
        <p className="standard_text_section service_description ">Disponemos de bebederos de ozono para hogares y empresas. Con tecnología de punta, garantizan agua pura y saludable para el consumo humano.</p>
        
      </div>
    </div>

    

</div>
  )
}

export default Services