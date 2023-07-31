import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetComponent() {
  return (
    <Helmet>
      {/* Title */}
      <title>Reborn Gadgets - Buy Used Laptops and Gadgets at Unbeatable Prices</title>
      <link rel="icon" type="image/svg+xml" href="./assets/favicon.ico" />

      {/* Meta Tags */}
      <meta name="description" content="Welcome to Reborn Gadgets, your one-stop shop for high-quality used laptops and gadgets in unbeatable condition and prices. Shop now and find the perfect device for your needs!" />
      <meta name="keywords" content="Reborn Gadgets, used laptops, used gadgets, unbeatable prices, online store, laptops, gadgets" />
      <meta name="author" content="Your Name or Company Name" />

      {/* Open Graph (OG) Meta Tags */}
      <meta property="og:title" content="Reborn Gadgets - Buy Used Laptops and Gadgets at Unbeatable Prices" />
      <meta property="og:description" content="Welcome to Reborn Gadgets, your one-stop shop for high-quality used laptops and gadgets in unbeatable condition and prices. Shop now and find the perfect device for your needs!" />
      <meta property="og:url" content="https://reborngadgets.web.app" />
      <meta property="og:image" content="https://reborngadgets.web.app/og-image.jpg" /> {/* Replace with your own image URL */}
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Reborn Gadgets - Buy Used Laptops and Gadgets at Unbeatable Prices" />
      <meta name="twitter:description" content="Welcome to Reborn Gadgets, your one-stop shop for high-quality used laptops and gadgets in unbeatable condition and prices. Shop now and find the perfect device for your needs!" />
      <meta name="twitter:image" content="https://reborngadgets.web.app/twitter-card-image.jpg" /> {/* Replace with your own image URL */}
    </Helmet>
  );
}

export default HelmetComponent;
