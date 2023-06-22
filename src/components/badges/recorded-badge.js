import classNames from 'classnames';
import CameraIcon from '@/components/icons/camera-icon';

export default function RecordedBadge({ size = 'sm' }) {
  return (
    <span
      className={classNames(
        size === 'lg' ? 'text-sm' : 'text-xs',
        'bg-violet-50 text-violet-600 font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-violet-200 dark:text-violet-800'
      )}
    >
      <CameraIcon />
      Recorded
    </span>
  );
}
