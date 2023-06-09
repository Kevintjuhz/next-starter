import { GetStreamBySlug } from '@/queries/get-stream-by-slug';
import Hero from '@/components/hero';
import CountDown from '@/components/countdown';
import Speakers from '@/components/speakers';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';
import Image from 'next/image';
import client from '@/services/apollo-client';
import LiveForm from '@/components/live-form';

async function getData(slug) {
  const { data } = await client.query({
    query: GetStreamBySlug,
    variables: {
      slug,
    },
  });

  return data;
}

export default async function UpcomingPage({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  const liveEvent = data.LiveEvent;

  return (
    <div className="container mx-auto md:px-0">
      <Hero title={liveEvent.title} description={liveEvent.heading}>
        <a
          href="#notify"
          className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
        >
          Notify me
          <ArrowRightIcon fill="currentColor" />
        </a>
      </Hero>

      <CountDown startDate={liveEvent.start_day_and_time} />

      <div
        id="notify"
        className="flex items-center justify-between mt-16 mb-8 space-x-40 md:mt-28"
      >
        <div className="w-full md:basis-2/4">
          <h3 className="mb-4 text-xl font-semibold tracking-tight text-center text-gray-900 md:text-left dark:text-white">
            {liveEvent.heading}
          </h3>
          <p className="mb-6 text-base leading-relaxed text-center text-gray-500 md:text-left dark:text-gray-400">
            {liveEvent.live_stream_intro}
          </p>
          <LiveForm />
        </div>
        <div className="hidden md:flex basis-2/4">
          <Image
            className="object-cover w-full rounded-lg h-96"
            src={liveEvent.cover[0].url}
            width={500}
            height={500}
            loading="lazy"
            alt="Live Stream"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <Speakers speakers={liveEvent.speakers} />
      </div>
    </div>
  );
}
