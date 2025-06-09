import ky from 'ky';

interface ExtendedError extends Error {
  response?: Response;
}

export const defaultInstance = ky.create( {
  prefixUrl: 'http://localhost:3000/api',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: {
    limit: 1,
    statusCodes: [ 419 ],
    methods: [ 'get', 'post', 'put', 'delete' ]
  }
  // hooks: {
  //   beforeRequest: [
  //     request => {
  //       request.headers.set( 'Content-Type', 'application/json' );
  //       request.headers.set( 'Cookie', request.headers.get( 'Cookie' ) || '' );
  //     }
  //   ]
  // }
} );

export const authInstance = defaultInstance.extend( {
  retry: {
    limit: 1,
    statusCodes: [ 419 ],
    methods: [ 'get', 'post', 'put', 'delete' ]
  },
  hooks: {
    beforeRetry: [
      async ( { error }: { error: ExtendedError } ) => {
        if ( error.response?.status === 419 ) {
          await defaultInstance( 'user/refresh' );
        }
      }
    ]
  }
} );