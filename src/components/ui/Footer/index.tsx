import { $FOOTER_LINKS } from '@/data/info';
import Socials from '../Socials';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Link from 'next/link';

const Footer = (): ReactNode => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.links}>
          {$FOOTER_LINKS.map((link, i) => (
            <Link key={`${i}-${link.href}`} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <Socials className={styles._aic} />
      </div>
    </footer>
  );
};

export default Footer;
