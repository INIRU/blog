import style from '@/css/Write.module.css';

import Skeleton from '@/components/Skeleton/Skeleton';

export default function Form() {
  return (
    <form action="">
      <Skeleton _className={style.titleInput} ch={[9]} />
      <hr className={`${style.titleBar} mt-4`} />
    </form>
  );
}
