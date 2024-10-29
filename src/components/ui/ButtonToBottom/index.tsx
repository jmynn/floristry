'use client';
import { ReactNode } from 'react';
import styles from './index.module.css';

const ButtonToBottom = (): ReactNode => {
  return (
    <button
      className={styles.btn}
      onClick={() =>
        window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' })
      }
    ></button>
  );
};

export default ButtonToBottom;
