import { ReactNode } from 'react';

const IconInst = (): ReactNode => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="24" height="24" rx="3.5" stroke="white" />
      <circle cx="12.5" cy="12.5" r="5" stroke="white" />
      <circle cx="19.5" cy="5.5" r="1.5" fill="white" />
    </svg>
  );
};

export default IconInst;
