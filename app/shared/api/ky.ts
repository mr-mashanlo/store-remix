import ky from 'ky';

interface ExtendedError extends Error {
  response?: Response;
}

export const defaultInstance = ky.create( {
  retry: 1,
  prefixUrl: import.meta.env.VITE_REACT_APP_BACK_URL,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      request => { request.headers.set( 'content-type', 'application/json' ); }
    ]
  }
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