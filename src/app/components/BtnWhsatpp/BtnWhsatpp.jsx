import React from 'react'
import '../../scss/components/btn-whsatpp.scss'
import {whatsapp} from 'react-icons-kit/fa/whatsapp'
import { Icon } from 'react-icons-kit'

const BtnWhsatpp = () => {
  return (

      <div class="floating_btn">
        <a target="_blank" href="https://wa.me/573233642951">
          <div class="contact_icon">
            <Icon size={30} icon={whatsapp} />
          </div>
        </a>
      </div>

  )
}

export default BtnWhsatpp