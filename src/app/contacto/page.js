import PageHero from '../components/site/PageHero';
import { WHATSAPP_URL } from '../components/site/contact';

export const metadata = {
    title: "Biozonos | Contacto",
    description: "Telefono, dirección y redes sociales de Biozonos",
};

const channels = [
    { label: 'Teléfono y WhatsApp', value: '+57 323 364 2951', href: WHATSAPP_URL, external: true, tone: 'main' },
    { label: 'Correo', value: 'biozonosco@gmail.com', href: 'mailto:biozonosco@gmail.com' },
    { label: 'Dirección', value: 'Carrera 27 # 6a- 05, Duitama – Boyaca', href: 'https://maps.google.com/?q=BIOZONOS+Duitama', external: true },
    { label: 'Cobertura', value: '¡Servicio en Todo Boyacá!', tone: 'dark' },
];

export default function ContactoPage() {
    return <>
        <PageHero crumbs={[['Contacto', '/contacto']]} title={<>Hablemos <em>hoy</em></>}
            intro="¡Estamos aquí para ayudarte! Escríbenos, llámanos o visítanos en Duitama."
            image="/home/premium/water-hero.png">
            <a className="bz-pill bz-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <span aria-hidden="true">↗</span></a>
        </PageHero>

        <section className="bz-section bz-section--tint" data-surface="light" aria-label="Datos de contacto">
            <div className="bz-contact-grid">{channels.map(({ label, value, href, external, tone }, i) => {
                const content = <><h2>{label}</h2><p>{value}</p></>;
                const className = 'bz-contact-card' + (tone ? ' bz-contact-card--' + tone : '');
                return href
                    ? <a key={label} className={className} href={href} data-reveal style={{ '--i': i }} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{content}</a>
                    : <div key={label} className={className} data-reveal style={{ '--i': i }}>{content}</div>;
            })}</div>
            <div className="bz-map" data-reveal>
                <iframe title="Ubicación de Biozonos en Duitama" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15879.877141498435!2d-72.942503!3d5.7175633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a45dbd379fdcd%3A0x74a942e24b4fd40e!2sBIOZONOS!5e0!3m2!1ses-419!2sco!4v1708979202753!5m2!1ses-419!2sco" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </section>
    </>;
}
