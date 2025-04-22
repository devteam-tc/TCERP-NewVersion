import { notFound } from 'next/navigation';
import ProductPage from './ProductPage';

const productSlugs = [
  'tech-cloud-erp',
  'customer-relationship-management',
  'point-of-sale',
  'trading-software',
  'Ecommerce-software',
  'hr-managament-software',
  'financial-management-systems',
  'integrated-erp-software',
  'erp-for-restaraunt',
  'erp-for-accounting-software',
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
