import style from '@/css/Navbar.module.css';

import Skeleton from '../Skeleton/Skeleton';

export default async function NavbarLogoLoding() {
  return (
    <div className={style.logoContainer}>
      <Skeleton ch={[2.25]} image={true} />
      <Skeleton ch={[10]} />
    </div>
  );
}
