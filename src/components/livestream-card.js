import LiveBadge from '@/components/badges/live-badge';
import RecordedBadge from '@/components/badges/recorded-badge';
import UpcomingBadge from '@/components/badges/upcoming-badge';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';
import Link from 'next/link';
import { getFormattedDate } from '../../composables/get-formatted-date';
import Image from 'next/image';

export default function LivestreamCard({
  event: { _slug, title, heading, speakers, cover, start_day_and_time },
  type,
}) {
  return (
    <Link href={`livestream/${type}/${_slug}`} className="cursor-pointer">
      <article className="flex flex-col transition-shadow bg-white border rounded-lg shadow-md hover:shadow-lg md:flex-row">
        <Image
          className="hidden object-cover w-full h-64 rounded-t-lg md:flex md:h-44 md:w-64 md:rounded-none md:rounded-l-lg"
          src={cover[0].url}
          loading="lazy"
          width={300}
          height={400}
          alt={title}
        />
        <div className="flex flex-col justify-between p-4 md:p-5 grow">
          <div className="flex items-center justify-between mb-2 text-gray-500">
            {type === 'live' && <LiveBadge />}
            {type === 'recorded' && <RecordedBadge />}
            {type === 'upcoming' && <UpcomingBadge />}
            {type !== 'live' && (
              <span className="text-sm">
                {getFormattedDate(start_day_and_time)}
              </span>
            )}
          </div>
          <h3 className="mb-1 text-base font-bold tracking-tight text-gray-900 md:text-xl dark:text-white">
            <span>{title}</span>
          </h3>
          <p className="w-full mb-5 text-sm font-light text-gray-500 dark:text-gray-400">
            {heading}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {speakers.map(speaker => (
                <Image
                  key={speaker.full_name}
                  className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                  width={24}
                  height={24}
                  loading="lazy"
                  src={speaker.profile_pic[0].url}
                  alt={`${speaker.full_name} profile image`}
                />
              ))}
            </div>
            <span className="inline-flex items-center text-sm font-semibold leading-tight md:text-base text-violet-600 hover:underline dark:text-violet-500">
              {type === 'live' ? 'Watch now' : 'Notify me'}
              <ArrowRightIcon className="w-4 h-4 ml-2" viewBox="0 0 20 15" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
