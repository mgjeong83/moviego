import { ClassValue, clsx } from 'clsx';

const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs);
};

export default cn;
