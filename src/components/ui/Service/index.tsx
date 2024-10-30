import { TypeService } from '@/types';
import styles from './index.module.css';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = TypeService & {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const Service: FunctionComponent<Props> = ({ id, image, title, className }): ReactNode => {
  return (
    <div className={`${styles.service} ${className}`}>
      <div className={styles.image}>
        <Image
          src={image}
          alt="img service"
          width={1}
          height={1}
          style={{ height: '100%', width: '100%' }}
          sizes="100vw"
        />
        <div className={styles.overlay}>{id}</div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <Link href={'/'} className={styles.link}>
        смотреть работы
      </Link>
    </div>
  );
};

export default Service;
