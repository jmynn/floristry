import Link from 'next/link';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';

const Promo = (): ReactNode => {
  return (
    <div className={styles.promo}>
      <div className={styles.info}>
        <h3 className={styles.title}>Акционные предложения</h3>
        <div className={styles.text}>
          При заказе свадебного предоставляется скидка на букет невесты и
          бутоньерку в размере 30%
        </div>
        <Link href={'/'} className={styles.view}>
          заказать оформление
        </Link>
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
