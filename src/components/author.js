import usePopup from '@/hooks/usePopup';
import Image from 'next/image';

export default function Author({ full_name, profile_pic, bio }) {
  const { openPopup } = usePopup();

  return (
    <div className="flex items-center mb-6 space-x-2">
      <div className="text-base font-medium leading-tight dark:text-white">
        <div className="flex flex-row">
          <Image
            className="object-cover w-6 h-6 mr-2 rounded-full"
            src={profile_pic}
            width={24}
            height={24}
            alt={full_name}
            loading="lazy"
          />
          <div>{full_name}</div>
        </div>

        <div className="ml-8 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2">
          {bio}
        </div>
      </div>
      <div>
        <button
          className="px-3 py-2 text-xs font-medium text-gray-800 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-200"
          onClick={openPopup}
        >
          Follow
        </button>
      </div>
    </div>
  );
}
