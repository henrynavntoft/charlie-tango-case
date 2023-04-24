import styles from "../pages/Home.module.css";

// In React, htmlFor is a property used to associate a <label> element with an <input> element.
// The htmlFor attribute specifies which form element a label is bound to. It's equivalent to the "for" attribute in HTML.
// The htmlFor property is used instead of the for attribute in JSX because for is a reserved keyword in JavaScript.
// So instead of using for in JSX, we use htmlFor.

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
}) {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <br />
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
