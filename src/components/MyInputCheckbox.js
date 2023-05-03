import styles from "../pages/Home.module.css";

export default function MyInput({
  label,
  id,
  name,
  type,
  inputMode,
  enterKeyHint,
  required,
  value,
  onChange,
  suffix,
  description,
}) {
  return (
    <label
      htmlFor={id}
      style={{
        display: "flex",
        gap: "2rem",
        marginBottom: "2rem",
      }}
      className={styles.label}
    >
      {label}

      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        enterKeyHint={enterKeyHint}
        required={required}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
