'use client';
import classNames from 'classnames';
import Image from 'next/image';

export default function ImageAndText({
  image_position,
  image_name,
  image_url,
  text,
  title,
}) {
  return (
    <div className="container mx-auto md:px-0">
      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className={classNames(
              image_position === 'Right' ? 'order-last' : '',
              'object-cover w-full rounded-lg shadow-xl h-60 md:h-96 dark:hidden'
            )}
            width={500}
            height={300}
            loading="lazy"
            src={image_url}
            alt={image_name}
          />
          <Image
            className="hidden w-full dark:block"
            width={500}
            height={300}
            loading="lazy"
            src={image_url}
            alt={image_name}
          />
          <div className="mt-8 md:mt-4 md:mt-0">
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-center text-gray-900  md:text-left md:text-4xl dark:text-white">
              {title}
            </h2>
            <p className="font-light text-center text-gray-500  md:mb-6 md:text-left md:text-lg dark:text-gray-400">
              {text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
