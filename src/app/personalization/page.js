import { GetPageBySlug } from '@/queries/get-page-by-slug';
import client from '@/services/apollo-client';
import SegmentSwitch from '@/components/segment-switch';
import PageStack from '@/components/page-stack';

async function getData(segment) {
  const { data } = await client.query({
    query: GetPageBySlug,
    variables: {
      slug: 'home-page-personalization',
      segment: segment || '',
    },
    fetchPolicy: 'no-cache',
  });

  return data;
}

export default async function PersonalizationPage({ searchParams }) {
  const { segment } = searchParams;
  const data = await getData(segment);

  return (
    <>
      <div className="grid max-w-screen-xl mx-auto mb-12">
        <SegmentSwitch title="Try it out!" currentSegment={segment || ''} />
      </div>
      <PageStack stack={data.Page.stack} />
    </>
  );
}
