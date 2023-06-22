import SpeakerCard from '@/components/speaker-card';
import Carousel from '@/components/carousel';
import Image from 'next/image';

export default function Speakers({ speakers }) {
  return (
    <>
      <div className="col-span-2 px-0 py-3 mx-auto text-center mt-14 md:px-4 md:py-8 lg:px-12">
        <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Speakers
        </h3>
        <p className="text-base font-normal text-gray-500 md:text-xl lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Speaker description
        </p>
      </div>
      {speakers.map(speaker => (
        <SpeakerCard key={speaker._id} speaker={speaker} />
      ))}
      <div className="block col-span-2 lg:hidden">
        <Carousel height={364}>
          {speakers.map((speaker, index) => (
            <div
              key={speaker._id}
              data-carousel-item={index === 0}
              className="absolute p-4 duration-700 bg-white h-[364px]"
            >
              <div className="p-4 border border-gray-200 rounded-lg">
                <Image
                  className="object-cover w-full h-48 mb-6 rounded-lg"
                  width={400}
                  height={200}
                  src={speaker.profile_pic[0].url}
                  alt={speaker.full_name}
                  loading="lazy"
                />
                <div>
                  <h5 className="mb-3 text-lg font-bold leading-tight text-gray-900">
                    {speaker.full_name}
                  </h5>
                  <p className="text-sm font-normal text-gray-500">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
