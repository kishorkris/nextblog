import Router from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
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
          <Spinner loading={loading}></Spinner>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </>
  );
}
