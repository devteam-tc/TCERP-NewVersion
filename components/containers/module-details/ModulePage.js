'use client';

import React, { useEffect, useState } from 'react';
import PageHeader from '../../layout/PageHeader';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import CustomCursor from '../../layout/CustomCursor';
import FaqSection from '../modules/FaqSection';
import { FaHome } from 'react-icons/fa';
import VideoSection from '../modules/VideoSection';
import CtaSection from '../modules/CtaSection';
import WorkProcessSection from '../../containers/modules/WorkProcessSection'

const ModulePage = ({ params, slug }) => {
  const [moduleData, setModuleData] = useState(null);
  const moduleSlug = params?.slug || slug;

  useEffect(() => {
    const loadModuleData = async () => {
      try {
        const data = await import(`../../../data/modules/${moduleSlug}.json`);
        setModuleData(data.default);
      } catch (err) {
        console.error(`Failed to load module data:`, err);
      }
    };

    loadModuleData();
  }, [moduleSlug]);

  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'All Modules', link: '/all-modules' },
    { label: moduleData?.mainHeaderSection?.heading || moduleSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), link: null },
  ];
  
  return (
    <>
      <Header />
      <PageHeader 
        title={moduleData?.mainHeaderSection?.heading || moduleSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} 
        breadcrumbs={breadcrumbs} 
      />
      <WorkProcessSection slug={moduleSlug} />
      <VideoSection slug={moduleSlug} />
      <FaqSection slug={moduleSlug} />
      <CtaSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default ModulePage;
