import Head from "next/head";
import { useRouter } from "next/router";
import MyInput from "@/components/MyInput";
import styles from "../Home.module.css"
import { useState } from "react";
import { estateTypes } from "@/data/estateTypes";

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
  // ID:{item.id},
  // Created at:{item.created_at} 
   //Zip Code:{item.zipCode}
  // Estate Type:{item.estateType}
  // Price:{item.price}
  // Size: {item.size} 
  //Buyer ID:{item.buyerID.join(", ")},
  //Name: {item.name}
  //Email:{item.email}
  //Phone: {item.phone}
  //Allow Contact: {item.allowContact ? "Yes" : "No"}
  function submitted(e){
     e.preventDefault()
     console.log("PREVENTED");
     const payload ={
      zipCode: "24009",
      estateType:"",
      price:"",
      size:"",
      buyer:"",
      //or
      //query: query
      sellerName:"",
      sellerEmail:"",
      sellerPhone:"", 
     }
     fetch("/dashboard/index.js",{
          method:"POST",
          HEADERS:{
            "Content-Type":"application/json",
            apikey : process.env.ANON_KEY,
            Prefer: "return=representation",
          }
     }
     )
  }
  return (
    <>
      <Head>
        <title>Find   | EDC</title>
      </Head>
      <div className="wrapper">
      <form method="" onSubmit={submitted} className={styles.form}>
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
