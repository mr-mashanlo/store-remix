import { useFetcher, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../model/loader';

const Cart: FC = () => {
  const fetcher = useFetcher();
  const loaderData = useLoaderData<typeof loader>();
  const quantity = loaderData.docs.reduce( ( acc, order ) => { return acc += order.quantity; }, 0 );
  const total = loaderData.docs.reduce( ( acc, order ) => { return acc += order.option.price * order.quantity; }, 0 );

  if ( !loaderData.docs.length ) {
    return (
      <section className="min-h-section p-3 sm:px-35 py-5 sm:py-15 flex items-center justify-center">
        <div className="text-center">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-3">
            <path d="M19.2754,6.0391c-0.9817-0.2823-1.9721-0.4894-2.9553-0.6509L15.833,3.3447c-0.0742-0.3125-0.293-0.5693-0.5898-0.6924   c-2.0918-0.8672-4.3945-0.8672-6.4863,0C8.46,2.7754,8.2412,3.0322,8.167,3.3447l-0.4869,2.043   C6.6962,5.5497,5.7059,5.7569,4.7246,6.0391C4.1934,6.1914,3.8867,6.7451,4.0391,7.2754C4.1647,7.7144,4.5685,7.9825,5,7.9833   v1.754c0,2.9199,0.4072,5.8262,1.209,8.6367C6.8203,20.5088,8.7969,22,11.0176,22h1.9648c2.2207,0,4.1973-1.4912,4.8086-3.627   C18.5928,15.5635,19,12.6572,19,9.7373V7.9999C19.0003,7.9999,19.0007,8,19.001,8c0.4346,0,0.834-0.2852,0.96-0.7246   C20.1133,6.7451,19.8066,6.1914,19.2754,6.0391z M9.9883,4.3271c1.3125-0.4336,2.7109-0.4336,4.0234,0l0.1797,0.7539   C13.4619,5.0098,12.7314,4.9746,12,4.9746s-1.4619,0.0352-2.1914,0.1064L9.9883,4.3271z M15.8672,17.8232   C15.501,19.1055,14.3145,20,12.9824,20h-1.9648c-1.332,0-2.5186-0.8945-2.8848-2.1758C7.3809,15.1924,7,12.4717,7,9.7373V7.5348   C7.5473,7.42,8.0941,7.3238,8.6367,7.25c2.2305-0.3066,4.4941-0.3076,6.7285,0.001C15.9069,7.3243,16.4531,7.4202,17,7.5349v2.2025   C17,12.4717,16.6191,15.1924,15.8672,17.8232z"/>
            <path d="M14.4062,10.8262c-0.3906-0.3906-1.0234-0.3906-1.4141,0l-1.0264,1.0264l-0.9355-0.9355   c-0.3906-0.3906-1.0234-0.3906-1.4141,0s-0.3906,1.0234,0,1.4141l0.9355,0.9355l-0.958,0.958   c-0.3906,0.3906-0.3906,1.0234,0,1.4141c0.1953,0.1953,0.4512,0.293,0.707,0.293s0.5117-0.0977,0.707-0.293l0.958-0.958   l1.0264,1.0264C13.1875,15.9023,13.4434,16,13.6992,16s0.5117-0.0977,0.707-0.293c0.3906-0.3906,0.3906-1.0234,0-1.4141   l-1.0264-1.0264l1.0264-1.0264C14.7969,11.8496,14.7969,11.2168,14.4062,10.8262z"/>
          </svg>
          <h1 className="mb-3 font-medium">Your cart is empty.</h1>
          <p>Looks like you haven’t added anything yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-3 sm:px-35 py-5 sm:py-15">
      <h1 className="mb-10 sm:mb-15 text-center font-medium">Cart</h1>
      <div className="grid sm:grid-cols-3 gap-3 sm:gap-10">
        <ul className="grid gap-3 sm:gap-10 sm:col-span-2">
          {loaderData?.docs.map( ( { option, quantity } ) => (
            <li key={option.id}>
              <article className="relative">
                <img src={option.image.url} alt={option.image.alt} className="aspect-[4/3] object-cover bg-neutral-100" />
                <h2 className="font-medium absolute left-5 bottom-5">{option.name}</h2>
                <p className="font-medium absolute right-5 bottom-5">{quantity} items for ${option.price}</p>
                <fetcher.Form method="post" className="flex items-center bg-neutral-200/50 rounded-full absolute bottom-5 left-1/2 -translate-x-1/2">
                  <input value={option.id} name="option" type="hidden" />
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
            <fetcher.Form method="post" className="mt-5">
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
                <button value="checkout" name="action" type="submit" className="w-full mt-5 p-3.5 rounded-xl bg-black text-white cursor-pointer outline-offset-3">Buy</button>
              </fieldset>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Cart;