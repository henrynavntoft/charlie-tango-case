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
    <label htmlFor={id} className={styles.label}>
      {label}
      <br />
      <span>{description}</span>
      <br />
      <div style={{ display: "inline-flex", alignItems: "center" }}>
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
        {/* {suffix && <span style={{ marginLeft: "5px" }}>{suffix}</span>} */}
      </div>
    </label>
  );
}
