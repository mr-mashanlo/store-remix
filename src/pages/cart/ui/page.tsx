import { Form, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../model/loader';

const Cart: FC = () => {
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
                <h2 className="absolute left-5 bottom-5">{product.name}</h2>
                <p className="absolute right-5 bottom-5">{product.quantity} items for ${product.price}</p>
              </article>
            </li>
          ) )}
        </ul>
        <div className="relative">
          <div className="sm:sticky sm:top-15">
            <h2 className="text-base font-medium">Order Summary</h2>
            <p className="mt-4 text-xl font-bold">{quantity} items for ${total}</p>
            <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ipsam, perspiciatis iure fuga repellat ex saepe quam molestias facere placeat officiis. Voluptate quis hic repellendus aliquid nihil labore illo ipsum.</p>
            <Form action="post" className="mt-5">
              <fieldset>
                <legend className="text-center font-medium sr-only">Checkout</legend>
                <label htmlFor="country" className="block relative">
                  <input id="country" name="country" type="text" placeholder="Kazakhstan" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" required />
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
                    <title>Country</title>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.94165 7.80858C0.604829 10.7975 0.619843 14.2448 1.08853 17.2216C1.34787 18.8687 2.75539 20.1315 4.49282 20.2757L6.30859 20.4265C10.0947 20.7408 13.9023 20.7408 17.6885 20.4265L19.5042 20.2757C21.2417 20.1315 22.6492 18.8687 22.9085 17.2216C23.3772 14.2448 23.3923 10.7977 23.0554 7.80876C23.0119 7.46224 22.9629 7.11619 22.9085 6.77072C22.6492 5.12358 21.2417 3.86084 19.5042 3.71659L17.6885 3.56583C13.9023 3.25149 10.0947 3.25149 6.30859 3.56583L4.49281 3.71659C2.75539 3.86084 1.34787 5.12358 1.08853 6.77072C1.03415 7.11613 0.985188 7.46212 0.94165 7.80858ZM6.46477 5.28184C10.147 4.97613 13.85 4.97613 17.5323 5.28184L19.348 5.43259C20.255 5.50789 20.9897 6.16705 21.1251 7.02686C21.1392 7.11615 21.1528 7.20548 21.1661 7.29485L14.48 10.8425C12.9368 11.6614 11.0602 11.6614 9.51692 10.8425L2.83092 7.29489C2.84422 7.20551 2.8579 7.11616 2.87196 7.02686C3.00733 6.16705 3.74206 5.50789 4.649 5.43259L6.46477 5.28184ZM21.3868 9.1482C21.62 11.7523 21.5328 14.376 21.1251 16.9655C20.9897 17.8253 20.255 18.4844 19.3481 18.5597L17.5323 18.7105C13.8501 19.0162 10.147 19.0162 6.46478 18.7105L4.649 18.5597C3.74206 18.4844 3.00733 17.8253 2.87196 16.9654C2.46426 14.3761 2.37702 11.7523 2.61023 9.14824L8.64108 12.3482C10.7291 13.4561 13.2679 13.4561 15.3559 12.3482L21.3868 9.1482Z" />
                  </svg>
                </label>
                <label htmlFor="region" className="block mt-5 relative">
                  <input id="region" name="region" type="text" placeholder="Zhambyl region" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" required />
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
                    <title>Region</title>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.94165 7.80858C0.604829 10.7975 0.619843 14.2448 1.08853 17.2216C1.34787 18.8687 2.75539 20.1315 4.49282 20.2757L6.30859 20.4265C10.0947 20.7408 13.9023 20.7408 17.6885 20.4265L19.5042 20.2757C21.2417 20.1315 22.6492 18.8687 22.9085 17.2216C23.3772 14.2448 23.3923 10.7977 23.0554 7.80876C23.0119 7.46224 22.9629 7.11619 22.9085 6.77072C22.6492 5.12358 21.2417 3.86084 19.5042 3.71659L17.6885 3.56583C13.9023 3.25149 10.0947 3.25149 6.30859 3.56583L4.49281 3.71659C2.75539 3.86084 1.34787 5.12358 1.08853 6.77072C1.03415 7.11613 0.985188 7.46212 0.94165 7.80858ZM6.46477 5.28184C10.147 4.97613 13.85 4.97613 17.5323 5.28184L19.348 5.43259C20.255 5.50789 20.9897 6.16705 21.1251 7.02686C21.1392 7.11615 21.1528 7.20548 21.1661 7.29485L14.48 10.8425C12.9368 11.6614 11.0602 11.6614 9.51692 10.8425L2.83092 7.29489C2.84422 7.20551 2.8579 7.11616 2.87196 7.02686C3.00733 6.16705 3.74206 5.50789 4.649 5.43259L6.46477 5.28184ZM21.3868 9.1482C21.62 11.7523 21.5328 14.376 21.1251 16.9655C20.9897 17.8253 20.255 18.4844 19.3481 18.5597L17.5323 18.7105C13.8501 19.0162 10.147 19.0162 6.46478 18.7105L4.649 18.5597C3.74206 18.4844 3.00733 17.8253 2.87196 16.9654C2.46426 14.3761 2.37702 11.7523 2.61023 9.14824L8.64108 12.3482C10.7291 13.4561 13.2679 13.4561 15.3559 12.3482L21.3868 9.1482Z" />
                  </svg>
                </label>
                <label htmlFor="city" className="block mt-5 relative">
                  <input id="city" name="city" type="text" placeholder="Taraz city" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" required />
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
                    <title>City</title>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.94165 7.80858C0.604829 10.7975 0.619843 14.2448 1.08853 17.2216C1.34787 18.8687 2.75539 20.1315 4.49282 20.2757L6.30859 20.4265C10.0947 20.7408 13.9023 20.7408 17.6885 20.4265L19.5042 20.2757C21.2417 20.1315 22.6492 18.8687 22.9085 17.2216C23.3772 14.2448 23.3923 10.7977 23.0554 7.80876C23.0119 7.46224 22.9629 7.11619 22.9085 6.77072C22.6492 5.12358 21.2417 3.86084 19.5042 3.71659L17.6885 3.56583C13.9023 3.25149 10.0947 3.25149 6.30859 3.56583L4.49281 3.71659C2.75539 3.86084 1.34787 5.12358 1.08853 6.77072C1.03415 7.11613 0.985188 7.46212 0.94165 7.80858ZM6.46477 5.28184C10.147 4.97613 13.85 4.97613 17.5323 5.28184L19.348 5.43259C20.255 5.50789 20.9897 6.16705 21.1251 7.02686C21.1392 7.11615 21.1528 7.20548 21.1661 7.29485L14.48 10.8425C12.9368 11.6614 11.0602 11.6614 9.51692 10.8425L2.83092 7.29489C2.84422 7.20551 2.8579 7.11616 2.87196 7.02686C3.00733 6.16705 3.74206 5.50789 4.649 5.43259L6.46477 5.28184ZM21.3868 9.1482C21.62 11.7523 21.5328 14.376 21.1251 16.9655C20.9897 17.8253 20.255 18.4844 19.3481 18.5597L17.5323 18.7105C13.8501 19.0162 10.147 19.0162 6.46478 18.7105L4.649 18.5597C3.74206 18.4844 3.00733 17.8253 2.87196 16.9654C2.46426 14.3761 2.37702 11.7523 2.61023 9.14824L8.64108 12.3482C10.7291 13.4561 13.2679 13.4561 15.3559 12.3482L21.3868 9.1482Z" />
                  </svg>
                </label>
                <label htmlFor="address" className="block mt-5 relative">
                  <input id="address" name="address" type="text" placeholder="Abay Street #72" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" required />
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
                    <title>Address</title>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.94165 7.80858C0.604829 10.7975 0.619843 14.2448 1.08853 17.2216C1.34787 18.8687 2.75539 20.1315 4.49282 20.2757L6.30859 20.4265C10.0947 20.7408 13.9023 20.7408 17.6885 20.4265L19.5042 20.2757C21.2417 20.1315 22.6492 18.8687 22.9085 17.2216C23.3772 14.2448 23.3923 10.7977 23.0554 7.80876C23.0119 7.46224 22.9629 7.11619 22.9085 6.77072C22.6492 5.12358 21.2417 3.86084 19.5042 3.71659L17.6885 3.56583C13.9023 3.25149 10.0947 3.25149 6.30859 3.56583L4.49281 3.71659C2.75539 3.86084 1.34787 5.12358 1.08853 6.77072C1.03415 7.11613 0.985188 7.46212 0.94165 7.80858ZM6.46477 5.28184C10.147 4.97613 13.85 4.97613 17.5323 5.28184L19.348 5.43259C20.255 5.50789 20.9897 6.16705 21.1251 7.02686C21.1392 7.11615 21.1528 7.20548 21.1661 7.29485L14.48 10.8425C12.9368 11.6614 11.0602 11.6614 9.51692 10.8425L2.83092 7.29489C2.84422 7.20551 2.8579 7.11616 2.87196 7.02686C3.00733 6.16705 3.74206 5.50789 4.649 5.43259L6.46477 5.28184ZM21.3868 9.1482C21.62 11.7523 21.5328 14.376 21.1251 16.9655C20.9897 17.8253 20.255 18.4844 19.3481 18.5597L17.5323 18.7105C13.8501 19.0162 10.147 19.0162 6.46478 18.7105L4.649 18.5597C3.74206 18.4844 3.00733 17.8253 2.87196 16.9654C2.46426 14.3761 2.37702 11.7523 2.61023 9.14824L8.64108 12.3482C10.7291 13.4561 13.2679 13.4561 15.3559 12.3482L21.3868 9.1482Z" />
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