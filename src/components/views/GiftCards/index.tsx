import GiftCard from '@/components/ui/GiftCard';
import SubHeader from '@/components/ui/SubHeader';
import gifts from '@/data/gifts';
import { ReactNode } from 'react';
import styles from './index.module.css';

const GiftCards = (): ReactNode => {
  return (
    <div className={styles.gifts}>
      <SubHeader>подарочные карты</SubHeader>
      <div className={styles.cards}>
        {gifts.map((gift) => (
          <GiftCard key={gift.id} {...{ ...gift }} />
        ))}
      </div>
    </div>
  );
};

export default GiftCards;
