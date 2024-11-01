import Header from '@/components/ui/Header';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import ButtonToBottom from '@/components/ui/ButtonToBottom';
import Image from 'next/image';
import IconArrow from '@/components/ui/icons/IconArrow';
import Socials from '@/components/ui/Socials';

const Main = (): ReactNode => {
  return (
    <main className={styles.main}>
      <Header />
      <Image src={'/floristry/bg-main.jfif'} alt="bg" fill priority placeholder='blur' />
      <div className={styles.mainBody}>
        <Socials className={styles._fdc} />
        <div className={styles.body}>
          <div>
            <h1 className={styles.title}>{`флористика
    ${''}с душой`}</h1>
          </div>
          <div>
            <Link href={'/'} className={styles.view}>
              смотреть работы
            </Link>
          </div>
          <div>
            <ButtonToBottom />
          </div>
        </div>
        <div className={styles.bottom}>
            смотреть каталог
            <IconArrow />
        </div>
      </div>
    </main>
  );
};

export default Main;
