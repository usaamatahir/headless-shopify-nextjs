import { AppProps } from "next/app";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
