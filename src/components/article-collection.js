'use client';
import Link from 'next/link';
import { getFormattedDate } from '../../composables/get-formatted-date';
import Carousel from '@/components/carousel';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';
import Image from 'next/image';

export default function ArticleCollection({
  heading,
  description,
  cta_url,
  cta_label,
  articles,
}) {
  const getPublishDate = date => {
    return getFormattedDate(date);
  };

  return (
    <div className="container mx-auto md:px-0">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-14 lg:px-6">
          <div className="max-w-screen-sm mx-auto mb-8 text-center lg:mb-10">
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900  md:text-4xl dark:text-white">
              {heading}
            </h2>
            <p className="text-sm font-light text-gray-500  sm:text-xl dark:text-gray-400">
              {description}
            </p>
            <p className="mt-6 text-sm font-medium text-center  md:text-lg text-violet-600">
              {cta_label && (
                <a href={cta_url}>
                  {cta_label}
                  <ArrowRightIcon />
                </a>
              )}
            </p>
          </div>

          {/* Articles */}
          <div className="hidden gap-8 md:grid sm:grid-cols-2 lg:grid-cols-3">
            {articles.map(article => (
              <Link
                key={article._id}
                className="p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer"
                href={`/blog/${article._slug}`}
              >
                <Image
                  className="object-cover w-full h-48 mb-5 rounded-lg"
                  width={500}
                  height={300}
                  loading="lazy"
                  src={article.cover[0].url}
                  alt={article.title}
                />
                <span
                  className="
                      bg-purple-100
                      text-purple-800 text-xs
                      font-semibold
                      mr-2
                      px-2.5
                      py-0.5
                      rounded
                      dark:bg-purple-200 dark:text-purple-900
                    "
                >
                  Article
                </span>

                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
                  <span>{article.title}</span>
                </h2>

                <div
                  className="mb-4 font-light text-gray-500  dark:text-gray-400 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: article.excerpt }}
                ></div>

                <div className="flex items-center space-x-3">
                  <Image
                    className="object-cover w-6 h-6 rounded-full md:w-8 md:h-8"
                    src={article.authors[0].profile_pic[0].url}
                    alt={article.authors[0].full_name}
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                  <div className="text-sm font-medium dark:text-white">
                    <div>{article.authors[0].full_name}</div>
                    <div className="hidden text-sm font-normal text-gray-500  md:block dark:text-gray-400">
                      {getPublishDate(article._publish_on)} ·
                      {article.authors[0]._read_time} min read
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Carousel height={364}>
              {articles.map(article => (
                <div
                  key={article._id}
                  data-carousel-item
                  className="absolute duration-700 bg-white h-[364px]"
                >
                  <article className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                    <Link href={`/blog/${article._slug}`}>
                      <Image
                        className="object-cover w-full h-40 mb-4 rounded-t-lg md:h-48"
                        src={article.cover[0].url}
                        alt="office laptop working"
                        width={500}
                        height={300}
                        loading="lazy"
                      />
                    </Link>
                    <div className="px-4 pb-4">
                      <div className="flex justify-between">
                        <span
                          className="
                            bg-purple-100
                            text-purple-800 text-xs
                            font-semibold
                            mr-2
                            px-2.5
                            py-0.5
                            rounded
                            dark:bg-purple-200 dark:text-purple-900
                          "
                        >
                          Article
                        </span>
                        <span className="inline text-xs font-normal text-gray-500  md:hidden md:block dark:text-gray-400">
                          {getPublishDate(article._publish_on)}
                        </span>
                      </div>

                      <h2 className="mt-3 mb-2 text-lg font-bold tracking-tight text-gray-900  md:my-2 md:text-2xl dark:text-white">
                        <a href="#">{article.title}</a>
                      </h2>

                      <div
                        className="mb-4 text-sm font-light text-gray-500  md:text-base dark:text-gray-400 line-clamp-3 md:line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: article.excerpt }}
                      ></div>

                      <div className="flex items-center space-x-3">
                        <Image
                          className="object-cover w-6 h-6 rounded-full md:w-8 md:h-8"
                          src={
                            article.authors[0].profile_pic
                              ? article.authors[0].profile_pic[0].url
                              : defaultProfilePic
                          }
                          alt={article.authors[0].full_name}
                          width={32}
                          height={32}
                          loading="lazy"
                        />
                        <div className="text-sm font-medium dark:text-white">
                          <div>{article.authors[0].full_name}</div>
                          <div className="hidden text-sm font-normal text-gray-500  md:block dark:text-gray-400">
                            {getPublishDate(article._publish_on)} ·
                            {article.authors[0]._read_time} min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
