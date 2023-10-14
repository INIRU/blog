import style from '@/css/Write.module.css';

import { redirect } from 'next/navigation';

import dynamic from 'next/dynamic';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import FormLoading from '@/components/Loading/Write/FromLoading';

const Form = dynamic(() => import('@/components/Write/Form'), {
  loading: () => <FormLoading />,
});

export default async function Write() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email != 'iniru@kakao.com') {
    redirect('/');
  }

  return (
    <>
      <Form />
    </>
  );
}
