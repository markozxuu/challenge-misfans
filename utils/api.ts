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
