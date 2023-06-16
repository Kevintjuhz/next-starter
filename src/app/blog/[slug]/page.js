import ArticleAuthor from '@/components/article-author';
import NewsletterSubscribe from '@/components/newsletter-subscribe';
import { GetArticleBySlug } from '@/queries/getArticleBySlug';
import Image from 'next/image';
import client from '@/services/apollo-client';

async function getData(slug) {
  const { data } = await client.query({
    query: GetArticleBySlug,
    variables: {
      slug: slug,
    },
  });

  return data;
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  const article = data.Article;

  return (
    <div className="container mx-auto md:px-0">
      <main className="pb-16 mt-20 bg-white lg:pb-24 dark:bg-gray-900">
        <div className="relative z-20 flex justify-between max-w-screen-xl mx-auto bg-white rounded dark:bg-gray-900">
          <article className="xl:w-[928px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <h1 className="mb-10 text-6xl font-bold leading-none text-gray-900">
              {article.title}
            </h1>
            <div className="flex flex-col justify-between py-6 mb-10 border-t border-b border-gray-200 lg:flex-row lg:items-center dark:border-gray-700">
              <span className="mb-4 text-base font-normal text-gray-500 lg:mb-0 dark:text-gray-400">
                By{' '}
                <a
                  href="#"
                  rel="author"
                  className="font-medium text-gray-900 no-underline dark:text-white hover:underline"
                >
                  {article.authors[0].full_name}
                </a>{' '}
                in{' '}
                {article.categories.map((category, index) => (
                  <a
                    key={category.title}
                    href="#"
                    className="font-medium text-gray-900 no-underline dark:text-gray-400 hover:underline"
                  >
                    {category.title}
                    {index + 1 < article.categories.length && <span>,</span>}
                  </a>
                ))}
              </span>
            </div>

            {article.content.map((content, index) => (
              <div key={content.__typename + '-' + index}>
                {content.__typename === 'Assets' && (
                  <div className="my-10">
                    {content.items.length && (
                      <Image
                        className="rounded-lg"
                        src={content.items[0].url}
                        alt={content.items[0].caption}
                        width={1000}
                        height={500}
                        loading="lazy"
                      />
                    )}
                    {content.items.length && (
                      <p className="mt-4 text-center text-gray-500">
                        {content.items[0].caption}
                      </p>
                    )}
                  </div>
                )}
                {content.__typename === 'Text' && (
                  <div
                    className="mb-2 article"
                    dangerouslySetInnerHTML={{ __html: content.body }}
                  ></div>
                )}
              </div>
            ))}
          </article>
          <aside className="hidden xl:block" aria-labelledby="sidebar-label">
            <div className="xl:w-[304px] sticky top-6">
              <h3 id="sidebar-label" className="sr-only">
                Sidebar
              </h3>
              <NewsletterSubscribe />
              <ArticleAuthor authors={article.authors} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
