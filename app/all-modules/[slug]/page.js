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
import WorkProcessSection from '../../../components/containers/modules/WorkProcessSection';

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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">{moduleData.mainHeaderSection.heading}</h1>
              <p className="text-xl text-gray-600 mb-8">{moduleData.mainHeaderSection.description}</p>
            </div>
          </div>
        </section>

        {moduleData.featureSections && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {moduleData.featureSections.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{feature.featuretitle}</h3>
                    <p className="text-gray-600">{feature.featuredesc}</p>
                    {feature.dashboardImage && (
                      <img 
                        src={feature.dashboardImage} 
                        alt={feature.imageAlt || feature.featuretitle}
                        className="mt-4 rounded-lg w-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {moduleData.videosection && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{moduleData.videosection.title}</h2>
                <p className="text-gray-600 mb-8">{moduleData.videosection.description}</p>
                {moduleData.videosection.videoUrl && (
                  <div className="aspect-w-16 aspect-h-9">
                    <video 
                      controls 
                      className="w-full rounded-lg shadow-lg"
                      poster={moduleData.videosection.thumbnail}
                    >
                      <source src={moduleData.videosection.videoUrl} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {moduleData.faqs && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">{moduleData.faqs.title}</h2>
                <p className="text-gray-600 mb-8">{moduleData.faqs.subTitle}</p>
                <div className="space-y-4">
                  {moduleData.faqs.items.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      {/* <WorkProcessSection slug={slug} />
      <VideoSection slug={slug} />
      {moduleData.faqs && <FaqSection faqData={moduleData.faqs} />}
      <CtaSection />
      <Footer />
      <CustomCursor /> */}
    </>
  );
}
