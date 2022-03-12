import cx from 'clsx';

import Spinner from '@components/icons/Spinner';

interface ButtonProps {
  isLoadingMore: boolean;
  isReachingEnd: boolean;
  size: number;
  setSize: any;
}

const ButtonLoadMore = ({
  isLoadingMore,
  isReachingEnd,
  size,
  setSize,
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={isLoadingMore || isReachingEnd}
      onClick={() => setSize(size + 1)}
      aria-label="Load more"
      className={cx(
        'rounded-xl w-48 mx-auto mt-10 bg-gradient-to-r p-[4px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
        {
          'transform hover:scale-[1.01] transition-all':
            isReachingEnd === false,
        },
        {
          'cursor-not-allowed opacity-40': isReachingEnd,
        }
      )}
    >
      <div className="flex justify-center items-center bg-white dark:bg-[#131415] rounded-lg p-2 font-medium">
        {isLoadingMore ? (
          <>
            <span className="sr-only">Spinner</span>
            <Spinner />
            <p>Loading...</p>
          </>
        ) : size === 9 ? (
          'No more users'
        ) : (
          'Load more'
        )}
      </div>
    </button>
  );
};

export default ButtonLoadMore;
