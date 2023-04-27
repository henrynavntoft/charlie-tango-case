import Head from "next/head";
import { useState, useEffect } from "react";
import DashboadCard from "@/components/DashboardCard/DashboardCard";

async function fetchData() {
  const response = await fetch("/api/get-seller");
  const { data, error } = await response.json();

  if (error) throw error;
  return data;
}

async function deleteData(id) {
  const response = await fetch(`/api/delete-seller?id=${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error deleting person");
  }

  return await response.json();
}

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAndSetData() {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchAndSetData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting person:", error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1>Dashboard</h1>
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <DashboadCard
                id={item.id}
                created_at={item.created_at}
                zipCode={item.zipCode}
                estateType={item.estateType}
                price={item.price}
                size={item.size}
                name={item.name}
                email={item.email}
                phone={item.phone}
                allowContact={item.allowContact}
                buyerID={item.buyerID}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
