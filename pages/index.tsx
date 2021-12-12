import { FC } from "react";
import SEO from "../components/SEO";
import { getAllProducts } from "../lib/shopifyData";
import { ProductsList } from "../types/Query";

interface HomePageProps {
  products: ProductsList[];
}

const Home: FC<HomePageProps> = ({ products }) => {
  return (
    <div>
      <SEO />
      <h1 className="text-4xl">
        Headless Shopify with Nextjs and Tailwind CSS
      </h1>
    </div>
  );
};
export default Home;
export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
}
