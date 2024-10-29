import Header from '@/components/ui/Header';
import styles from './index.module.css';
import { ReactNode } from 'react';
import IconInst from '@/components/ui/icons/IconInst';
import IconFb from '@/components/ui/icons/IconFb';
import IconWhatsapp from '@/components/ui/icons/IconWhatsapp';
import IconVk from '@/components/ui/icons/IconVk';
import Link from 'next/link';
import ButtonToBottom from '@/components/ui/ButtonToBottom';
import Image from 'next/image';
import IconArrow from '@/components/ui/icons/IconArrow';

const Main = (): ReactNode => {
  return (
    <main className={styles.main}>
      <Header />
      <Image src={'/bg-main.jfif'} alt="bg" fill priority />
      <div className={styles.mainBody}>
        <div className={styles.socials}>
          <IconInst />
          <IconFb />
          <IconWhatsapp />
          <IconVk />
        </div>
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
