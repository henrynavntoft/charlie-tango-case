import styles from "./DashboardCard.module.css";
import Mailto from "./Mailto";
import Tel from "./Tel";
import DateComponent from "./Date";
import Button from "../Button";
import { useState } from "react";
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
  buyerID= [],
  onDelete,
}) {
  const [showBuyers, setShowBuyers] = useState(false);
  const handleShowBuyers = () => {
    setShowBuyers(true);
  };
  const handleCloseBuyers = () => {
    setShowBuyers(false);
  };
  const buyersList = ["buyerID1", "buyerID2", "buyerID3"]; // replace with actual list of buyers

  return (
    <>
      <article className={styles.article}>
        <section className={styles.id}>
            <p>ID: {id}</p>
          <button className={styles.deleteSeller} onClick={() => onDelete(id)}>
            X
          </button>
        </section>

        <section className={styles.firsthalf}>
          <h3 className={styles.fullname}>{name}</h3>
          <section className={styles.sellerInfo}>
            <DateComponent created_at={created_at}/>
            <Mailto email={email} />
            <Tel phone={phone} />
          </section>
          <section className={styles.buttons}>
           
           <Button >Contact</Button>
           
           <Button onClick={handleShowBuyers}>See Buyers</Button>
           {showBuyers && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseBuyers}>
              &times;
            </span>
            <h2>List of Buyers</h2>
            <ul>
            {buyerID.map((buyer, index) => (
                <li key={index}>{buyer}</li>
              ))}
            </ul>
          </div>
        </div>)}
           
          </section>
        </section>
        <section className={styles.secondhalf}>
        <div className={styles.propertyInfo}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.778 11.105v8.246h12.444v-8.246L12 5.332l-6.222 5.773zM4 10.422 12 3l8 7.422V21H4V10.422z"
                fill="currentColor"
              />
            </svg>
            <p>Estate type</p>
            </div>
            <p>{estateType}</p>
        </div>

        <div className={styles.propertyInfo}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.778 11.105v8.246h12.444v-8.246L12 5.332l-6.222 5.773zM4 10.422 12 3l8 7.422V21H4V10.422z"
                fill="currentColor"
              />
            </svg>
            <p>Zip Code</p>
            </div>
            <p>{zipCode}</p>
        </div>

        <div className={styles.propertyInfo}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.724 1v4.966l-3.311-.001V7.62h3.311v1.864a6.62 6.62 0 1 1-4.08 9.722H2.483l-.001-3.31H0v-4.965h2.482V9.275H0V4.31h2.482V1h13.242zm1.655 9.931a4.966 4.966 0 1 0 0 9.931 4.966 4.966 0 0 0 0-9.931zm-6.62 4.966H4.138v1.655h6.83a6.633 6.633 0 0 1-.21-1.655zm0-3.31H1.655v1.654h9.104v-1.655zm3.31-3.311H4.138v1.655H13a6.64 6.64 0 0 1 1.068-.769l.001-.886zm-3.31-3.31H1.655V7.62h9.104V5.966zm3.31-3.31H4.138V4.31h9.931V2.655z"
                fill="currentColor"
              />
            </svg>
            <p>Price</p>
            </div>
            <p>{price}</p>
        </div>

        <div className={styles.propertyInfo}>
          <div>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M397.2 128v362c0 5.6-4.5 10.2-10.2 10.2H25c-5.6 0-10.2-4.6-10.2-10.2V128c0-5.7 4.6-10.2 10.2-10.2h223.9c5.7 0 10.2 4.6 10.2 10.2s-4.6 10.2-10.2 10.2h-32.6V331c-.2 5.5-4.7 9.8-10.2 9.8-5.5 0-10-4.4-10.2-9.8v-54.8H162c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2h33.8V138.2H35.2v117.6h31.6c5.7 0 10.2 4.6 10.2 10.2s-4.6 10.2-10.2 10.2H35.2v203.6h160.5V431c0-5.7 4.6-10.2 10.2-10.2 5.7 0 10.2 4.6 10.2 10.2v48.8h160.5V276.2H285c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2h91.8V138.2h-33.6c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2H387c5.7 0 10.2 4.5 10.2 10.2zM195.8 331v-.4.4zm20.4 0v-.4.4zM396.7 22.5c0-5.7-4.6-10.2-10.2-10.2s-10.2 4.6-10.2 10.2c0 .4 0 .8.1 1.1v10.6H35.7V22.5c0-5.7-4.6-10.2-10.2-10.2s-10.2 4.6-10.2 10.2c0 .4 0 .8.1 1.1v41.6c0 .4-.1.7-.1 1.1 0 5.6 4.6 10.2 10.2 10.2s10.2-4.6 10.2-10.2V54.7h340.6v10.6c0 .4-.1.7-.1 1.1 0 5.6 4.6 10.2 10.2 10.2 5.7 0 10.2-4.6 10.2-10.2l.1-43.9zm90.9 456.8h-11.7V138.7h10.6c.4 0 .7.1 1.1.1 5.6 0 10.2-4.6 10.2-10.2 0-5.7-4.6-10.2-10.2-10.2h-43.8c-5.7 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2c.4 0 .8 0 1.1-.1h10.6v340.6h-11.7c-5.7 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2c.4 0 .8 0 1.1-.1h41.6c.4 0 .7.1 1.1.1 5.6 0 10.2-4.6 10.2-10.2s-4.6-10.2-10.2-10.2z"
              />
            </svg>
            <p>Size</p>
            </div>
            <p>{size}</p>
        </div>
        </section>
      </article>
     
    </>
  );
}
