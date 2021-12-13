interface Images {
  node: {
    src: string;
    altText: string;
  };
}

export interface Variant {
  node: {
    selectedOptions: {
      name: string;
      value: string;
    }[];
    image: {
      originalSrc: string;
      altText: string;
    };
    title: string;
    id: string;
    priceV2: {
      amount: number;
      currencyCode: string;
    };
  };
}
export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    edges: Images[];
  };

  options: {
    id: string;
    name: string;
    value: string;
  };
  variants: {
    edges: Variant[];
  };
}

export interface ProductsList {
  node: {
    id: string;
    title: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: number;
        currencyCode: string;
      };
    };
    images: {
      edges: Images[];
    };
  };
}

type Products = {
  products: {
    edges: ProductsList[];
  };
};
export type LineItem = {
  id: string;
  variantQuantity: number;
};

export type LineItems = {
  node: {
    id: string;
    title: string;
    quantity: number;
  };
};

export type allProductsResponse = {
  data: Products;
};

export type productByHandleResponse = {
  data: {
    product: Product;
  };
};

export type createCheckoutResponse = {
  data: {
    createCheckout: {
      checkout: {
        id: string;
        webUrl: string;
      };
    };
  };
};

export type updateCheckoutResponse = {
  data: {
    checkoutLineItemsReplace: {
      checkout: {
        id: string;
        webUrl: string;
        lineItems: {
          edges: LineItems[];
        };
      };
    };
  };
};
