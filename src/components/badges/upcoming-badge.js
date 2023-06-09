import CalendarIcon from '@/components/icons/calendar-icon';

export default function UpcomingBadge() {
  return (
    <span className="bg-green-50 text-green-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800">
      <CalendarIcon />
      Upcoming
    </span>
  );
}
