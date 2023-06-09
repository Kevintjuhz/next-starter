import FacebookIcon from '@/components/icons/facebook-icon';
import TwitterIcon from '@/components/icons/twitter-icon';
import DribbbleIcon from '@/components/icons/dribbble-icon';
import GithubIcon from '@/components/icons/github-icon';
import Image from 'next/image';

export default function SpeakerCard({ speaker }) {
  return (
    <>
      <div className="flex-col items-stretch hidden col-span-2 transition-all rounded-lg lg:flex lg:col-span-2 xl:col-span-1 bg-gray-50 lg:flex-row hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          className="object-cover w-full rounded-t-lg h-72 lg:w-60 md:w-48 lg:h-64 shrink-0 md:rounded-none md:rounded-l-lg"
          width={300}
          height={300}
          loading="lazy"
          src={speaker.profile_pic[0].url}
          alt={speaker.full_name}
        />
        <div className="flex flex-col justify-between p-6 leading-normal">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {speaker.full_name}
          </h5>
          <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
            {speaker.bio}
          </p>

          <div className="flex mt-4 space-x-3 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FacebookIcon />
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <TwitterIcon />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <DribbbleIcon />
              <span className="sr-only">Dribbble account</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <GithubIcon />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
