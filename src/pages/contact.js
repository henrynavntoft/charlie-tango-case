import Head from "next/head";
import { useRouter } from "next/router";


export default function Buyers() {
  const { query } = useRouter();
  

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <pre>
        {JSON.stringify(query, null, 2)}
        </pre>
            </div>
    </>
  );
}
