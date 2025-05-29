import { notFound } from 'next/navigation';
import ProductPage from '../../../components/containers/module-details/ModulePage';

const productSlugs = [
  'customer-relationship-management',
  'sales-management',
  'purchase-management',
  'inventory-management',
  'production-management',
  'job-work-management',
  'quality-control',
  'fixed-assets',
  'plant-maintenance',
  'human-resource-management',
  'finance-accounting',
  'imports-exports',
  'project-management',
  'design-management',
  'point-of-sale-management',

  
];

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export default function ProductPageWrapper({ params }) {
  const { slug } = params;

  // ✅ Use .includes() for array
  if (!productSlugs.includes(slug)) {
    notFound(); // Shows 404 page
    return null;
  }

  return <ProductPage slug={slug} />;
}
