import Link from 'next/link';
import Badge from '@/components/badge';
import { getFormattedDate } from '../../composables/get-formatted-date';
import ArrowRightFlatIcon from '@/components/icons/arrow-right-flat-icon';
import Image from 'next/image';

export default function ArticleCard({ data }) {
  const author = data.authors[0];

  return (
    <Link
      href={`/blog/${data._slug}`}
      className="flex flex-col items-center mb-6 transition-shadow bg-white border rounded-lg shadow-md hover:shadow-lg md:flex-row dark:border-gray-700 dark:bg-gray-800"
    >
      {data.cover && (
        <Image
          className="
          object-cover w-full rounded-t-lg h-[158px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          width={300}
          height={300}
          src={data.cover[0].url}
          alt={data.title}
          loading="lazy"
        />
      )}
      <div className="flex flex-col items-stretch justify-between p-5 leading-normal grow">
        <div className="flex justify-between mb-4">
          <Badge
            label={data.categories[0].title}
            iconUrl={data.categories[0].icon[0].url}
            classes="bg-violet-100 text-violet-800"
          />
          <span className="text-sm text-gray-400">
            {getFormattedDate(data._publish_on)}
          </span>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
        <div
          className="mb-4 text-base font-normal text-gray-500 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: data.excerpt }}
        ></div>

        <div className="flex flex-row items-center justify-between">
          {author && (
            <div className="flex items-center space-x-4" key={author.full_name}>
              <Image
                className="object-cover w-6 h-6 rounded-full"
                src={author.profile_pic[0].url}
                alt={author.full_name}
                loading="lazy"
                width={24}
                height={24}
              />
              <div className="text-base font-medium leading-tight dark:text-white">
                <div>{author.full_name}</div>
              </div>
            </div>
          )}
          <button className="inline-flex items-center text-base font-medium leading-tight text-violet-600 dark:text-violet-500 hover:underline">
            Read more
            <ArrowRightFlatIcon />
          </button>
        </div>
      </div>
    </Link>
  );
}
