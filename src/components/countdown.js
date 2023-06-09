'use client';
import useCountdown from '@/hooks/useCountdown';

export default function CountDown({ startDate }) {
  const { days, hours, minutes, seconds } = useCountdown(startDate);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 text-6xl text-center">
      <div className="w-full mb-10">
        <h3 className="text-xl font-bold md:text-4xl">Live stream starts in</h3>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-20 px-2 py-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-md md:mx-4 md:p-6 md:w-36">
          <div className="mb-2 text-xl font-bold md:text-6xl">{days}</div>
          <div className="text-xs text-gray-500 md:text-sm">Days</div>
        </div>
        <div className="w-20 px-2 py-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-md md:mx-4 md:p-6 md:w-36">
          <div className="mb-2 text-xl font-bold md:text-6xl">{hours}</div>
          <div className="text-xs text-gray-500 md:text-sm">Hours</div>
        </div>
        <div className="w-20 px-2 py-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-md md:mx-4 md:p-6 md:w-36">
          <div className="mb-2 text-xl font-bold md:text-6xl">{minutes}</div>
          <div className="text-xs text-gray-500 md:text-sm">Minutes</div>
        </div>
        <div className="w-20 px-2 py-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-md md:mx-4 md:p-6 md:w-36">
          <div className="mb-2 text-xl font-bold md:text-6xl">{seconds}</div>
          <div className="text-xs text-gray-500 md:text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
}
