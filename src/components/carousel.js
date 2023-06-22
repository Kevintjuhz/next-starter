'use client';

import useFlowbite from '@/hooks/useFlowbite';
import ChevronFilledRightIcon from '@/components/icons/chevron-filled-right-icon';
import ChevronFilledLeftIcon from '@/components/icons/chevron-filled-left-icon';

export default function Carousel({ children, height = 364 }) {
  useFlowbite();

  return (
    <div
      id="indicators-carousel"
      className="relative overflow-hidden"
      data-carousel="static"
    >
      <div
        className={`rounded-lg h-[${height}px] sm:grid-cols-2 lg:grid-cols-3`}
      >
        {children}
      </div>
      <div className="relative z-50 flex items-center justify-between w-2/4 mx-auto mt-6">
        <button
          type="button"
          data-carousel-prev
          className="flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full"
        >
          <ChevronFilledLeftIcon />
        </button>
        <div className="flex mx-auto space-x-3">
          {children.map((item, index) => (
            <button
              key={index}
              type="button"
              className="w-2 h-2 bg-gray-300 rounded-full aria-[current=true]:bg-gray-900"
              aria-current={index === 0}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        <button
          type="button"
          data-carousel-next
          className="flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full"
        >
          <ChevronFilledRightIcon />
        </button>
      </div>
    </div>
  );
}
