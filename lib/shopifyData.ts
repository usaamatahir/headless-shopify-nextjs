import {
  createCheckoutResponse,
  LineItem,
  updateCheckoutResponse,
} from "./../types/Query";
import { allProductsResponse, productByHandleResponse } from "../types/Query";

const domain = process.env.NEXT_PUBLIC_STORE_DOMAIN_NAME;
const accessToken = process.env.NEXT_PUBLIC_STORE_ACCESS_TOKEN;
async function ShopifyData(query: string) {
  const URL = `https://${domain}/api/2021-10/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": accessToken,
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(URL, options).then((res) => res.json());
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(
      "There was an error fetching the data from Shopify. Please try again later."
    );
  }
}

// Get all products from Shopify
export async function getAllProducts(quantity: number) {
  const query = `{
        products(first: ${quantity ?? 25}) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 5) {
                edges {
                  node {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
      }
      `;

  const response: allProductsResponse = await ShopifyData(query);

  return response.data.products.edges ?? [];
}

// Get a product by url
export async function getProductByHandle(handle: string) {
  const query = `{
        product(handle: "${handle}") {
          id
          title
          handle
          description
          images(first: 5) {
            edges {
              node {
                src
                altText
              }
            }
          }
          options {
            name
            values
            id
          }
          variants(first: 25) {
            edges {
              node {
                selectedOptions {
                  name
                  value
                }
                image {
                  originalSrc
                  altText
                }
                title
                id
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }`;

  const response: productByHandleResponse = await ShopifyData(query);
  return response.data.product ?? null;
}

// Create a checkout
export async function createCheckout(id: string, quantity: number) {
  const query = `mutation {
    checkoutCreate(input: {
      lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
    }) {
      checkout {
        id
        webUrl
      }
    }
  }`;

  const response: createCheckoutResponse = await ShopifyData(query);
  return response.data.checkoutCreate.checkout ?? null;
}

// Update a checkout
export async function updateCheckout(id: string, lineItems: LineItem[]) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
        variantId: "${item.id}",
        quantity:  ${item.variantQuantity}
      }`;
  });

  const query = `
    mutation {
      checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }`;

  const response: updateCheckoutResponse = await ShopifyData(query);

  return response.data.checkoutLineItemsReplace.checkout ?? null;
}

export async function recursiveCatalog(cursor = "", initialRequest = true) {
  let data;

  if (cursor !== "") {
    const query = `{
      products(after: "${cursor}", first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
      products(first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    `;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}
