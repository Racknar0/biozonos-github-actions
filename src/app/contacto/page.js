import Breadcrumbs from '../components/breadcumbs/Breadcumbs';
import '../scss/pages/contacto/contacto.scss';
import { Icon } from 'react-icons-kit';
import { ic_facebook } from 'react-icons-kit/md/ic_facebook';
import { instagram } from 'react-icons-kit/fa/instagram';
import { whatsapp } from 'react-icons-kit/fa/whatsapp';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import {ic_alternate_email} from 'react-icons-kit/md/ic_alternate_email'

const page = () => {
    return (
        <div className="contacto_main_container">
            <Breadcrumbs link="/contacto" nombre="Contacto" />

            <div className="main_container">
                <h2 className="title">
                    Puedes ubicarnos con los siguientes Datos ya que...
                </h2>

                <p className="subtitle">¡Estamos aquí para ayudarte!</p>

                <ul className="list-unstyled text-center mb-4">
                    <li className="info">
                        <Icon size={25} icon={phone} /> +57 323 364 2951
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
