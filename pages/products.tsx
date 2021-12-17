import React, { FC } from "react";
import { HomePageProps } from ".";
import ProductsList from "../components/Home/Products";
import SEO from "../components/SEO";
import { getAllProducts } from "../lib/shopifyData";

const Products: FC<HomePageProps> = ({ products }) => {
  return (
    <div>
      <SEO title="Products" />
      <ProductsList products={products} />
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
}
