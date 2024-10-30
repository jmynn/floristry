import services from '@/data/services';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Service from '../Service';

const Services = (): ReactNode => {
  return (
    <div className={styles.services}>
      <div className={styles.column}>
        <Service {...{ ...services[0] }} className={styles._pic_1} />
        <Service {...{ ...services[4] }} className={styles._pic_5}/>
      </div>
      <div className={styles.column}>
        <Service {...{ ...services[1] }} className={styles._pic_2}/>
      </div>
      <div className={styles.column}>
        <Service {...{ ...services[2] }} className={styles._pic_3}/>
        <Service {...{ ...services[5] }} className={styles._pic_6} />
      </div>
      <div className={styles.column}>
        <Service {...{ ...services[3] }} className={styles._pic_4}/>
        <Service {...{ ...services[6] }} className={styles._pic_7}/>
      </div>
    </div>
  );
};

export default Services;
