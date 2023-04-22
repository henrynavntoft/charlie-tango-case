import Head from "next/head";
import styles from "./Home.module.css";
import { estateTypes } from "../data/estateTypes";
import MyInput from "../components/MyInput";
import MyDropDown from "../components/MyDropDown";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Find <span>a buyer</span> for your property
          </h1>
          <p>
            Get free access to our large buyer directory and see if there is
            interest in homes like yours in your local area.
          </p>
          <form action="/send-data-here" method="post" className={styles.form}>
            <fieldset>
              <MyInput
                label="Price"
                id="price"
                name="price"
                type="number"
                inputMode="numeric"
                enterKeyHint="next"
                required
              />
              <MyInput
                label="Size"
                id="size"
                name="size"
                type="number"
                inputMode="decimal"
                enterKeyHint="next"
                required
              />
              <MyInput
                label="Zip Code"
                id="zipcode"
                name="zipcode"
                type="number"
                inputMode="numeric"
                enterKeyHint="next"
                required
              />
              <MyDropDown
                label="Estate Type"
                id="estatetype"
                name="estateType"
                options={estateTypes}
              />
            </fieldset>
            <button type="button" className={styles.button}>
              Find potential buyers
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
