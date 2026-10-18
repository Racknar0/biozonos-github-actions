// /robots.txt: deja indexar todo el sitio público y oculta el login y el panel.
export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/auth', '/dashboard'],
        },
        sitemap: 'https://biozonos.com.co/sitemap.xml',
    };
}
