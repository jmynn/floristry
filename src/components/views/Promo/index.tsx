import InnerBlock from '@/components/ui/InnerBlock';
import { ReactNode } from 'react';
import styles from './index.module.css';

const Promo = (): ReactNode => {
  return (
    <InnerBlock
      image={{ src: '/floristry/promo/акц.jfif', height: 410, width: 697 }}
      innerInfo={{
        title: 'Акционные предложения',
        text: 'При заказе свадебного предоставляется скидка на букет невесты и бутоньерку в размере 30%',
        moreText: 'заказать оформление'
      }}
      className={styles.promo}
      isReverse
    />
  );
};

export default Promo;
