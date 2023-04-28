import { useState } from "react";
import styles from "./BuyerCard.module.css";

export default function BuyerCard({
  id,
  description,
  estateType,
  price,
  size,
  date,
}) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <article className={styles.article}>
        <div className={styles.idContainer}>
          <p className={styles.id}>
            ID: <span>{id}</span>
          </p>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={checked}
              name="buyerID"
              value={id}
              onChange={handleCheckboxChange}
            />
            <span className={styles.checkbox} />
          </label>
        </div>

        <p className={styles.description}>{description}</p>
        <div>
          <p>ESTATE TYPE</p>
          <p>{estateType}</p>
        </div>
        <div>
          <p>MAX PRICE</p>
          <p>{price}</p>
        </div>
        <div>
          <p>MIN SIZE</p>
          <p>{size}</p>
        </div>
        <div>
          <p>TAKEOVER DATE</p>
          <p>{date}</p>
        </div>
      </article>
    </>
  );
}
