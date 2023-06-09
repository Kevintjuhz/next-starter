'use client';
import usePopup from '@/hooks/usePopup';
import Image from 'next/image';

export default function ArticleAuthor({ authors }) {
  const { openPopup } = usePopup();

  return (
    <div className="p-5 mb-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
      <h4 className="mb-8 text-sm font-bold text-gray-900 uppercase dark:text-white">
        Author
      </h4>
      {authors.map(author => (
        <div key={author._id} className="flex items-center space-x-2">
          <div className="text-base font-medium leading-tight dark:text-white">
            <div className="flex flex-row items-center mb-2">
              <Image
                className="object-cover w-6 h-6 mr-2 rounded-full"
                src={author.profile_pic[0].url}
                alt={author.full_name}
                loading="lazy"
                width={24}
                height={24}
              />
              <p>{author.full_name}</p>
            </div>

            <div className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2">
              {author.bio}
            </div>
            <button
              type="submit"
              onClick={openPopup}
              className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800 text-center w-full"
            >
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
