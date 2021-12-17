import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import SEO from "../../components/SEO";
import { CartContext } from "../../context/shopContext";
import { getProductByHandle, recursiveCatalog } from "../../lib/shopifyData";
import { Product, Variant } from "../../types/Query";

interface ProductProps {
  product: Product;
}
const Product: FC<ProductProps> = ({ product }) => {
  const { addToCart, cartOpen } = useContext(CartContext);
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
      <SEO title={product.title} />
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
              {product.options.length >= 1 && (
                <div className="flex flex-col items-start">
                  <span className="mr-3 mb-3 font-bold text-gray-900">
                    Variants
                  </span>
                  <div className="flex items-center justify-between">
                    {product.options.map(({ id, name, values }, index) => (
                      <fieldset className="mt-3" key={index}>
                        <legend className="text-xl font-semibold">
                          {name}
                        </legend>
                        <div className="inline-flex items-center flex-wrap">
                          {values.map((value) => {
                            const id = `option-${name}-${value}`;
                            const checked = selectedOptions[name] === value;

                            return (
                              <label key={id} htmlFor={id}>
                                <input
                                  className="sr-only"
                                  type="radio"
                                  id={id}
                                  name={`option-${name}`}
                                  value={value}
                                  checked={checked}
                                  onChange={() => {
                                    setOptions(name, value);
                                  }}
                                />
                                <div
                                  className={`p-2 mt-3 text-lg rounded-full block cursor-pointer mr-3 ${
                                    checked
                                      ? "text-white bg-gray-900"
                                      : "text-gray-900 bg-gray-200"
                                  }`}
                                >
                                  <span className="px-2">{value}</span>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>
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
                disabled={cartOpen}
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
