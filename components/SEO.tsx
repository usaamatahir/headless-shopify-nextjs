import Head from "next/head";

export default function SEO({ title }: { title: string }) {
  return (
    <Head>
      <html lang="en" />
      <title>{title} | Headless Shopify</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
      <meta
        name="description"
        content="Headless Shopify Storefront using React, React Hooks,
        Context API, Nextjs, Static Site Generation(SSG), Shopify Storefront
        API and Tailwind CSS."
      />

      <meta
        property="og:title"
        content="Headless Shopify eCommerce Storefront"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.usaamatahir.netlify.app" />

      <meta
        property="og:description"
        content="Modern Headless Shopify eCommerce Storefront focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional it includess Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more."
      />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:site_name"
        content="Modern Headless Shopify eCommerce Storefront"
      />
    </Head>
  );
}
