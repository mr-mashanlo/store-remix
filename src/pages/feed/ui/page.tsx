import { Link, useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../model/loader';

const Feed: FC = () => {
  const loaderData = useLoaderData<typeof loader>();

  if ( !loaderData.products.docs.length ) {
    return (
      <section className="min-h-section p-3 sm:px-35 py-5 sm:py-15 flex items-center justify-center">
        <div className="text-center">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-3">
            <path d="M10,18c1.9,0,3.6-0.6,4.9-1.7l4.4,4.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-4.4-4.4 c1-1.4,1.7-3,1.7-4.9c0-4.4-3.6-8-8-8s-8,3.6-8,8S5.6,18,10,18z M10,4c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S6.7,4,10,4z"/>
          </svg>
          <h1 className="mb-3 font-medium">We couldn’t find any products.</h1>
          <p>Try changing the filters or explore other categories.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-3 sm:px-35 py-5 sm:py-15">
      <h1 className="mb-10 sm:mb-15 text-center font-medium">{loaderData.categories.docs[0].name}</h1>
      <ul className="grid sm:grid-cols-2 gap-3 sm:gap-10">
        {loaderData?.products.docs.map( product => (
          <li key={product.id}>
            <article className="relative">
              <Link to={`/product/${product.id}`}>
                <img src={product.images[0].url} alt={product.images[0].alt} className="w-full aspect-[4/3] object-cover bg-neutral-100" />
              </Link>
              <h2 className="font-medium absolute left-5 bottom-5">{product.name}</h2>
              {
                product.options.length > 1
                  ? <p className="font-medium absolute right-5 bottom-5">{product.options.length} options from ${product.options[0].price}</p>
                  : <p className="font-medium absolute right-5 bottom-5">${product.options[0].price}</p>
              }
            </article>
          </li>
        ) )}
      </ul>
    </section>
  );
};

export default Feed;