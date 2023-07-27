import Hero from '@/components/hero';
import LiveBadge from '@/components/badges/live-badge';
import { GetStreamBySlug } from '@/queries/getStreamBySlug';
import Speakers from '@/components/speakers';
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
        <LiveBadge size="lg" />
      </Hero>
      <div className="grid gap-8 overflow-hidden rounded-lg">
        <MuxWrapper
          id="video"
          className="flex w-full rounded-lg"
          style={{ aspectRatio: '16/9' }}
          playbackId={liveEvent.live_stream[0].playback_id}
          metadataVideoId={liveEvent.live_stream[0].playback_id}
          loop
          streamType="live"
          controls
          autoplay
        />
      </div>
      <div className="grid grid-cols-2 gap-1 md:gap-8">
        <Speakers speakers={liveEvent.speakers} />
      </div>
    </div>
  );
}
