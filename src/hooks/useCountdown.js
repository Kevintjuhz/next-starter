import { useEffect, useState } from 'react';
import moment from 'moment';

export default function useCountdown(startDate) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTime = () => {
    const countDownDate = moment(startDate);
    const now = moment();

    const distance = moment.duration(countDownDate.diff(now), 'milliseconds');

    const days = distance.days();
    const hours = distance.hours();
    const minutes = distance.minutes();
    const seconds = distance.seconds();

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    requestAnimationFrame(updateTime);
  };

  useEffect(() => {
    requestAnimationFrame(updateTime);

    return () => {
      cancelAnimationFrame(updateTime);
    };
  }, []);

  return { days, hours, minutes, seconds };
}
