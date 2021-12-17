module.exports = {
  reactStrictMode: true,
  env: {
    STORE_DOMAIN_NAME: process.env.STORE_DOMAIN_NAME,
    STORE_ACCESS_TOKEN: process.env.STORE_ACCESS_TOKEN,
  },
  images: {
    domains: ["i.ibb.co", "cdn.shopify.com"],
  },
};
