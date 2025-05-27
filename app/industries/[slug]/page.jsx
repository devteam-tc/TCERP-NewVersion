// This is a SERVER component
import dynamic from 'next/dynamic';

const IndustryClientPage = dynamic(() => import('../../../components/containers/industry-details/IndustryClientPage'));

// Static list of industry slugs
const industrySlugs = [
  "agriculture-industry",
  "apparel-erp-software",
  "automotive-erp-software",
  "food-and-beverage-erp",
  "chemical-erp-software",
  "school-management-system",
  "solar-erp-software",
  "electronics-manufacturing-erp",
  "fmcg-erp-software",
  "food-industry",
  "furniture-manufacturing-erp",
  "garment-erp-software",
  "hydraulic-erp-software",
  "jewellery-erp-software",
  "leather-erp-software",
  "logistics-erp-software",
  "medicalequipmentmanufacturing-industry",
  "wood-manufacturing-erp",
  "wholesale-distribution-software",
  "metal-fabrication-erp",
  "microfinance-software",
  "oilandgas-industry",
  "packaging-management-software",
  "paper-industry",
  "plastic-erp-software",
  "pharma-erp-software",
  "publishing-erp-software",
  "printing-erp-software",
  "pre-engineering-erp",
  "rubber-manufacturing-erp",
  "restaurant-industry",
  "retail-erp-software",
  "steel-manufacturing-erp",
  "telecom-erp-software",
  "textile-erp-software",
  "sign-manufacturing-erp",
  "foundry-erp-solution",
  "construction-erp-software",
];

// Generate static paths
export async function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

const IndustryPage = ({ params }) => {
  return <IndustryClientPage slug={params.slug} />;
};

export default IndustryPage;
