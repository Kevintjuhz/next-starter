import classNames from 'classnames';
import BadgeIcon from '@/components/icons/badge-icon';
import Image from 'next/image';

export default function Badge({ label, icon, iconUrl, classes }) {
  return (
    <span
      className={classNames(
        classes,
        'text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded'
      )}
    >
      {iconUrl && (
        <Image
          src={iconUrl}
          className="w-3 h-3 mr-1"
          width={12}
          height={12}
          loading="lazy"
        />
      )}

      {icon && <BadgeIcon />}
      {label}
    </span>
  );
}
