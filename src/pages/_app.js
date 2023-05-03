import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    const handleRouteChangeError = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  return (
    <>
      
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
