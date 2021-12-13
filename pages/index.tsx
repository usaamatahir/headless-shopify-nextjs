import { FC } from "react";
import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";
import SEO from "../components/SEO";
import { getAllProducts } from "../lib/shopifyData";
import { ProductsList } from "../types/Query";

export interface HomePageProps {
  products: ProductsList[];
}

const Home: FC<HomePageProps> = ({ products }) => {
  return (
    <div>
      <SEO />
      <Hero />
      <Products products={products} />
    </div>
  );
};
export default Home;
export async function getStaticProps() {
  const products = await getAllProducts(8);
  return {
    props: {
      products,
    },
  };
}
