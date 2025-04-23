

import { notFound } from "next/navigation";
import { productData } from "../../utils/constant";
import ProductPageClientWrapper from "./ProductPageClientWrapper";

export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}
 function ProductPageWrapper({ params }) {
  const { slug } = params;

  if (!productData[slug]) {
    notFound();
    return null;
  }

  return <ProductPageClientWrapper slug={slug} />;
}
export default ProductPageWrapper;
