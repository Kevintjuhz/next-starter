import { GetStreamBySlug } from '@/queries/get-stream-by-slug';
import Speakers from '@/components/speakers';
import Hero from '@/components/hero';
import RecordedBadge from '@/components/badges/recorded-badge';
import client from '@/services/apollo-client';
import MuxWrapper from '@/components/mux-wrapper';

export const revalidate = 0;

async function getData(slug) {
  const { data } = await client.query({
    query: GetStreamBySlug,
    variables: {
      slug,
    },
  });

  return data;
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  const liveEvent = data.LiveEvent;

  return (
    <div className="container mx-auto md:px-0">
      <Hero title={liveEvent.title} description={liveEvent.heading}>
        <RecordedBadge size="lg" />
      </Hero>
      <div className="grid gap-8 overflow-hidden rounded-lg">
        {liveEvent.live_stream.length && (
          <MuxWrapper
            style={{ aspectRatio: '16/9' }}
            className="flex w-full rounded-lg"
            playbackId={liveEvent.live_stream[0].playback_id}
            metadataVideoId="video-id-54321"
            metadataVideoTitle="Vue 3: Episode 2"
            metadataViewerUserId="user-id-vue3007"
            streamType="on-demand"
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Speakers speakers={liveEvent.speakers} />
      </div>
    </div>
  );
}
