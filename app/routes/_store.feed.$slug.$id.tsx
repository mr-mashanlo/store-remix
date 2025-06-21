import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Buy Wireless headphones' },
    { name: 'description', content: 'Order the Wireless headphones today and enjoy reliable performance, quality materials, and quick delivery' }
  ];
};

export default function Product() {
  return (
    <main>
      <section className="p-4 sm:p-9">
        <article aria-labelledby="product-title" aria-describedby="product-description product-pricing" className="grid sm:grid-cols-[2fr_1fr]">
          <figure className="grid sm:grid-cols-2 gap-2">
            <img src="" alt="Wireless headphones front view" loading="lazy" className="aspect-[6/7] bg-neutral-200" />
            <img src="" alt="Wireless headphones side view" loading="lazy" className="aspect-[6/7] bg-neutral-200" />
            <img src="" alt="Wireless headphones top view" loading="lazy" className="aspect-[6/7] bg-neutral-200" />
            <img src="" alt="Wireless headphones bottom view" loading="lazy" className="aspect-[6/7] bg-neutral-200" />
            <figcaption className="sr-only">Images of Wireless Headphones from different angles</figcaption>
          </figure>
          <div className="sm:px-9 relative">
            <div className="sticky top-10">
              <header>
                <h1 id="product-title" className="text-xl sm:text-xl font-bold">Wireless headphones</h1>
              </header>
              <div id="product-pricing" aria-label="Price" className="mt-2 sm:mt-5 text-lg sm:text-xl font-bold">
                <span aria-current="true" className="mr-4">$99.99</span>
                <span aria-hidden="true" className="text-neutral-300 line-through">$149.99</span>
              </div>
              <form action="" className="mt-3 sm:mt-5">
                <button type="button" aria-label="Buy Wireless Headphones for $99.99" className="w-full p-3.5 rounded-xl bg-black text-white cursor-pointer outline-offset-3">Buy now</button>
              </form>
              <div id="product-description" className="mt-2 sm:mt-5">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, sapiente. Quidem at quibusdam voluptate quo.</p>
                <p className="mt-3">Inventore quibusdam autem, repellendus mollitia a excepturi expedita impedit et accusamus, delectus ut unde deserunt?</p>
                <p className="mt-3">In ullam temporibus eius iure. Eligendi quia praesentium tenetur nisi quisquam unde quibusdam eum explicabo?</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}