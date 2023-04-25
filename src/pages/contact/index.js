import Head from "next/head";
import { useRouter } from "next/router";
import MyInput from "@/components/MyInput";
import styles from "../Home.module.css"
import { useState } from "react";

export default function Contact() {
  const { query } = useRouter();
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");

  const handleSellerNameChange = (event) => {
    setSellerName(event.target.value);
    console.log(event.target.value);
  };

  const handleSellerEmailChange = (event) => {
    setSellerEmail(event.target.value);
  };

  const handleSellerPhoneChange = (event) => {
    setSellerPhone(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
      <form method="" className={styles.form}>
            <fieldset>
            <MyInput
              label="Name"
              id="sellername"
              name="sellername"
              type="text"
              inputMode="text"
              enterKeyHint="next"
              value={sellerName}
              onChange={handleSellerNameChange}
              required
             />      
             <MyInput
                label="Email"
                id="email"
                name="email"
                type="email"
                inputMode="text"
                enterKeyHint="next"
                value={sellerEmail}
                onChange={handleSellerEmailChange}
                required
              />

             <MyInput
              label="Phone"
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              enterKeyHint="next"
              value={sellerPhone}
              onChange={handleSellerPhoneChange}
              required
             /> 
              <label>lorem ipsum
              <input
              type="checkbox"
              name='allowContact'
              value=""
            /> </label>
              <button >submit</button>
          </fieldset>
              </form>
        <pre>{JSON.stringify(query, null, 2)}</pre>
      </div>
     
    </>
  );
}
