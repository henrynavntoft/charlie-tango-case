import Head from "next/head";
import styles from "./Home.module.css";
import { estateTypes } from "../data/estateTypes";
import MyInput from "../components/MyInput";
import MyDropDown from "../components/MyDropDown";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";

export default function Home() {
  const [zipCode, setZipCode] = useState("");
  const [estateType, setEstateType] = useState(1);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleEstateTypeChange = (event) => {
    setEstateType(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/buyers",
      query: { zipCode, estateType, size, price },
    });
  };

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <div className={styles.flexbox}>
          <section className={styles.content}>
            <h1 className={styles.headline}>
              Find <span>a buyer</span> for your property
            </h1>
            <p>
              Get free access to our large buyer directory and see if there is
              interest in homes like yours in your local area.
            </p>
          </section>
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset className={styles.fieldset}>
              <MyInput
                label="Price"
                description="Please enter the amount in DKK"
                id="price"
                name="price"
                type="number"
                inputMode="numeric"
                enterKeyHint="next"
                suffix="DKK"
                value={price}
                onChange={handlePriceChange}
                required
              />
              <MyInput
                label="Size"
                description="Please enter size in m2"
                id="size"
                name="size"
                type="number"
                inputMode="decimal"
                enterKeyHint="next"
                suffix="m2"
                value={size}
                onChange={handleSizeChange}
                required
              />
              <MyInput
                label="Zip Code"
                description="Please enter Zip Code"
                id="zipcode"
                name="zipcode"
                type="number"
                inputMode="numeric"
                enterKeyHint="next"
                value={zipCode}
                onChange={handleZipCodeChange}
                required
              />
              <MyDropDown
                label="Estate Type"
                id="estatetype"
                name="estateType"
                options={estateTypes}
                value={estateType}
                onChange={handleEstateTypeChange}
              />
            </fieldset>
            <Button type="submit">See Potential Buyers</Button>
          </form>
        </div>
      </div>
    </>
  );
}
