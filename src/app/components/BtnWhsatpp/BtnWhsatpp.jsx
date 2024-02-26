import React from 'react'
import '../../scss/components/btn-whsatpp.scss'
import {whatsapp} from 'react-icons-kit/fa/whatsapp'
import { Icon } from 'react-icons-kit'

const BtnWhsatpp = () => {
  return (

      <div className="floating_btn">
        <a target="_blank" href="https://wa.me/573233642951">
          <div className="contact_icon">
            <Icon size={30} icon={whatsapp} />
          </div>
        </a>
      </div>

  )
}

export default BtnWhsatpp