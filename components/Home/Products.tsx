import { FC } from "react";
import Link from "next/link";
import { HomePageProps } from "../../pages";
import Image from "next/image";

const Products: FC<HomePageProps> = ({ products }) => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          New Collections
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.node.id} className="group relative">
              <div className="relative w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80 ">
                <Image
                  src={product.node.images.edges[0].node.src}
                  alt={product.node.images.edges[0].node.altText}
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                  priority
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    <Link href={`/product/${product.node.handle}`}>
                      <a href={`/product/${product.node.handle}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.node.title}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.node.priceRange.minVariantPrice.currencyCode}{" "}
                  {Number(product.node.priceRange.minVariantPrice.amount)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
