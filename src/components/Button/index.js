import styles from "./Button.module.css"; // You can create a separate CSS file to style your button

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
