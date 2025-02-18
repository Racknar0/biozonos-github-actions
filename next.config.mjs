/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    sassOptions: {
        sourceMap: true,
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_JWT_SECRET: process.env.NEXT_JWT_SECRET,
        NEXT_PUBLIC_LOCAL: process.env.NEXT_PUBLIC_LOCAL,
        NEXT_URL_DOMAIN: process.env.NEXT_URL_DOMAIN,
    },
};

export default nextConfig;
