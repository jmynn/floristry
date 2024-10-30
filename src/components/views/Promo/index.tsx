import styles from './index.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import InnerTitle from '@/components/ui/InnerTitle';
import InnerText from '@/components/ui/InnerText';
import InnerMore from '@/components/ui/InnerMore';

const Promo = (): ReactNode => {
  return (
    <div className={styles.promo}>
      <div className={styles.info}>
        <InnerTitle>Акционные предложения</InnerTitle>
        <InnerText>При заказе свадебного предоставляется скидка на букет невесты и
        бутоньерку в размере 30%</InnerText>
        <InnerMore href='/'>заказать оформление</InnerMore>
      </div>
      <div className={styles.image}>
        <Image
          src={'/promo/акц.jfif'}
          alt="promo pic"
          width={697}
          height={410}
          style={{
            width: '100%'           
          }}
        />
      </div>
    </div>
  );
};

export default Promo;
