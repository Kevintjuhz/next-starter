'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { GetCategories } from '@/queries/get-categories';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { BlogContext } from '@/context/blog-context';

export default function SidebarList() {
  const { data, error, loading } = useQuery(GetCategories);
  const { selectedCategory, setSelectedCategory } = useContext(BlogContext);

  if (loading)
    return (
      <aside className="w-full" aria-label="Sidebar">
        <div className="p-4 overflow-y-auto bg-white border border-gray-200 rounded rounded-lg dark:bg-gray-800 dark:border-gray-700">
          Loading categories...
        </div>
      </aside>
    );
  if (error) return <p>Error :(</p>;

  const categories = data.Categories.items;

  const changeCategory = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <aside className="w-full" aria-label="Sidebar">
      <div className="p-4 overflow-y-auto bg-white border border-gray-200 rounded rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <ul>
          <li>
            <a
              href="."
              onClick={e => changeCategory(e, null)}
              className={classNames(
                'flex items-center p-2 text-base font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-100',
                !selectedCategory && 'text-violet-700'
              )}
            >
              <Image
                src="/oven.svg"
                className="flex-shrink-0 w-3.5 h-3.5"
                width={14}
                height={14}
                loading="lazy"
                alt="All categories Icon"
              />
              <span className="ml-3">All categories</span>
            </a>
          </li>

          {categories.map(category => (
            <li key={category._id}>
              <a
                href="."
                onClick={e => changeCategory(e, category._slug)}
                className={classNames(
                  'flex items-center p-2 text-base font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-100',
                  selectedCategory === category._slug && 'text-violet-700'
                )}
              >
                {category.icon && (
                  <Image
                    className="flex-shrink-0 w-3.5 h-3.5"
                    src={category.icon[0].url}
                    width={14}
                    height={14}
                    loading="lazy"
                    alt={`${category.title} Icon `}
                  />
                )}
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {category.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
