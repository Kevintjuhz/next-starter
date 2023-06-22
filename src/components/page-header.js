'use client';
import usePopup from '@/hooks/usePopup';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';

export default function PageHeader({ text, heading, image, cta_label }) {
  const { openPopup } = usePopup();

  return (
    <>
      {image && (
        <section
          style={{ backgroundImage: `url(${image})` }}
          className="mb-12 flex items-center h-[600px] bg-no-repeat bg-cover"
        >
          <div className="container mx-auto md:px-0">
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-6xl md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 text-base font-normal text-white md:text-lg lg:text-xl">
              {text}
            </p>
            {cta_label && (
              <a
                onClick={openPopup}
                href="#notify"
                className="
                  inline-flex
                  items-center
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-center text-white
                  rounded-lg
                  bg-violet-700
                  hover:bg-violet-800
                  focus:ring-4 focus:outline-none focus:ring-violet-300
                  dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800
                "
              >
                {cta_label}
                <ArrowRightIcon fill="currentColor" width="15" height="15" />
              </a>
            )}
          </div>
        </section>
      )}

      {!image && (
        <div className="container mx-auto md:px-0">
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
              <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl md:text-5xl lg:text-6xl dark:text-white">
                {heading}
              </h1>
              <p className="mb-8 text-base font-normal text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                {text}
              </p>
              {cta_label && (
                <a
                  href="#notify"
                  className="
                    inline-flex
                    items-center
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-center text-white
                    rounded-lg
                    bg-violet-700
                    hover:bg-violet-800
                    focus:ring-4 focus:outline-none focus:ring-violet-300
                    dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800
                  "
                >
                  {cta_label}
                  <ArrowRightIcon fill="currentColor" width="15" height="15" />
                </a>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
