'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import PageHeader from '../../layout/PageHeader';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import CustomCursor from '../../layout/CustomCursor';
import FaqSection from '../modules/FaqSection';
import { FaHome } from 'react-icons/fa';
import VideoSection from '../modules/VideoSection';
// import MultipleCardsSection from '../modules/MultipleCardsSection';
import CtaSection from '../modules/CtaSection';
import CustomSection from '../../containers/modules/CustomSection';

const ModulePage = ({ params, slug }) => {
  const moduleSlug = params?.slug || slug;
  const moduleName = moduleSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'All Modules', link: '/modules' },
    { label: moduleName, link: null },
  ];
  
  return (
    <>
      <Header />
      <PageHeader title={moduleName} breadcrumbs={breadcrumbs} />
      <CustomSection slug={moduleSlug} />
      <VideoSection slug={moduleSlug} />
      {/* <MultipleCardsSection slug={moduleSlug} /> */}
      <FaqSection slug={moduleSlug} />
      <CtaSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default ModulePage;
