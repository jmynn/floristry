import Catalog from '@/components/views/Catalog';
import Compositions from '@/components/views/Compositions';
import GiftCards from '@/components/views/GiftCards';
import Main from '@/components/views/Main';
import Promo from '@/components/views/Promo';
import Providers from '@/components/views/Providers';
// import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Main />
      <Catalog />
      <Promo />
      <Compositions />
      <GiftCards />
      <Providers />
    </>
  );
}
