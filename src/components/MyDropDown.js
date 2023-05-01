import styles from "../pages/Home.module.css";

// In React, htmlFor is a property used to associate a <label> element with an <input> element.
// The htmlFor attribute specifies which form element a label is bound to. It's equivalent to the "for" attribute in HTML.
// The htmlFor property is used instead of the for attribute in JSX because for is a reserved keyword in JavaScript.
// So instead of using for in JSX, we use htmlFor.

export default function MyDropDown({
  label,
  id,
  name,
  options,
  onChange,
  estateType,
}) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
        <br />
        <span>Select an option from the dropdown menu</span>
      </label>
      <select
        id={id}
        name={name}
        onChange={onChange}
        className={`${styles.dropdown} ${styles["form-control"]}`}
        selected={estateType}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}
