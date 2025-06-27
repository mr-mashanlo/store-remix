import { FC } from 'react';

import { useCartStore } from '@/entities/cart';

const Cart: FC = () => {
  const variants = useCartStore( state => state.variants );

  return (
    <section className="p-3 sm:px-35 py-5 sm:py-15">
      <h1 className="mb-10 sm:mb-15 text-center font-medium">Cart</h1>
      <div className="grid sm:grid-cols-3 gap-10">
        <ul className="grid gap-3 sm:gap-10 sm:col-span-2">
          {variants.map( variant => (
            <li key={variant.id}>
              <article className="grid grid-cols-3">
                <h2 className="">{variant.id}</h2>
                <p className="">{variant.quantity}</p>
              </article>
            </li>
          ) )}
        </ul>
        <div className="relative">

        </div>
      </div>
    </section>
  );
};

export default Cart;