import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { useState, useEffect } from 'react';

import { API, APP_ID } from '@utils/const';
import { fetcher } from '@utils/fetcher';

import Card from '../Card';
import ButtonLoadMore from '@components/ui/ButtonLoadMore';

import style from './list.module.css';
import Search from '@components/ui/Search';

const PAGE_SIZE = 10;

const headers = new Headers();
headers.set('app-id', APP_ID);

const UserList = () => {
  const [listUser, setListUser] = useState<any>([]);
  const { data: fallbackData } = useSWR(API);
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `https://dummyapi.io/data/v1/user?page=${index + 1}&limit=${PAGE_SIZE}`,
    (url) => fetcher(url, { headers }),
    {
      revalidateOnFocus: false,
    }
  );

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isReachingEnd = size === 9;
  useEffect(() => {
    if (data) {
      const normalizeArr = [];
      data.map((itme) => {
        normalizeArr.push(itme.data);
      });

      const users = data ? normalizeArr.flat() : [];
      setListUser(users);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const searchResult = listUser
      .filter((item) => {
        const name = item.firstName.toLowerCase();
        return name.includes(value.toLocaleLowerCase());
      })
      .flat();

    const normalizeArr = [];
    data.map((itme) => {
      normalizeArr.push(itme.data);
    });

    const users = data ? normalizeArr.flat() : [];

    const results = searchResult.length ? searchResult : users;
    setListUser(results);
    if (value === '') {
      setListUser(users);
    }
  };

  if (!data) {
    // Take the pre-rendering data
    return (
      <>
        <Search handleChange={handleChange} />
        <div className={style.container}>
          {fallbackData.data.map((user) => {
            return (
              <Card
                key={user.id}
                id={user.id}
                name={user.firstName}
                lastName={user.lastName}
                photo={user.picture}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <ButtonLoadMore
            size={size}
            setSize={setSize}
            isLoadingMore={isLoadingMore}
            isReachingEnd={isReachingEnd}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Search handleChange={handleChange} />
      <div className={style.container}>
        {listUser.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.firstName}
            lastName={user.lastName}
            photo={user.picture}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ButtonLoadMore
          size={size}
          setSize={setSize}
          isLoadingMore={isLoadingMore}
          isReachingEnd={isReachingEnd}
        />
      </div>
    </>
  );
};

export default UserList;
