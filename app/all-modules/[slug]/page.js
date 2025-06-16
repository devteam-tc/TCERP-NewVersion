import { notFound } from 'next/navigation';
import ModulePage from '../../../components/containers/module-details/ModulePage';


const moduleSlugs = [
  'crm',
  'sales',
  'purchase',
  'inventory',
  'production',
  'job-work',
  'qa-qc',
  'fixed-assets',
  'plant-maintenance',
  'hrms',
  'finance-accounting',
  'imports-exports',
  'project',
  'design',
  'pos',

  
];

export function generateStaticParams() {
  return moduleSlugs.map((slug) => ({ slug }));
}

export default function ModulePageClientWrapper({ params }) {
  const { slug } = params;

  // ✅ Use .includes() for array
  if (!moduleSlugs.includes(slug)) {
    notFound(); // Shows 404 page
    return null;
  }

  return <ModulePage slug={slug} />;
}
