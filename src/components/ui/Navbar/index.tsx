import navLinks from '@/data/info';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Link from 'next/link';

const Navbar = (): ReactNode => {
  return (
    <nav className={styles.nav}>
      {navLinks.map((link, i) => (
        <Link href={link.href} key={`${link.href}-${i}`} className={styles.link}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
