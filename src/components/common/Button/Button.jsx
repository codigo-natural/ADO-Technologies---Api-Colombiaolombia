import styles from './Button.module.css'

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
