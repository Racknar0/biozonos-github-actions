import Breadcrumbs from '../components/breadcumbs/Breadcumbs';
import '../scss/pages/contacto/contacto.scss';
import { Icon } from 'react-icons-kit';
import { ic_facebook } from 'react-icons-kit/md/ic_facebook';
import { instagram } from 'react-icons-kit/fa/instagram';
import { whatsapp } from 'react-icons-kit/fa/whatsapp';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import {ic_alternate_email} from 'react-icons-kit/md/ic_alternate_email'


export const metadata = {
    title: "Biozonos | Contacto",
    description: "Telefono, dirección y redes sociales de Biozonos",
  };

const page = () => {
    return (
        <div className="contacto_main_container">
            <Breadcrumbs link="/contacto" nombre="Contacto" />

            <div className="main_container">
                <h2 className="title">
                    Puedes ubicarnos con los siguientes Datos ya que...
                </h2>

                <h3 className='position-absolute opacity-0'>Telefono Biozonos: 3233642951</h3>
                <h3 className='position-absolute opacity-0'>Correo Biozonos: biozonosco@gmail.com </h3>
                <h3 className='position-absolute opacity-0'>Dirección Biozonos: Cra 26 # 6A – 26, Sogamoso – Boyaca</h3>

                <p className="subtitle mb-4">¡Estamos aquí para ayudarte!</p>

                <ul className="list-unstyled text-center mb-4">
                    <li className="info">
                        <Icon size={25} icon={phone} /> <a href="https://wa.me/573233642951" target="_blank" rel="noopener noreferrer">+57 323 364 2951</a>
                    </li>

                    <li className="info">
                    <Icon size={25} icon={ic_alternate_email} /> biozonosco@gmail.com
                    </li>

                    <li className="info">
                        <Icon size={25} icon={location} /> Cra 26 # 6A – 26,
                        Sogamoso – Boyaca
                    </li>

                    
                    <li className="info all">¡Servicio en Todo Boyacá!</li>
                </ul>


                <div className='map_container'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15879.877141498435!2d-72.942503!3d5.7175633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a45dbd379fdcd%3A0x74a942e24b4fd40e!2sBIOZONOS!5e0!3m2!1ses-419!2sco!4v1708979202753!5m2!1ses-419!2sco" height="450" style={{border: '0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
                    ></iframe>
                </div>

                <p className="info plus">
                    Contactanos también por nuestras redes sociales
                </p>

                
                <div className="icons_container">
                    <a href="#" className="">
                        <Icon size={50} icon={ic_facebook} />
                    </a>
                    <a href="#" className="">
                        <Icon size={50} icon={instagram} />
                    </a>
                    <a href="#" className="">
                        <Icon size={50} icon={whatsapp} />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default page;
