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
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(1fr, 1fr)",
      }}
      htmlFor={id}
      className={styles.label}
    >
      {label}
      <div>
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
      </div>
    </label>
  );
}
