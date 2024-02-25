import React from 'react'
//section_services
import '../../scss/pages/home/section_services.scss'
import ButtonWater from '../button/ButtonWater'
import Image from 'next/image'


const Services = () => {
  return (
    <div className="services">
    <h3 className="services_title" data-aos="fade-up">
      Nuestros servicios
    </h3>
    <h4 className="services_subtitle" data-aos="fade-up">
      Servicios que ofrecemos
    </h4>

    <div className="services_container">
      
      <div className="service"  data-aos="fade-right">
        <Image src="/home/400x400.png" alt="hero" objectPosition='right' width={400} height={400}  className="service_image"/>
        <h5 className="service_title">Purificadores de Agua</h5>
        <p className="service_description">Contamos con equipos de última tecnología para la purificación de aguas/aire en tu casa, equipos modernos diseñados con los más altos estándares para garantizar un alto desempeño.</p>
        <ButtonWater 
          text="Conoce más"
        />
      </div>

      <div className="service"  data-aos="fade-right">
        <Image src="/home/400x400.png" alt="hero" objectPosition='right' width={400} height={400}  className="service_image" />
        <h5 className="service_title">Purificadores de Aire</h5>
        <p className="service_description">Contamos con equipos de última tecnología para la purificación de aguas/aire en tu casa, equipos modernos diseñados con los más altos estándares para garantizar un alto desempeño.</p>
        <ButtonWater 
          text="Conoce más"
        />
      </div>

      <div className="service" data-aos="fade-right">
        <Image src="/home/400x400.png" alt="hero" objectPosition='right' width={400} height={400}  className="service_image" />
        <h5 className="service_title">Bebederos de Ozono</h5>
        <p className="service_description">Contamos con equipos de última tecnología para la purificación de aguas/aire en tu casa, equipos modernos diseñados con los más altos estándares para garantizar un alto desempeño.</p>
        <ButtonWater 
          text="Conoce más"
        />
      </div>
    </div>

    

</div>
  )
}

export default Services