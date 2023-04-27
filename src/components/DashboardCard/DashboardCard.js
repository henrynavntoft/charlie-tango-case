import styles from "./DashboardCard.module.css";

export default function DashboadCard({
  id,
  created_at,
  zipCode,
  estateType,
  price,
  size,
  name,
  email,
  phone,
  allowContact,
  buyerID,
  onDelete,
}) {
  return (
    <>
      <article className={styles.article}>
        <div>
          <p>ID</p>
          <p>{id}</p>
        </div>
        <div>
          <p>DATE</p>
          <p>{created_at}</p>
        </div>
        <div>
          <p>ZIP CODE</p>
          <p>{zipCode}</p>
        </div>
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
          <p>NAME</p>
          <p>{name}</p>
        </div>
        <div>
          <p>EMAIL</p>
          <p>{email}</p>
        </div>
        <div>
          <p>PHONE</p>
          <p>{phone}</p>
        </div>
        <div>
          <p>ALLOW CONTACT</p>
          <p>{allowContact ? "Yes" : "No"}</p>
        </div>
        <div>
          <p>POTENTIAL BUYERS ID</p>
          <p>{buyerID.join(", ")}</p>
        </div>
        {/* Add the delete button */}
        <button onClick={() => onDelete(id)}>Delete</button>
      </article>
    </>
  );
}
