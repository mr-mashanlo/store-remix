import ky from 'ky';
import { z } from 'zod';

export const defaultInstance = ky.create( {
  prefixUrl: 'http://localhost:3000/api',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: {
    limit: 1,
    statusCodes: [ 400, 401 ],
    methods: [ 'get', 'post', 'put', 'delete' ]
  }
} );

export const authInstance = defaultInstance.extend( {
  hooks: {
    afterResponse: [
      async ( _request, _options, response ) => {
        const responseData = await response.json();
        const { data, success } = z.object( { exp: z.number() } ).safeParse( responseData );
        if ( !success ) return;
        localStorage.setItem( 'expiration', String( data.exp ) );
        if ( Number( localStorage.getItem( 'expiration' ) ) - Date.now() < 1800000 ) defaultInstance( 'users/refresh-token', { method: 'post' } );
      }
    ]
  }
} );