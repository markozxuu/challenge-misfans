import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { GITHUB_ID, GTIHUB_SECRET } from '@utils/const';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GTIHUB_SECRET,
    }),
  ],
});
