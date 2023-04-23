// import styles from "../pages/Home.module.css";
import styles from "./BuyerCard.module.css";

export default function BuyerCard({ id, onChange, description, estateType, price, size, date }) {
    return (
      <>
      <article className={styles.article}>
        <div className={styles.idContainer}>
          <p className={styles.id}>id<span>{id}</span></p>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" onChange={onChange} />
            <span className={styles.checkbox} />
          </label>
        </div>

        <p className={styles.description}>{description}</p>
        <div><p>ESTATE TYPE</p><p>{estateType}</p></div>
        <div><p>MAX PRICE</p><p>{price}</p></div>
        <div><p>MIN SIZE</p><p>{size}</p></div>
        <div><p>TAKEOVER DATE</p><p>{date}</p></div>
      </article>
      </>
    );
  }