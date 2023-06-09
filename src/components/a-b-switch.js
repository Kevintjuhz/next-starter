'use client';

import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { clientIds } from '@/values/client-ids';

export default function ABSwitch({ title, customer }) {
  const pathname = usePathname();
  const router = useRouter();

  const foundCustomer = clientIds.find(clientId => clientId.id === customer);
  const version = foundCustomer ? foundCustomer.name : 'you';

  const handleVersionChange = (e, passedVersion) => {
    e.preventDefault();
    const clientItem = clientIds.find(
      clientId => clientId.name === passedVersion
    );

    if (clientItem) router.push(`${pathname}?customer_id=${clientItem.id}`);
    else router.push(pathname);
  };

  return (
    <div className="grid mx-4 lg:mx-0">
      <div className="rounded-xl bg-gray-50">
        <div className="px-8 py-7">
          <h2 className="inline text-xl font-semibold leading-tight text-gray-900 sm:block">
            {title}
          </h2>
          <p className="my-4 text-base">
            See our A/B testing engine in action by selecting a version below.
          </p>

          <div
            className="inline-flex w-full rounded-md shadow-sm md:w-auto"
            role="group"
          >
            <button
              type="button"
              onClick={e => {
                handleVersionChange(e, 'you');
              }}
              className={classNames(
                version === 'you'
                  ? 'bg-gray-700 text-white focus:text-white'
                  : 'bg-white text-gray-700 focus:text-gray-700',
                'w-1/2 p-4 px-6 text-sm font-medium border border-gray-200 rounded-l-lg md:w-48 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700'
              )}
            >
              You
            </button>

            <button
              type="button"
              onClick={e => {
                handleVersionChange(e, 'a');
              }}
              className={classNames(
                version === 'a'
                  ? 'bg-gray-700 text-white focus:text-white'
                  : 'bg-white text-gray-700 focus:text-gray-700',
                'w-1/2 p-4 px-6 text-sm font-medium border border-gray-200 md:w-48 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700'
              )}
            >
              Customer A
            </button>

            <button
              type="button"
              onClick={e => {
                handleVersionChange(e, 'b');
              }}
              className={classNames(
                version === 'b'
                  ? 'bg-gray-700 text-white focus:text-white'
                  : 'bg-white text-gray-700 focus:text-gray-700',
                'w-1/2 p-4 px-6 text-sm font-medium border border-gray-200 md:w-48 rounded-r-md focus:z-10 focus:ring-2 focus:ring-gray-700'
              )}
            >
              Customer B
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
