import Socials from '../Socials';
import styles from './index.module.css';
import { ReactNode } from 'react';

const Footer = (): ReactNode => {
  return <footer className={styles.footer}>
    <div className={styles.row}></div>
    <div className={styles.row}>
      <Socials className={styles._aic} />
    </div>
  </footer>
};

export default Footer;
