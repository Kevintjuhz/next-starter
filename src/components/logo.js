import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center h-20 pl-4 ml-0 md:ml-6 grow basis-0 md:pl-0 md:h-auto"
    >
      <Image src="/logo.svg" alt="logo" width={165} height={50} />
    </Link>
  );
}
