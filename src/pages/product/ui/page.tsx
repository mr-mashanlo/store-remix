import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../model/loader';

const Product: FC = () => {
  const data = useLoaderData<typeof loader>();
  const totalImages = [ ...data.images, ...( data.variants.map( variant => variant.image ) ) ];
  const images = Array.from( new Map( totalImages.map( image => [ image.id, image ] ) ).values() );

  return (
    <section className="p-3 sm:px-35 py-15">
      <div className="grid sm:grid-cols-3 gap-10">
        <ul className="grid gap-10 col-span-2">
          {images.map( image => (
            <li key={image.id}>
              <img src={image.url} alt={image.alt} className="aspect-[4/3] object-cover bg-neutral-100" />
            </li>
          ) )}
        </ul>
        <div className="relative">
          <div className="sticky top-15">
            <h1 className="text-base font-medium">{data.name}</h1>
            <p className="mt-7">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;