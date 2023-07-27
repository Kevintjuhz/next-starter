import { GetPageBySlug } from '@/queries/getPageBySlug';
import PageStack from '@/components/page-stack';
import client from '@/services/apollo-client';

export const revalidate = 0;

async function getData({ slug, segment }) {
  const { data } = await client.query({
    query: GetPageBySlug,
    variables: {
      slug: slug,
      segment: segment ? segment : '',
    },
    fetchPolicy: 'network-only'
  });

  return data;
}

export default async function PagePatternSlugPage({ params, searchParams }) {
  const { slug } = params;
  const { utm_campaign } = searchParams;

  const data = await getData({ slug, utm_campaign });
  const page = data.Page;
  return <PageStack stack={page.stack} />;
}
