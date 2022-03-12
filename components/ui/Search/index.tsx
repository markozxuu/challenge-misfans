import cx from 'clsx';

import SearchIcon from '@components/icons/Search';

import s from './search.module.css';

interface SearchProps {
  handleChange: any;
}

const Search = ({ handleChange }: SearchProps) => {
  return (
    <div className={s.container}>
      <input
        onChange={handleChange}
        aria-label="Search user"
        type="text"
        placeholder="Search users..."
        className={cx(
          s.searchInput,
          'bg-white dark:bg-[#222222] border border-[#eaeaea] dark:border-[#333] dark:focus:border-[#888] focus:border-black'
        )}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
