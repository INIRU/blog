import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { connectDB } from '@/modules/database';
import { MongoDBAdapter } from '@auth/mongodb-adapter';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(connectDB, {
    databaseName: 'secret',
  }),
};
export default NextAuth(authOptions);
