import styles from './icons.module.scss';

export const IconClass = (icon: string) => {
  const className = `icon${String(icon).charAt(0).toUpperCase() + String(icon).slice(1)}`;

  return styles[className] ? `${styles.icon} ${styles[className]}` : '';
};
