export default function Hero({ children, title, description }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        {title && (
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl md:text-5xl lg:text-6xl dark:text-white">
            {title}
          </h1>
        )}
        {description && (
          <p className="mb-8 text-base font-normal text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
