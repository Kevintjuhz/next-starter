'use client';

import FacebookIcon from '@/components/icons/facebook-icon';
import InstagramIcon from '@/components/icons/instagram-icon';
import TwitterIcon from '@/components/icons/twitter-icon';

export default function Footer() {
  return (
    <footer className="sticky top-[100vh]">
      <div className="container mx-auto mt-12 border-t">
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © {new Date().getFullYear()}{' '}
            <a href="https://prepr.io/" target="_blank">
              Prepr
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FacebookIcon />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <InstagramIcon />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <TwitterIcon />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
