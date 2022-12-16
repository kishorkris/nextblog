import Router from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import ClipLoader from "react-spinners/ClipLoader";

export default function App({ Component, pageProps }) {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Layout>
        {loading ? (
          <ClipLoader
            color={"cyan"}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </>
  );
}
