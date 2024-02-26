import Image from 'next/image'
import React from 'react'

//section_intro 
import '../../scss/pages/home/section_intro.scss'


const IntroContainer = () => {
  return (
    <div className="intro_main_container" data-aos="fade-up">
        <div className="intro_container">
          <Image src="/home/girl.png" alt="purificador_niña_hero_image" objectPosition='right' width={457} height={837}  className="intro_image_1" data-aos="fade-up"/>

          <div className="box_text">
            <h2 className='title_section'
              data-aos="fade-up"
            >¡Cuida a los más importantes!</h2>
            <h3 className="subtitle_section"
              data-aos="fade-up"
            >Purificadores de Agua Ozonos en Sogamoso, Duitama, Tunja y Boyacá</h3>
            <p className="main_text standard_text_section"
              data-aos="fade-up"
            >Contamos con equipos de última tecnología para la purificación de aguas/aire en tu casa, equipos modernos diseñados con los más altos estándares para garantizar un alto desempeño.</p>
            <p className="cita"
              data-aos="fade-up"
            >&quot;Si hay magia en este planeta, está contenida en el agua.&quot;</p>
            <p className="cita_autor"
              data-aos="fade-up"
            >- Loren Eiseley -</p>
            <p className="cita_rol"
              data-aos="fade-up"
            >Escritora de ciencia y naturaleza</p>
          </div>
        </div>
      </div>
  )
}

export default IntroContainer