import styles from "./Button.module.css"; 

const Button = ({
  onClick,
  children,
  type = "",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
