import ABSwitch from '@/components/a-b-switch';
import PageStack from '@/components/page-stack';
import { GetStaticPageBySlug } from '@/queries/get-static-page-by-slug';
import client from '@/services/apollo-client';
import { cookies } from 'next/headers';

export const revalidate = 0;

async function getData(id) {
  const { data } = await client.query({
    query: GetStaticPageBySlug,
    variables: {
      slug: 'home-page-ab-testing',
    },
    context: {
      headers: {
        'Prepr-Customer-Id': id,
      },
    },
    fetchPolicy: 'network-only',
  });

  return data;
}

export default async function Page({ searchParams }) {
  const { customer_id } = searchParams;
  const cookieStore = cookies();
  let prepr_uid = await cookieStore.get('__prepr_uid');

  // If no cookie was found generate a UUID
  if (!prepr_uid) {
    prepr_uid = { value: crypto.randomUUID() };
  }

  const customer = customer_id || prepr_uid.value;

  const data = await getData(customer);

  return (
    <>
      <div className='grid max-w-screen-xl mx-auto mb-12'>
        {/* Pass UUID to client to be able to trigger server action */}
        <ABSwitch title='Try it out!' customer={customer} cookie={prepr_uid} />
      </div>
      <PageStack stack={data.Page.stack} />
    </>
  );
}
