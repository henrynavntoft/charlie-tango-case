import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { useState, useEffect } from "react";
import BuyerCard from "@/components/BuyerCard/BuyerCard";
import { estateTypes } from "@/data/estateTypes";
import Button from "@/components/Button";

// const CustomButton = styles(Button)`
//   background-color: blue;
//   color: white;
//   font-size: 1.2rem;
//   padding: 10px 20px;
// `;


export default function Buyers() {
  const { query } = useRouter();
  const router = useRouter();
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    // Check if zipCode exists in the query
    if (query.zipCode) {
      fetch(
        `/api/find-buyers?zipCode=${query.zipCode}&estateType=${query.estateType}&size=${query.size}&price=${query.price}`
      )
        .then((res) => res.json())
        .then((data) => setBuyers(data));
    }
  }, [query]);

  function getEstateTypeName(id) {
    const estateType = estateTypes.find((type) => type.id === id);
    return estateType ? estateType.name : "Unknown";
  }

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className={`${styles.buyergrid} wrapper`}>
       <aside className={styles.aside}>
         <h1 className={styles.headline}>Potential buyers</h1>
         <p>
          Potential buyers represent a vital segment of any market, as they are
          the individuals or entities actively seeking products or services to
          fulfill their needs. These prospective customers are essential to the
          growth and success of businesses, as they demonstrate interest and
          willingness to invest in solutions that cater to their specific
          requirements.
         </p>
        </aside>
        <article>
        {/* <button onClick={() => router.back()}>Back</button> */}
        <form action="../contact" method="GET" className={styles.form}>
          <div className={styles.grid}>
            {buyers.map((buyer) => (
              <BuyerCard
                key={buyer.id}
                id={buyer.id}
                // onChange={handleChange}
                description={buyer.description}
                estateType={getEstateTypeName(buyer.estateType)}
                price={buyer.maxPrice}
                size={buyer.minSize}
                date={buyer.takeoverDate}
              />
            ))}
          </div>
          <input type="hidden" name="zipCode" value={query.zipCode} />
          <input type="hidden" name="size" value={query.size} />
          <input type="hidden" name="price" value={query.price} />
          <input type="hidden" name="estateType" value={query.estateType} />
          <Button type="submit" >Submit</Button>

        </form>
        <br></br>
        {/* <br></br>
        <div className={styles.content}>
          <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div> */}
        </article>
      </div>
    </>
  );
}
