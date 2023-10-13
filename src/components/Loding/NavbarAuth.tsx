import style from '@/css/Navbar.module.css';

import Skeleton from '../Skeleton/Skeleton';

export default async function NavbarAuthLoding() {
  return (
    <div className={style.authContainer}>
      <Skeleton ch={[2.25]} image={true} />
    </div>
  );
}
