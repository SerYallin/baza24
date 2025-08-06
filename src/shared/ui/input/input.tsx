import clsx from 'clsx';
import { ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TInputProps } from './types';
import styles from './input.module.scss';

export const Input: React.FC<TInputProps> = ({
  label,
  value,
  placeholder,
  setValue,
  notice,
  error,
  required,
  type,
}) => {
  const id = uuidv4();
  return (
    <div
      className={clsx(styles.holder, {
        [styles.hasError]: error && error.length > 0,
      })}
    >
      <label htmlFor={id}>
        {label}
        {required && <sup>*</sup>}
      </label>
      <input
        id={id}
        type={type || 'text'}
        value={value}
        required={required || false}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (setValue) {
            setValue(e.target.value);
          }
        }}
      />
      {(error || notice) && (
        <div className={styles.message}>{error || notice}</div>
      )}
    </div>
  );
};
