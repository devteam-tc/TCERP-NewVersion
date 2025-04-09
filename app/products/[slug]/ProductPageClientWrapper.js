// app/products/[slug]/ProductPageClientWrapper.js
"use client";

import dynamic from "next/dynamic";
import React from "react";

const ProductPage = dynamic(() => import("./ProductPage"), {
  
  loading: () => <p>Loading...</p>,
});

const ProductPageClientWrapper = ({ slug }) => {
  return <ProductPage slug={slug} />;
};

export default ProductPageClientWrapper;
