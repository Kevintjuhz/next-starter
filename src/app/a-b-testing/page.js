import ABSwitch from '@/components/a-b-switch';
import PageStack from '@/components/page-stack';
import { GetStaticPageBySlug } from '@/queries/get-static-page-by-slug';
import client from '@/services/apollo-client';
import { cookies } from 'next/headers';
import { v4 } from 'uuid';

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
    fetchPolicy: 'no-cache',
  });

  return data;
}

export default async function ABTestingPage({ searchParams }) {
  const { customer_id } = searchParams;
  const cookieStore = cookies();
  let prepr_uid = cookieStore.get('__prepr_uid');

  if (!prepr_uid) {
    prepr_uid = { value: v4() };
  }

  const customer = customer_id || prepr_uid.value;

  const data = await getData(customer);

  return (
    <>
      <div className="grid max-w-screen-xl mx-auto mb-12">
        <ABSwitch title="Try it out!" customer={customer} />
      </div>
      <PageStack stack={data.Page.stack} />
    </>
  );
}
