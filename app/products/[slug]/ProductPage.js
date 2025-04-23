'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import  productscardData  from '../../../data/products/productscardData.json';
import PageHeader from '../../../components/layout/PageHeader';
import Footer from '../../../components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import CustomCursor from '@/components/layout/CustomCursor';
// import ProductCards from '../ProductCards';
import AboutSection from '../AboutSection';
import NewProduct from '../NewProduct';
import FaqSection from '../FaqSection';
import DownloadWidget from '../DownloadWidget';

const ProductPage = ({ slug }) => {

  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('');
  const [visiblePlans, setVisiblePlans] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 991 });

  // Load product data based on slug
    useEffect(() => {
    if (slug) {
      const selectedProduct = productscardData?.[slug] ?? {
        heading: 'Product Not Found',
        description: 'The product you are looking for does not exist.',
        tabsHeadings: {},
        tabData: {},
        faqs: [],
      };

      setProduct(selectedProduct);

      const firstTab =
        selectedProduct.tabsHeadings &&
        typeof selectedProduct.tabsHeadings === 'object'
          ? Object.keys(selectedProduct.tabsHeadings)[0] || ''
          : '';

      setActiveTab(firstTab);
    }
  }, [slug]);

  // const toggleCards = () => {
  //   const totalCards = product?.cards?.length || 0;
  //   setVisiblePlans(isExpanded ? 3 : totalCards);
  //   setIsExpanded(!isExpanded);
  // };

  const currentData = productscardData[slug];
  if (!currentData) return <div>Product Not Found</div>;

  const productName = product?.heading || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: productName, link: null },
  ];
  
  return (
    <>
      <Header />
      <PageHeader title={productName} breadcrumbs={breadcrumbs} />
      <AboutSection slug={slug} />
      {/* <Container>
        <ProductCards slug={slug} visiblePlans={visiblePlans} toggleCards={toggleCards} />
      </Container> */}
      <NewProduct slug ={slug}  />
      <FaqSection product={slug} />
      <DownloadWidget />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default ProductPage;
