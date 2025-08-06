import { FC, memo } from 'react';
import clsx from 'clsx';

import { ButtonProps } from './types';
import styles from './button.module.scss';

export const Button: FC<ButtonProps> = memo(
  ({ onClick, children, type, classes, role }) => (
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={role || 'button'}
      className={clsx(
        styles.button,
        {
          [styles.buttonPrimary]: type === 'primary',
          [styles.buttonSecondary]: type === 'secondary',
          [styles.buttonTertiary]: type === 'tertiary',
          [styles.menu]: type === 'menu',
        },
        classes
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
);
