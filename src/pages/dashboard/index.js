import Head from "next/head";
import { useState, useEffect } from "react";

async function fetchData() {
  const response = await fetch("/api/get-seller");
  const { data, error } = await response.json();

  if (error) throw error;
  return data;
}

// async function to make DELETE request to the API route
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

  // handleDelete function that calls deleteData and updates state
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
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id}, <strong>Created at:</strong>{" "}
              {item.created_at}, <strong>Zip Code:</strong> {item.zipCode},{" "}
              <strong>Estate Type:</strong> {item.estateType},{" "}
              <strong>Price:</strong> {item.price}, <strong>Size:</strong>{" "}
              {item.size}, <strong>Buyer ID:</strong> {item.buyerID.join(", ")},{" "}
              <strong>Name:</strong> {item.name}, <strong>Email:</strong>{" "}
              {item.email}, <strong>Phone:</strong> {item.phone},{" "}
              <strong>Allow Contact:</strong> {item.allowContact ? "Yes" : "No"}
              <br></br>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
