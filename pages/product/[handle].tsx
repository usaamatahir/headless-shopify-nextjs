import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/shopContext";
import { getProductByHandle, recursiveCatalog } from "../../lib/shopifyData";
import { Product, Variant } from "../../types/Query";

interface ProductProps {
  product: Product;
}
const Product: FC<ProductProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [primaryImage, setPrimaryImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  useEffect(() => {
    setPrimaryImage(product.images.edges[0].node.src);
    setPrice(Number(product.variants.edges[0].node.priceV2.amount));
    setCurrency(product.variants.edges[0].node.priceV2.currencyCode);
  }, []);

  function changeVariant(variant: Variant) {
    setPrimaryImage(variant.node.image.originalSrc);
    setPrice(Number(variant.node.priceV2.amount));
    setCurrency(variant.node.priceV2.currencyCode);
  }

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);
  function setOptions(name: string, value: string) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full lg:w-4/5 h-3/4 mx-auto flex flex-wrap">
          <div className="relative w-full md:w-1/2 h-96 bg-gray-200 aspect-auto rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <Image
              src={primaryImage || product.images.edges[0].node.src}
              alt="ecommerce"
              objectFit="cover"
              layout="fill"
              priority
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              {product.variants.edges.length > 1 && (
                <div className="flex flex-col items-start">
                  <span className="mr-3">Variants</span>
                  <div className="flex items-center justify-between">
                    {product.variants.edges.map((variant, index) => (
                      <div
                        className="flex flex-col mr-2"
                        key={index}
                        onClick={() => changeVariant(variant)}
                      >
                        <span>{variant.node.title}</span>
                        <img
                          src={variant.node.image.originalSrc}
                          alt={variant.node.image.altText}
                          className="w-28 h-28 mb-2 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {currency} {price}
              </span>
              <button
                className="flex ml-auto text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded"
                onClick={() => addToCart(selectedVariant)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

export async function getStaticPaths() {
  const products = await recursiveCatalog();

  const paths = products.map((item) => {
    const handle = String(item.node.handle);

    return {
      params: {
        handle: handle,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductByHandle(params.handle);
  return {
    props: {
      product,
    },
  };
}
