import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../model/loader';

const Order: FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const quantity = loaderData.options.reduce( ( acc, order ) => { return acc += order.quantity; }, 0 );
  const total = loaderData.options.reduce( ( acc, order ) => { return acc += order.price * order.quantity; }, 0 );

  return (
    <section className="min-h-section p-3 sm:px-35 py-5 sm:py-15">
      <h1 className="mb-10 sm:mb-15 text-center font-medium">Order #{loaderData.id}</h1>
      <div className="max-w-md mx-auto">
        <ul className="grid gap-5">
          {loaderData.options.map( order => (
            <li key={order.option.id} className="flex justify-between gap-5">
              <span>{order.option.name}</span>
              <span>{order.quantity} items for ${order.price}</span>
            </li>
          ) )}
          <li>
            <span className="block w-full h-px bg-black"></span>
          </li>
          <li className="flex justify-between gap-5 font-medium">
            <span>Order Summary</span>
            <span>{quantity} items for ${total}</span>
          </li>
          <li>
            <span className="block w-full h-px bg-black"></span>
          </li>
          <li className="flex justify-between gap-5 font-medium">
            <span>Status</span>
            <span className="capitalize">{loaderData.status}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Order;