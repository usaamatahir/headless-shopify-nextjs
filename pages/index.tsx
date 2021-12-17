import { FC } from "react";
import Hero from "../components/Home/Hero";
import ProductsList from "../components/Home/Products";
import SEO from "../components/SEO";
import { getAllProducts } from "../lib/shopifyData";
import { IProductsList } from "../types/Query";

export interface HomePageProps {
  products: IProductsList[];
}

const Home: FC<HomePageProps> = ({ products }) => {
  return (
    <div>
      <SEO title="Home" />
      <Hero />
      <ProductsList products={products} />
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
