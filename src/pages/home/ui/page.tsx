import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';

import loader from '../model/loader';

const Home: FC = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <section className="p-3 sm:px-35 py-15">
      <h1 className="mb-10 text-center font-medium">Our popular products</h1>
      <ul className="grid sm:grid-cols-2 gap-10">
        {data?.docs.map( product => (
          <li key={product.id}>
            <article className="relative">
              <a href={`/feed/iphone/${product.id}`}>
                <img src="" alt="" className="aspect-[4/3] bg-neutral-100" />
              </a>
              <h2 className="font-medium absolute left-5 bottom-5">{product.name}</h2>
              <p className="font-medium absolute right-5 bottom-5">$12</p>
            </article>
          </li>
        ) )}
      </ul>
    </section>
  );
};

export default Home;