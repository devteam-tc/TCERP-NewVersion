"use client";

import dynamic from "next/dynamic";
import React from "react";

const ProductPage = dynamic(() => import("./ModulePage"));

const ModulePageClientWrapper = ({ slug }) => {
  return <ProductPage slug={slug} />;
};

export default ModulePageClientWrapper;
