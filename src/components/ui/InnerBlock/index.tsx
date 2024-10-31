import Image from 'next/image';
import styles from './index.module.css';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import InnerMore from '../InnerMore';
import InnerText from '../InnerText';
import InnerTitle from '../InnerTitle';

type TypeRequireImage = {
  src: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
};
type TypeInnerInfo = Record<'text' | 'title' | 'moreText', string>;
type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  children?: ReactNode;
  isReverse?: boolean;
  image: TypeRequireImage;
  innerInfo: TypeInnerInfo;
};

const InnerBlock: FunctionComponent<Props> = ({
  children,
  image,
  className,
  isReverse,
  innerInfo
}): ReactNode => {
  return (
    <div
      className={`${styles.block} ${className} ${isReverse ? styles._reverse : ''}`}
    >
      <div className={styles.image}>
        <Image alt="img in block" {...{ ...image }} />
      </div>
      <div className={styles.info}>
        <InnerTitle>{innerInfo.title}</InnerTitle>
        <InnerText>{innerInfo.text}</InnerText>
        <InnerMore href="/">{innerInfo.moreText}</InnerMore>
        {children}
      </div>
    </div>
  );
};

export default InnerBlock;
