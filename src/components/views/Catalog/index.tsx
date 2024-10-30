import Services from '@/components/ui/Services';
import styles from './index.module.css';
import { ReactNode } from 'react';

const Catalog = (): ReactNode => {
  return (
    <div className={styles.catalog}>
      <h2 className={styles.title}>каталог услуг</h2>
      <Services />
    </div>
  );
};

export default Catalog;
