import Catalog from '@/components/views/Catalog';
import Main from '@/components/views/Main';
import Promo from '@/components/views/Promo';
// import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Main />
      <Catalog />
      <Promo />
    </>
  );
}
