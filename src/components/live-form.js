'use client';
import usePopup from '@/hooks/usePopup';

export default function LiveForm() {
  const { openPopup } = usePopup();

  return (
    <form action="#">
      <div className="flex items-center max-w-screen-md mx-auto">
        <div className="relative w-5/6 mr-3 md:w-4/6">
          <label
            htmlFor="email"
            className="hidden mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Email address
          </label>
          <input
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            placeholder="Your email address"
            type="email"
            id="email"
            required=""
          />
        </div>
        <div className="w-1/6 md:w-auto">
          <button
            type="button"
            onClick={openPopup}
            className="inline-flex w-full px-5 py-3 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          >
            <span className="hidden md:inline">Notify me</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5 -mr-1 md:ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}