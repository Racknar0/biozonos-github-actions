// /sitemap.xml: páginas públicas del sitio para los buscadores.
const BASE_URL = 'https://biozonos.com.co';

const routes = [
    { path: '', priority: 1 },
    { path: '/domestica', priority: 0.9 },
    { path: '/domestica/acrilico', priority: 0.8 },
    { path: '/domestica/inox', priority: 0.8 },
    { path: '/domestica/touch', priority: 0.8 },
    { path: '/domestica/vitro', priority: 0.8 },
    { path: '/industrial', priority: 0.9 },
    { path: '/servicios', priority: 0.8 },
    { path: '/nosotros', priority: 0.6 },
    { path: '/contacto', priority: 0.7 },
];

export default function sitemap() {
    return routes.map(({ path, priority }) => ({
        url: `${BASE_URL}${path}`,
        changeFrequency: 'monthly',
        priority,
    }));
}
