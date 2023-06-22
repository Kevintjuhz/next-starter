'use client';

import Carousel from '@/components/carousel';
import usePopup from '@/hooks/usePopup';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';
import Image from 'next/image';

export default function ProductCollection({
  heading,
  description,
  cta_label,
  products,
}) {
  const { openPopup } = usePopup();

  const getPrice = price => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="container mx-auto md:px-0">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-14 lg:px-6">
          <div className="max-w-screen-sm mx-auto mb-6 text-center lg:mb-10">
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
              {heading}
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              {description}
            </p>

            <p className="mt-6 text-sm font-medium text-center md:text-lg text-violet-600">
              <button onClick={openPopup}>
                {cta_label}
                <ArrowRightIcon />
              </button>
            </p>
          </div>

          <div className="hidden gap-8 md:grid sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#" className="">
                  <Image
                    className="object-contain w-full px-5 py-6 h-60"
                    width={500}
                    height={300}
                    loading="lazy"
                    src={product.image}
                    alt={`${product.title} product image`}
                  />
                </a>

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 line-clamp-2 dark:text-white">
                      {product.title}
                    </h5>
                    <p className="mb-4 text-base font-normal text-gray-500 line-clamp-2">
                      {product.description}
                    </p>
                  </a>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {getPrice(product.price)}
                    </span>

                    <a
                      onClick={openPopup}
                      className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Carousel height={278}>
              {products.map((product, index) => (
                <div
                  key={index}
                  data-carousel-item="index == 0"
                  className="absolute w-full duration-700 bg-white border border-gray-200 rounded-lg h-[278px] dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#" className="">
                    <Image
                      className="object-cover w-full px-16 py-6 rounded-t-lg h-44"
                      src={product.image}
                      alt={`${product.title} product image`}
                      loading="lazy"
                      width={500}
                      height={300}
                    />
                  </a>

                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="mb-5 text-xl font-semibold tracking-tight text-gray-900 line-clamp-1 dark:text-white">
                        {product.title}
                      </h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                        {getPrice(product.price)}
                      </span>
                      <a
                        href="#"
                        onClick={openPopup}
                        className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
