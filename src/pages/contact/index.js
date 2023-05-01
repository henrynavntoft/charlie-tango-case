import Head from "next/head";
import { useRouter } from "next/router";
import MyInput from "@/components/MyInput";
import MyInputCheckbox from "../../components/MyInputCheckbox";
import styles from "../Home.module.css";
import { useRef, useState } from "react";
import Button from "@/components/Button";

export default function Contact() {
  const router = useRouter();
  const { query } = useRouter();
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");
  const [allowContact, setAllowContact] = useState(false);
  const formEl = useRef(null);

  const handleSellerNameChange = (event) => {
    setSellerName(event.target.value);
  };

  const handleSellerEmailChange = (event) => {
    setSellerEmail(event.target.value);
  };

  const handleSellerPhoneChange = (event) => {
    setSellerPhone(event.target.value);
  };

  const handleAllowContactChange = (event) => {
    setAllowContact(event.target.checked);
    console.log(event.target.checked);
  };

  function submitted(e) {
    e.preventDefault();
    console.log("DEFAULT PREVENTED");
    const payload = {
      zipCode: query.zipCode,
      estateType: query.estateType,
      price: query.price,
      size: query.size,
      buyerID: Array.isArray(query.buyerID) ? query.buyerID : [query.buyerID],
      name: sellerName,
      email: sellerEmail,
      phone: sellerPhone,
      allowContact: allowContact,
    };
    fetch("/api/add-seller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/thanks");
      });
  }

  const handleDeleteBuyer = (index) => {
    const currentBuyerIDs = Array.isArray(query.buyerID)
      ? query.buyerID
      : [query.buyerID];
    const newBuyerIDList = [...currentBuyerIDs];
    newBuyerIDList.splice(index, 1);

    const newQuery = { ...router.query, buyerID: newBuyerIDList };
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  return (
    <>
      <Head>
        <title>Find | EDC</title>
      </Head>
      <h1 className={styles.headline}>
        Contact <span> potential </span> buyers
      </h1>
      <div className="wrapper">
        <form ref={formEl} onSubmit={submitted} className={styles.form}>
          <div className={styles.potentialBuyersWrapper}>
            {query.buyerID &&
              (Array.isArray(query.buyerID)
                ? query.buyerID
                : [query.buyerID]
              ).map((id, index) => (
                <div key={id}>
                  <span>ID: {id}</span>
                  <button onClick={() => handleDeleteBuyer(index)}>X</button>
                </div>
              ))}
          </div>
          <fieldset>
            <MyInput
              label="Full Name"
              description="Please enter your full name"
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
              description="Please enter your email address"
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
              description="Please enter your phone number"
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              enterKeyHint="next"
              value={sellerPhone}
              onChange={handleSellerPhoneChange}
              required
            />

            <MyInputCheckbox
              label="Yes please, EDC may contact me."
              id="allowContact"
              name="allowContact"
              type="checkbox"
              value={allowContact}
              onChange={handleAllowContactChange}
            />

            <Button type="submit"> Submit</Button>
          </fieldset>
        </form>
        {/* <pre>{JSON.stringify(query, null, 2)}</pre> */}
      </div>
    </>
  );
}
