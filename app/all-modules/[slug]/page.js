import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import PageHeader from '../../../components/layout/PageHeader';
import Footer from '../../../components/layout/footer/Footer';
import Header from '../../../components/layout/header/Header';
import CustomCursor from '../../../components/layout/CustomCursor';
import FaqSection from '../../../components/containers/modules/FaqSection';
import { FaHome } from 'react-icons/fa';
import VideoSection from '../../../components/containers/modules/VideoSection';
import CtaSection from '../../../components/containers/modules/CtaSection';
import WorkProcessSection from '../../../components/containers/modules/WorkProcessSection.jsx';

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

export async function generateStaticParams() {
  return moduleSlugs.map((slug) => ({ slug }));
}

async function getModuleData(slug) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'modules', `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading module data for ${slug}:`, error);
    return null;
  }
}

export default async function ModulePage({ params }) {
  const { slug } = params;

  if (!moduleSlugs.includes(slug)) {
    notFound();
    return null;
  }

  const moduleData = await getModuleData(slug);
  
  if (!moduleData) {
    notFound();
    return null;
  }

  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'All Modules', link: '/all-modules' },
    { label: moduleData?.mainHeaderSection?.heading || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), link: null },
  ];

  return (
    <>
      <Header />
      <PageHeader 
        title={moduleData?.mainHeaderSection?.heading || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} 
        breadcrumbs={breadcrumbs} 
      />
      <main>
        <WorkProcessSection moduleData={moduleData} />

        {moduleData.videosection && (
          <VideoSection moduleData={moduleData} />
        )}

        {moduleData.faqs && (
          <FaqSection faqData={moduleData.faqs} />
        )}

        <CtaSection />
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
}
