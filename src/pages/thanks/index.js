import { Fireworks } from "@fireworks-js/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../Home.module.css";

export default function App() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(7);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 7000);

    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
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
        <h1 className={styles.headline2}>
          {" "}
          <span>Thank you!</span>
        </h1>
        <p>You will be redirected in {timeLeft}&nbsp;seconds.</p>
      </div>
    </div>
  );
}
