import Image from 'next/image';
import styles from './index.module.css';
import { ReactNode } from 'react';
import InnerTitle from '@/components/ui/InnerTitle';
import InnerText from '@/components/ui/InnerText';
import InnerMore from '@/components/ui/InnerMore';

const Compositions = (): ReactNode => {
  return (
    <div className={styles.compositions}>
      <div className={styles.image}>
        <Image
          src={'/compositions/main.jfif'}
          alt="main compositions pic"
          width={1000}
          height={855}
          style={{
            width: '100%',
          }}
        />
      </div>
      <div className={styles.info}>
          <InnerTitle>композиции и
          шляпные коробки</InnerTitle>
          <InnerText>Композиции могут собираться в любой таре: корзинке, шляпной коробке, вазочке или декоративных ящиках. Их нет необходимости ставить в вазу, как букеты, потому что цветы питаются при помощи специальной флористической губки под названием оазис. 
          Композиции очень удобные для подарка, или оформления мероприятия.</InnerText>
          <InnerMore href='/'>заказать</InnerMore>
      </div>
    </div>
  );
};

export default Compositions;
