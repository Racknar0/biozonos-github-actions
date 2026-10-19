import Image from 'next/image';
import Link from 'next/link';
import { whatsappText } from './contact';

// Paneles con foto que se expanden al pasar el mouse (o al enfocar su enlace).
// items: { title, description, image, alt, href? , label? }. Sin href, el enlace cotiza por WhatsApp.
export default function ServicePanels({ items }) {
    return <div className={'bz-services-panels' + (items.length > 3 ? ' bz-services-panels--many' : '')}>{items.map(({ title, description, image, alt, href, label = 'Cotizar' }, index) => <article key={title} className="bz-service" data-reveal style={{ '--i': index }}>
        <div className="bz-service-photo"><Image src={image} alt={alt} fill sizes="(min-width: 768px) 55vw, 100vw" /></div>
        <span className="bz-service-index" aria-hidden="true">0{index + 1}</span>
        <div className="bz-service-body">
            <h3>{title}</h3>
            <div className="bz-service-more"><div>
                <p>{description}</p>
                {href
                    ? <Link className="bz-service-link" href={href}>{label} <span aria-hidden="true">↗</span></Link>
                    : <a className="bz-service-link" href={whatsappText('Hola, quiero información sobre ' + title.toLowerCase() + '.')} target="_blank" rel="noopener noreferrer" aria-label={label + ' ' + title + ' por WhatsApp'}>{label} <span aria-hidden="true">↗</span></a>}
            </div></div>
        </div>
    </article>)}</div>;
}
