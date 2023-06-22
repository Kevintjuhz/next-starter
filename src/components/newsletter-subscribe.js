'use client';
/* eslint-disable react/no-unescaped-entities */
import usePopup from '@/hooks/usePopup';
import PersonIcon from '@/components/icons/person-icon';
import EmailIcon from '@/components/icons/email-icon';

export default function NewsletterSubscribe() {
  const { openPopup } = usePopup();

  return (
    <div className="p-5 mb-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
      <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
        Be the first to read new articles about Headless CMS’s
      </h4>
      <p className="mb-5 text-sm font-light text-gray-500 dark:text-gray-400">
        Subscribe our newsletter for latest world news. Let's stay updated!
      </p>
      <form action="#">
        <label htmlFor="person-icon" className="sr-only">
          Your name
        </label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <PersonIcon />
          </div>
          <input
            required
            type="text"
            id="person-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full pl-8 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            placeholder="Your name"
          />
        </div>

        <label htmlFor="email-address-icon" className="sr-only">
          Your Email
        </label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <EmailIcon />
          </div>
          <input
            required
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full pl-8 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            placeholder="Your email address"
          />
        </div>
        <button
          type="submit"
          onClick={openPopup}
          className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800 text-center w-full"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
