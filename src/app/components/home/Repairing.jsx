import React from 'react'
import ButtonWater from '../button/ButtonWater'
import Image from 'next/image'
import '../../scss/pages/home/repairing.scss'


const Repairing = () => {
  return (
    <div className="repairing_container">
    <div className="repairing_image_container">
      <div className="overlay"></div>
      <Image src="/home/plomero.png" alt="plomeria_sogamoso" objectPosition='right' width={1920} height={780}  className="repairing_image" />
    </div>

    <div className="repairing_text_box_container">
      <div className="repairing_text_box"
        data-aos="fade-up"
      >
        <h2 className="repairing_title">Reparación de purificadores de agua</h2>
        <p className="repairing_description">Contamos con un equipo de técnicos especializados en la reparación de purificadores de agua, con años de experiencia en el sector, garantizamos un servicio de calidad y confianza.</p>
        <ButtonWater text="Conoce más" />
      </div>
    </div>
</div>
  )
}

export default Repairing