// This is a SERVER component
import { notFound } from 'next/navigation';
import IndustryPageClient from './IndustryPageClient';

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
  "pre-engineering-industry",
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

// Add metadata generation
export async function generateMetadata({ params }) {
  try {
    const data = await import(`../../../data/industries/${params.slug}.json`);
    return {
      title: `${data.default.title} - Tech Cloud ERP`,
      description: data.default.description,
    };
  } catch (error) {
    return {
      title: 'Industry Not Found - Tech Cloud ERP',
      description: 'The requested industry page could not be found.',
    };
  }
}

// Force static rendering
export const dynamic = 'force-static';
export const revalidate = false;

export default async function IndustryPage({ params }) {
  try {
    const data = await import(`../../../data/industries/${params.slug}.json`);
    const industryData = data.default;

    if (!industryData) {
      throw new Error('No data found');
    }

    return <IndustryPageClient industryData={industryData} />;
  } catch (error) {
    console.error('Error loading industry data:', error);
    notFound();
  }
}
