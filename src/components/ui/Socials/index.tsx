import IconFb from '../icons/IconFb';
import IconInst from '../icons/IconInst';
import IconVk from '../icons/IconVk';
import IconWhatsapp from '../icons/IconWhatsapp';
import styles from './index.module.css';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const Socials: FunctionComponent<Props> = ({ className }): ReactNode => {
  return (
    <div className={`${styles.socials} ${className}`}>
      <IconInst />
      <IconFb />
      <IconWhatsapp />
      <IconVk />
    </div>
  );
};

export default Socials;
