import { MetaFunction } from '@remix-run/node';

import loader from './loader';

const meta: MetaFunction<typeof loader> = ( { data } ) => {
  return [
    { title: `Order #${data?.id}` },
    { name: 'description', content: `Details for Order #${data?.id} — check status, track shipping, and view your purchased items` }
  ];
};

export default meta;