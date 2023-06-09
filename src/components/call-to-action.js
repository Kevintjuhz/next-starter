'use client';

import usePopup from '@/hooks/usePopup';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';

export default function CallToAction({
  image,
  heading,
  description,
  cta_label,
}) {
  const { openPopup } = usePopup();

  return (
    <div className="container mx-auto md:px-0">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full px-8 py-12 mt-4 bg-white bg-no-repeat bg-cover border border-gray-200 md:px-24 md:py-16 md:mt-14 rounded-2xl dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <a
          onClick={openPopup}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
        >
          {cta_label}
          <ArrowRightIcon fill="currentColor" width={12} height={12} />
        </a>
      </div>
    </div>
  );
}
