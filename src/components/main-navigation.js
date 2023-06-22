'use client';
import Image from 'next/image';
import HamburgerIcon from '@/components/icons/hamburger-icon';
import classNames from 'classnames';
import Link from 'next/link';
import NavDropdownIcon from '@/components/icons/nav-dropdown-icon';
import { useEffect, useRef, useState } from 'react';

export default function MainNavigation({ navigation }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState(-1);
  const dropdownEl = useRef();

  useEffect(() => {
    const handler = event => {
      if (!dropdownEl.current) return;

      if (!dropdownEl.current.contains(event.target)) {
        setCurrentDropdown(-1);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const toggleDropdown = id => {
    if (currentDropdown === id) {
      setCurrentDropdown(-1);
    } else {
      setCurrentDropdown(id);
    }
  };

  return (
    <>
      <div className="container mx-auto md:px-0">
        <header className="mt-24">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
              <a href="https://flowbite.com" className="flex items-center">
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-6 mr-3 sm:h-9"
                  width={36}
                  height={36}
                  alt="Flowbite Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  {navigation.title}
                </span>
              </a>
              <div className="flex items-center lg:order-2">
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <HamburgerIcon />
                </button>
              </div>
              <div
                className={classNames(
                  'items-center justify-between w-full lg:flex lg:w-auto lg:order-1',
                  isMobileMenuOpen ? 'block' : 'hidden'
                )}
                id="mobile-menu-2"
              >
                <ul
                  className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
                  ref={dropdownEl}
                >
                  {navigation.menu_items.map(navigationItem => (
                    <li key={navigationItem._id}>
                      {!(navigationItem.children.length > 1) && (
                        <Link
                          href="/navigation"
                          className="block py-2 pl-3 pr-4 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-600 lg:p-0 dark:text-violet-500 lg:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 lg:dark:hover:bg-transparent dark:border-gray-700"
                          aria-current="page"
                        >
                          {navigationItem.title}
                        </Link>
                      )}

                      {navigationItem.children.length > 1 && (
                        <>
                          <button
                            id={navigationItem.title}
                            data-dropdown-toggle={navigationItem._id}
                            className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-600 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            onClick={() => toggleDropdown(navigationItem._id)}
                          >
                            {navigationItem.title}
                            <NavDropdownIcon />
                          </button>

                          {currentDropdown === navigationItem._id && (
                            <div
                              id={navigationItem._id}
                              className="z-10 font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-2 text-sm text-gray-600 dark:text-gray-400"
                                aria-labelledby="dropdownLargeButton"
                              >
                                {navigationItem.children.map(child => (
                                  <li key={child._id}>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 text-base font-semibold leading-none hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      <span className="inline-flex items-center justify-center w-8 h-8 mr-4 rounded-lg shadow-md">
                                        <Image
                                          className="w-4 h-4"
                                          src={child.icon[0].url}
                                          width={16}
                                          height={16}
                                          loading="lazy"
                                          alt={child.title}
                                        />
                                      </span>
                                      {child.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
