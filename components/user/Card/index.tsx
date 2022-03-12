import Image from 'next/image';
import Link from 'next/link';

import { shimmer } from '@utils/shimmer';
import { toBase64 } from '@utils/toBase64';

interface CardProps {
  id: string;
  name: string;
  lastName: string;
  photo: string;
}

const Card = ({ id, name, lastName, photo }: CardProps) => {
  return (
    <Link href={`/user/${id}`}>
      <a className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full block ">
        <Image
          alt={name}
          height={40}
          width={40}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(40, 40))}`}
          src={photo}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold text-left mt-2">{name}</h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce, ligula
          curabitur ullamcorper.
        </p>
      </a>
    </Link>
  );
};

export default Card;
