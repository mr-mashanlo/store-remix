import { Form, useFetcher, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../model/loader';

const Cart: FC = () => {
  const fetcher = useFetcher();
  const loaderData = useLoaderData<typeof loader>();
  const quantity = loaderData.docs.reduce( ( acc, option ) => { return acc += option.quantity; }, 0 );
  const total = loaderData.docs.reduce( ( acc, option ) => { return acc += option.price * option.quantity; }, 0 );

  return (
    <section className="p-3 sm:px-35 py-5 sm:py-15">
      <h1 className="mb-10 sm:mb-15 text-center font-medium">Cart</h1>
      <div className="grid sm:grid-cols-3 gap-3 sm:gap-10">
        <ul className="grid gap-3 sm:gap-10 sm:col-span-2">
          {loaderData?.docs.map( product => (
            <li key={product.id}>
              <article className="relative">
                <img src={product.image.url} alt={product.image.alt} className="aspect-[4/3] object-cover bg-neutral-100" />
                <h2 className="font-medium absolute left-5 bottom-5">{product.name}</h2>
                <p className="font-medium absolute right-5 bottom-5">{product.quantity} items for ${product.price}</p>
                <fetcher.Form method="post" className="flex items-center bg-neutral-200/50 rounded-full absolute bottom-5 left-1/2 -translate-x-1/2">
                  <input value={product.id} name="option" type="hidden" />
                  <button value="decrement" name="action" type="submit" className="w-10 h-10  outline-offset-3 rounded-full cursor-pointer flex items-center justify-center">
                    <span className="sr-only">Remove from cart</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true">
                      <path d="M5,13h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H5c-0.6,0-1,0.4-1,1S4.4,13,5,13z"/>
                    </svg>
                  </button>
                  <button value="increment" name="action" type="submit" className="w-10 h-10 bg-neutral-200/80 outline-offset-3 rounded-full cursor-pointer flex items-center justify-center">
                    <span className="sr-only">Add to cart</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true">
                      <path d="M5,13h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1s-0.4-1-1-1h-6V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v6H5   c-0.6,0-1,0.4-1,1S4.4,13,5,13z"/>
                    </svg>
                  </button>
                </fetcher.Form>
              </article>
            </li>
          ) )}
        </ul>
        <div className="relative">
          <div className="sm:sticky sm:top-15">
            <h2 className="text-base font-medium">Order Summary</h2>
            <p className="mt-4 text-xl font-bold">{quantity} items for ${total}</p>
            <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ipsam, perspiciatis iure fuga repellat ex saepe quam molestias facere placeat officiis. Voluptate quis hic repellendus aliquid nihil labore illo ipsum.</p>
            <p className="mt-5">Reprehenderit odit molestiae quam quas excepturi! Omnis ad deleniti earum consequatur dicta unde porro minima dolor.</p>
            <Form action="post" className="mt-5">
              <fieldset>
                <legend className="text-center font-medium sr-only">Checkout</legend>
                <label htmlFor="region" className="block relative">
                  <input id="region" name="region" type="text" placeholder="Zhambyl region" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" required />
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
                    <path d="M21,11h-1.06946C19.47711,7.38843,16.61157,4.52289,13,4.06946V3c0-0.55273-0.44775-1-1-1s-1,0.44727-1,1v1.06946 C7.38843,4.52289,4.52289,7.38843,4.06946,11H3c-0.55225,0-1,0.44727-1,1s0.44775,1,1,1h1.06946 C4.52289,16.61157,7.38843,19.47711,11,19.93054V21c0,0.55273,0.44775,1,1,1s1-0.44727,1-1v-1.06946 c3.61157-0.45343,6.47711-3.31897,6.93054-6.93054H21c0.55225,0,1-0.44727,1-1S21.55225,11,21,11z M12,18 c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6s6,2.69141,6,6S15.30859,18,12,18z"/>
                  </svg>
                </label>
                <label htmlFor="city" className="block mt-5 relative">
                  <input id="city" name="city" type="text" placeholder="Taraz city" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" required />
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
                    <path d="M21,11h-1.06946C19.47711,7.38843,16.61157,4.52289,13,4.06946V3c0-0.55273-0.44775-1-1-1s-1,0.44727-1,1v1.06946 C7.38843,4.52289,4.52289,7.38843,4.06946,11H3c-0.55225,0-1,0.44727-1,1s0.44775,1,1,1h1.06946 C4.52289,16.61157,7.38843,19.47711,11,19.93054V21c0,0.55273,0.44775,1,1,1s1-0.44727,1-1v-1.06946 c3.61157-0.45343,6.47711-3.31897,6.93054-6.93054H21c0.55225,0,1-0.44727,1-1S21.55225,11,21,11z M12,18 c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6s6,2.69141,6,6S15.30859,18,12,18z"/>
                  </svg>
                </label>
                <label htmlFor="street" className="block mt-5 relative">
                  <input id="street" name="street" type="text" placeholder="Abay street #72" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" required />
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
                    <path d="M21,11h-1.06946C19.47711,7.38843,16.61157,4.52289,13,4.06946V3c0-0.55273-0.44775-1-1-1s-1,0.44727-1,1v1.06946 C7.38843,4.52289,4.52289,7.38843,4.06946,11H3c-0.55225,0-1,0.44727-1,1s0.44775,1,1,1h1.06946 C4.52289,16.61157,7.38843,19.47711,11,19.93054V21c0,0.55273,0.44775,1,1,1s1-0.44727,1-1v-1.06946 c3.61157-0.45343,6.47711-3.31897,6.93054-6.93054H21c0.55225,0,1-0.44727,1-1S21.55225,11,21,11z M12,18 c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6s6,2.69141,6,6S15.30859,18,12,18z"/>
                  </svg>
                </label>
                <button className="w-full mt-5 p-3.5 rounded-xl bg-black text-white cursor-pointer outline-offset-3">Buy</button>
              </fieldset>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;