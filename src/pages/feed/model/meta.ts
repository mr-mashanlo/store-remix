import { MetaFunction } from '@remix-run/node';

import loader from './loader';

const meta: MetaFunction<typeof loader> = ( { data } ) => {
  return [
    { title: data?.categories.docs[0].name },
    { name: 'description', content: data?.categories.docs[0].description }
  ];
};

export default meta;