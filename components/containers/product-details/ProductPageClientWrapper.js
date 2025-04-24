"use client";

import dynamic from "next/dynamic";
import React from "react";

const ProductPage = dynamic(() => import("./ProductPage"));

const ProductPageClientWrapper = ({ slug }) => {
  return <ProductPage slug={slug} />;
};

export default ProductPageClientWrapper;
