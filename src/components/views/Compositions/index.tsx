import InnerBlock from '@/components/ui/InnerBlock';
import compositions from '@/data/compositions';
import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './index.module.css';

const Compositions = (): ReactNode => {
  return (
    <InnerBlock
      image={{ src: '/compositions/main.jfif', height: 855, width: 1000 }}
      innerInfo={{
        title: 'композиции и шляпные коробки',
        text: `Композиции могут собираться в любой таре: корзинке, шляпной коробке, вазочке или декоративных ящиках. Их нет необходимости ставить в вазу, как букеты, потому что цветы питаются при помощи специальной флористической губки под названием оазис. 
        Композиции очень удобные для подарка, или оформления мероприятия.`,
        moreText: 'заказать'
      }}
      className={styles.compositions}
    >
      <div className={styles.other}>
        {compositions.map((composition, i) => (
          <div className={styles.composition} key={i}>
            <Image
              src={composition}
              alt="composition pic"
              width={123}
              height={123}
              style={{
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
    </InnerBlock>
  );
};

export default Compositions;
