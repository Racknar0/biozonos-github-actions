import HomeHeader from '../home/HomeHeader';
import HomeMotion from '../home/HomeMotion';
import SiteFooter from './SiteFooter';
import WhatsAppFloat from './WhatsAppFloat';
import { fontClasses } from './fonts';
import '../../scss/pages/home/premium.scss';
import '../../scss/pages/site/inner.scss';

// Estructura común de todas las páginas públicas: el id lo usan premium.scss y HomeMotion.
export default function SiteShell({ children }) {
    return <div id="biozonos-home" className={`bz-home ${fontClasses}`}>
        <HomeMotion />
        <HomeHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
    </div>;
}
