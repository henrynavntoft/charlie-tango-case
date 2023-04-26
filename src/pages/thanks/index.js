import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fireworks } from "@fireworks-js/react";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100,
            },
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            background: "#fff",
          }}
        />
      </div>
    </>
  );
}
