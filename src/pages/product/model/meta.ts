import { MetaFunction } from '@remix-run/node';

import loader from './loader';

const meta: MetaFunction<typeof loader> = ( { data } ) => {
  return [
    { title: data?.name },
    { name: 'description', content: data?.excerpt }
  ];
};

export default meta;