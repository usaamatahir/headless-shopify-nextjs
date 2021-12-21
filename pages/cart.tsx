import React, { useContext } from "react";
import { CartContext } from "../context/shopContext";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import SEO from "../components/SEO";
import Image from "next/image";

const Cart = () => {
  const { cart, checkoutUrl, removeCartItem } = useContext(CartContext);

  return (
    <div>
      <SEO title="Cart" />
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center hover:bg-gray-50 -mx-8 px-6 py-5"
              >
                <div className="flex w-2/5">
                  <div className="relative w-28 h-28 object-contain rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <button
                      onClick={() => removeCartItem(item.id)}
                      className="bg-gray-800 px-3 py-2 rounded-md text-white text-sm hover:bg-gray-900"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <label>
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      defaultValue={item.variantQuantity}
                    />
                  </label>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $400.00
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $400.00
                </span>
              </div>
            ))}

            <a className="flex font-semibold text-indigo-600 text-sm mt-10">
              <ArrowNarrowLeftIcon className="w-4 object-contain mr-2" />
              Continue Shopping
            </a>
          </div>
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <a
                href={checkoutUrl}
                className="bg-gray-800 rounded-md font-semibold hover:bg-gray-900 py-3 text-sm text-white uppercase w-full px-5"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
