import { SyntheticEvent } from 'react';

export type ButtonProps = {
  onClick?: (e: SyntheticEvent) => void;
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary' | 'menu';
  classes?: string | string[];
  role?: 'button' | 'submit' | 'reset';
};
