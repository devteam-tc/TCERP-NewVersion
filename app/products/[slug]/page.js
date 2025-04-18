
// import { notFound } from "next/navigation";
// import ProductPage from "./ProductPage"; // Adjust the path as needed
// import { productData } from "../../utils/constant";
// import metaInfo from "../../utils/metaInfo.json";

// export function generateStaticParams() {
//   return Object.keys(productData).map((slug) => ({ slug }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = params;

//   // Find metadata from metaInfo.json
//   const metadata = metaInfo.products[slug];

//   return metadata
//     ? {
//         title: metadata.title,
//         description: metadata.description,
//         keywords: metadata.keywords,
//       }
//     : {
//         title: "Default Title",
//         description: "Default Description",
//         keywords: "default, keywords",
//       };
// }


// export default function ProductPageWrapper({ params }) {
//   const { slug } = params;



//   // Check if productData exists for the given slug
//   if (!productData[slug]) {
//     notFound(); // Redirects to `app/not-found.js`
//   }

//   return <ProductPage slug={slug} />;
// }

import { notFound } from "next/navigation";
import { productData } from "../../../data/productsData";
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
