import { Fireworks } from "@fireworks-js/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ position: "relative", height: "70vh" }}>
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
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1>Thank you!</h1>
      </div>
    </div>
  );
}
