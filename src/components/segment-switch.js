'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import PersonalizedIcon from '@/components/icons/personalized-icon';
import NotPersonalizedIcon from '@/components/icons/not-personalized-icon';
import ChevronDownIcon from '@/components/icons/chevron-down-icon';
import { usePathname, useRouter } from 'next/navigation';

export default function SegmentSwitch({ title, currentSegment }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const changeSegment = segment => {
    router.push(`${pathname}?segment=${segment}`);
  };

  const segments = [
    {
      value: '',
      label: (
        <>
          <NotPersonalizedIcon /> Not Personalized
        </>
      ),
      isSegment: false,
    },
    {
      value: 'beginner-bakers',
      label: (
        <>
          <PersonalizedIcon /> Beginner bakers
        </>
      ),
      isSegment: true,
    },
    {
      value: 'pro-bakers',
      label: (
        <>
          <PersonalizedIcon /> Pro bakers
        </>
      ),
      isSegment: true,
    },
  ];

  const selectedSegment = segments.find(
    segment => segment.value === currentSegment
  );

  const emitSegment = (e, val) => {
    e.preventDefault();
    changeSegment(val);

    toggleDropdown(e);
  };

  const toggleDropdown = e => {
    e.preventDefault();
    setShowDropdown(showDropdown => !showDropdown);
  };

  return (
    <div className="grid mx-4 lg:mx-0">
      <div className="rounded-xl bg-gray-50">
        <div className="px-8 py-7">
          <h2 className="inline text-xl font-semibold leading-tight text-gray-900 sm:block">
            {title}
          </h2>

          <p className="my-4 text-base">
            See our personalization engine in action by selecting a segment
            below.
          </p>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-white border relative border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full md:inline-block md:w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              type="button"
            >
              {selectedSegment.label}
              <ChevronDownIcon />
            </button>

            <div
              className={classNames(
                !showDropdown && 'hidden',
                'absolute z-10 bg-white rounded shadow md:w-96 dark:bg-gray-700'
              )}
            >
              <h3 className="my-4 ml-4 text-sm font-semibold">Segments</h3>
              <ul
                className="text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {segments.map(
                  segment =>
                    segment.isSegment && (
                      <li key={segment.value}>
                        <a
                          onClick={e => emitSegment(e, segment.value)}
                          className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {segment.label}
                        </a>
                      </li>
                    )
                )}
              </ul>

              <h3 className="my-2 ml-4 text-sm font-semibold">Other</h3>

              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {segments.map(
                  segment =>
                    !segment.isSegment && (
                      <li key={segment.value}>
                        <a
                          onClick={e => emitSegment(e, segment.value)}
                          className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {segment.label}
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
