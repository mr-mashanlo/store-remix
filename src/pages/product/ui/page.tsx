import { Form, useLoaderData, useSearchParams } from '@remix-run/react';
import { ChangeEvent, FC } from 'react';

import { getMergedImages } from '../lib/get-merged-images';
import { getOptionSearchParam } from '../lib/get-search-params';
import loader from '../model/loader';

const Product: FC = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const selectedOption = getOptionSearchParam( searchParams, loaderData );
  const mergedImages = getMergedImages( loaderData );

  const handleRadioChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const params = new URLSearchParams();
    params.set( 'option', e.target.value );
    setSearchParams( params, { replace: true, preventScrollReset: true } );
  };

  return (
    <section className="p-3 sm:px-35 py-5 sm:py-15">
      <div className="grid sm:grid-cols-3 gap-10">
        <ul className="grid gap-3 sm:gap-10 sm:col-span-2">
          {mergedImages.map( image => (
            <li key={image.id}>
              <img src={image.url} alt={image.alt} className="aspect-[4/3] object-cover bg-neutral-100" />
            </li>
          ) )}
        </ul>
        <div className="relative">
          <div className="sticky top-15">
            <h1 className="text-base font-medium">{loaderData.name}</h1>
            <p className="mt-4 text-xl font-bold">
              {selectedOption
                ? <span>${selectedOption.price}</span>
                : <span>${loaderData.options[0].price} {loaderData.options.length - 1 ? `- $${loaderData.options[loaderData.options.length - 1].price}` : null}</span>
              }
            </p>
            <p className="mt-5">{loaderData.description}</p>
            <Form method="post" className="mt-5">
              <div className="grid grid-cols-3 gap-5">
                {loaderData.options.map( ( option ) => (
                  <label key={option.id} className="inline-block has-checked:outline-2 rounded-xl overflow-hidden cursor-pointer">
                    <input onChange={handleRadioChange} checked={selectedOption?.id === option.id} value={option.id} name="option" type="radio" className="sr-only" />
                    <img src={option.image.url} alt={option.image.alt} className="w-wull aspect-square bg-neutral-100" />
                  </label>
                ) )}
              </div>
              <button disabled={!selectedOption} type="submit" className="w-full mt-5 p-3.5 rounded-xl bg-black text-white outline-offset-3 cursor-pointer disabled:cursor-default disabled:opacity-70 ">Add to cart</button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;