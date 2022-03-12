import { fetcher } from './fetcher';
import { APP_ID, API } from './const';

const headers = new Headers();
headers.set('app-id', APP_ID);

export const getUsers = async () => {
  const users = await fetcher(API, {
    headers,
  });
  return users;
};

export const getPaths = async () => {
  const result = await fetcher(API, {
    headers,
  });
  const paths = result.data.map((item) => {
    return {
      params: {
        slug: item.id,
      },
    };
  });
  return paths;
};

export const getUser = async (id: string) => {
  const user = await fetcher(`https://dummyapi.io/data/v1/user/${id}`, {
    headers,
  });
  return user;
};
