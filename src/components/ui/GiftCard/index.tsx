'use client';
import { TypeGift } from '@/types';
import Link from 'next/link';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import IconDarkPattern from '../icons/IconDarkPattern';
import IconLightPattern from '../icons/IconLightPattern';
import Logo from '../Logo';
import styles from './index.module.css';

type Props = TypeGift;

const GiftCard: FunctionComponent<Props> = ({
  id,
  value,
  background
}): ReactNode => {
  const [localeValue, setLocaleValue] = useState<TypeGift['value'] | string>(
    value
  );

  useEffect(() => {
    setLocaleValue(() => value.toLocaleString());
  }, []);

  return (
    <div className={styles.card}>
      <div
        className={styles.top}
        style={{
          backgroundColor: background
        }}
      >
        <div className={styles.overlay}>
          <Logo />
        </div>
        <div className={styles.row}>
          <IconLightPattern />
          <div>{id}</div>
        </div>
        <div className={`${styles.row} ${styles._reverse}`}>
          <IconLightPattern />
          <div>{localeValue}</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.text}>
          Порадуйте своих близких подарочной картой на {localeValue} рублей
        </div>
        <IconDarkPattern />
        <Link href={'/'} className={styles.link}>
          получить
        </Link>
      </div>
    </div>
  );
};

export default GiftCard;
