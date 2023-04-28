import styles from "./DashboardCard.module.css";
import Mailto from "./Mailto";
import Tel from "./Tel";
import DateComponent from "./Date";
import Button from "@/components/Button";

export default function DashboadCard({
  id,
  created_at = { created_at },
  zipCode,
  estateType,
  price,
  size,
  name,
  email = { email },
  phone = { phone },
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
          <DateComponent created_at={created_at} />
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
          <Mailto email={email} />
        </div>
        <div>
          <p>PHONE</p>
          <Tel phone={phone} />
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
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </article>
    </>
  );
}
