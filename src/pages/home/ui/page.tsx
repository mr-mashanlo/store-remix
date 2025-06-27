import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../model/loader';

const Home: FC = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <section className="p-3 sm:px-35 py-5 sm:py-15">
      <h1 className="mb-10 sm:mb-15 text-center font-medium">Our latest products</h1>
      <ul className="grid sm:grid-cols-2 gap-3 sm:gap-10">
        {loaderData?.docs.map( product => (
          <li key={product.id}>
            <article className="relative">
              <a href={`/product/${product.id}`}>
                <img src={product.images[0].url} alt={product.images[0].alt} className="aspect-[4/3] object-cover bg-neutral-100" />
              </a>
              <h2 className="absolute left-5 bottom-5">{product.name}</h2>
              {
                product.variants.length > 1
                  ? <p className="absolute right-5 bottom-5">{product.variants.length} variants from ${product.variants[0].price}</p>
                  : <p className="absolute right-5 bottom-5">${product.variants[0].price}</p>
              }
            </article>
          </li>
        ) )}
      </ul>
    </section>
  );
};

export default Home;