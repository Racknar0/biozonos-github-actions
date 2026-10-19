import { NextResponse } from 'next/server';
import { verifyJWT } from './app/utils/jwt';

export async function proxy(req) {
  const cookie = req.cookies.get('cookieAuth')?.value;
  const url = req.nextUrl.pathname;

  const protectedRoutes = ['/dashboard'];
  const loginUrl = new URL('/auth', req.url);
  const dashboardUrl = new URL('/dashboard', req.url);

  // Verifica si la ruta actual está protegida
  if (protectedRoutes.includes(url)) {
    try {
      await verifyJWT(cookie);
      // Token is valid, continue to the protected route
      return NextResponse.next();
    } catch (error) {
      console.error('Token verification failed:', error);
      // Redirect to the login page if token verification fails
      return NextResponse.redirect(loginUrl);
    }
  }

    // Verifica si el usuario está intentando acceder a la página de autenticación
    if (url === '/auth') {
      try {
        await verifyJWT(cookie);
        // Si el token es válido, redirige a la página del dashboard
        return NextResponse.redirect(dashboardUrl);
      } catch (error) {
        // Si el token no es válido, continúa en la página de autenticación
        return NextResponse.next();
      }
    }

  // If the route is not protected, continue to the route
  return NextResponse.next();
}
