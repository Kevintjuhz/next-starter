import { GetUpcomingLiveStreams } from '@/queries/get-upcoming-live-streams';
import { GetRecordedLiveStreams } from '@/queries/get-recorded-live-streams';
import { GetStreamBySlug } from '@/queries/get-stream-by-slug';
import client from '@/services/apollo-client';
import Hero from '@/components/hero';
import LivestreamCard from '@/components/livestream-card';

export const revalidate = 0;

async function getLiveShows() {
  const { data } = await client.query({
    query: GetStreamBySlug,
    variables: {
      slug: 'fall-bake-a-thon',
    },
  });

  return data;
}

async function getUpcomingShows(today) {
  const { data } = await client.query({
    query: GetUpcomingLiveStreams,
    variables: {
      where: {
        start_day_and_time_gt: today,
      },
    },
  });

  return data;
}

async function getRecordedShows(today) {
  const { data } = await client.query({
    query: GetRecordedLiveStreams,
    variables: {
      where: {
        start_day_and_time_lt: today,
      },
    },
  });

  return data;
}

export default async function Page() {
  const today = new Date().toJSON().slice(0, 10);

  const liveShowData = getLiveShows();
  const upcomingShowData = getUpcomingShows(today);
  const recordedShowData = getRecordedShows(today);

  const [liveShow, upcomingShows, recordedShows] = await Promise.all([
    liveShowData,
    upcomingShowData,
    recordedShowData,
  ]);

  const live = liveShow.LiveEvent;
  const upcoming = upcomingShows.LiveEvents.items;
  const recorded = recordedShows.LiveEvents.items;

  return (
    <div className="container mx-auto md:px-0">
      <Hero
        title="Live Events"
        description="Through our live events, join our baking community and skill up on basic and advanced skills. Turn your baked goodies into unforgettable treats for your family, friends or customers."
      />
      <div className="grid gap-4 mb-12">
        <h3 className="text-xl font-bold md:text-2xl">Live</h3>
        <div className="grid gap-6">
          <LivestreamCard type="live" event={live} />
        </div>
      </div>

      <div className="grid gap-4 mb-12">
        <h3 className="text-xl font-bold md:text-2xl">Upcoming</h3>
        <div className="grid gap-6">
          {upcoming.map(stream => (
            <div key={stream._id} className="col-span-12">
              <LivestreamCard type="upcoming" event={stream} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <h3 className="text-xl font-bold md:text-2xl">Recorded</h3>
        <div className="grid gap-6">
          {recorded.map(stream => (
            <div key={stream._id} className="col-span-12">
              <LivestreamCard type="recorded" event={stream} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
