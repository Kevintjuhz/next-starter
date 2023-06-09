'use client';

import Logo from '@/components/logo';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';
import HamburgerIcon from '@/components/icons/hamburger-icon';

export default function Nav() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Page',
      to: '/page-pattern',
    },
    {
      name: 'Blog',
      to: '/blog',
    },
    {
      name: 'Live stream',
      to: '/livestream',
    },
    {
      name: 'Navigation',
      to: '/navigation',
    },
    {
      name: 'Personalization',
      to: '/personalization',
    },
    {
      name: 'A/B testing',
      to: '/a-b-testing',
    },
  ];

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 bg-white border-gray-200 md:relative dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto min-h-20 md:h-20 md:px-6">
        <Logo />
        <button
          id="mega-menu-full-cta-button"
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-cta"
          aria-expanded={expanded}
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerIcon />
        </button>

        <div
          id="mega-menu-full-cta"
          className={classNames(
            expanded ? '' : 'hidden ',
            'items-center justify-between w-full md:flex md:w-auto md:grow md:basis-auto z-10'
          )}
        >
          <ul className="flex flex-col pl-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.to}
                  className={classNames(
                    pathname.includes(item.to)
                      ? 'text-violet-600 font-semibold'
                      : 'text-gray-900 font-medium',
                    'block py-2 pr-4 border-t bg-white border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
