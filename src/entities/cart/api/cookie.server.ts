import { createCookie } from '@remix-run/node';

export const cartCookie = createCookie( 'cart', { maxAge: 604_800, httpOnly: true, sameSite: 'lax', path: '/' } );