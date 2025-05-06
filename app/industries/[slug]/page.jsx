// This is a SERVER component
// import IndustryClientPage from "./IndustryClientPage";

// This is a SERVER component
import dynamic from 'next/dynamic';

const IndustryClientPage = dynamic(() => import('../../../components/containers/industry-details/IndustryClientPage'));

// Static list of industry slugs (or fetch from Firestore)
const industrySlugs = [
  "agriculture-industry",
  "apparel-industry",
  "automotive-industry",
  "beverage-industry",
  "chemical-industry",
  "educational-institutes",
  "electrical-solar-industry",
  "electronics-industry",
  "fmcg-industry",
  "food-industry",
  "furniture-industry",
  "garment-industry",
  "hydraulic-industry",
  "jewellery-industry",
  "leather-industry",
  "logistics-industry",
  "medicalequipmentmanufacturing-industry",
  "wood-industry",
  "wholesalers-industry",
  "metal-fabrication-industry",
  "microfinance-industry",
  "oilandgas-industry",
  "packaging-industry",
  "paper-industry",
  "plastic-industry",
  "pharma-industry",
  "publishing-industry",
  "printing-industry",
  "preengineering-industry",
  "rubber-industry",
  "restaurant-industry",
  "retail-industry",
  "steel-industry",
  "telecom-industry",
  "textiles-industry",
];

// Generate static paths
export async function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

const IndustryPage = ({ params }) => {
  return <IndustryClientPage slug={params.slug} />;
};

export default IndustryPage;
