import Services from '@/components/ui/Services';
import styles from './index.module.css';
import { ReactNode } from 'react';
import SubHeader from '@/components/ui/SubHeader';

const Catalog = (): ReactNode => {
  return (
    <div className={styles.catalog}>
      <SubHeader>каталог услуг</SubHeader>
      <Services />
    </div>
  );
};

export default Catalog;
