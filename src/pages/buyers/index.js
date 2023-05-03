import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { useState, useEffect } from "react";
import BuyerCard from "@/components/BuyerCard/BuyerCard";
import { estateTypes } from "@/data/estateTypes";
import Button from "@/components/Button";

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
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>
        
       
        <form action="../contact" method="GET">
          <div className={styles.grid}>
            {buyers.map((buyer) => (
              <BuyerCard
                key={buyer.id}
                id={buyer.id}
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

          <Button type="submit">Next</Button>
        </form>
        <br></br>
        
      </div>
    </>
  );
}
