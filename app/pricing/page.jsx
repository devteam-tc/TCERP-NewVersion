"use client";
import React from 'react';
import { Container } from 'react-bootstrap';
import Pricing from "../../components/containers/home/Pricing";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import { FaHome } from 'react-icons/fa';
import StepWise from '../../components/containers/pricing/StepWise';
import ComparePlans from '../../components/containers/pricing/ComparePlans';
import FaqSection from '../../components/containers/pricing/FaqSection';  

const PricingPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Pricing', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Pricing" breadcrumbs={breadcrumbs}/>
      <Container className="py-5">
        <h1 className="text-center mb-4">Pricing Plans</h1>
        <Pricing />
        <StepWise />
        <ComparePlans />
        <FaqSection />
      </Container>
      <Footer/>

      <CustomCursor/>
    </>
  )
}

export default PricingPage;