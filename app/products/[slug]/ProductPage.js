'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { productData, productDetailsData } from '../../utils/constant';
import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import CustomCursor from '@/components/layout/CustomCursor';
import SidebarSection from '../SidebarSection';
import MainContentSection from '../MainContentSection';
import ProductCards from '../ProductCards';
import AboutSection from '../AboutSection';
import NewProduct from '../NewProduct';
import DownloadWidget from '../DownloadWidget'; 

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('');
  const [activeIndex, setActiveIndex] = useState(1);
  const [visiblePlans, setVisiblePlans] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 991 });

  const toggleCards = () => {
    const totalCards = product?.cards?.length || 0;
    setVisiblePlans(isExpanded ? 3 : totalCards);
    setIsExpanded(!isExpanded);
  };

  const categoryKeys = Object.keys(productDetailsData);
  const activeKey = categoryKeys[activeIndex];
  const { sidebar, content } = productDetailsData[activeKey] || {};
  const currentData = productDetailsData[slug];

  useEffect(() => {
    if (slug) {
      const selectedProduct = productData?.[slug] ?? {
        heading: 'Product Not Found',
        description: 'The product you are looking for does not exist.',
        tabsHeadings: {},
        tabData: {},
        faqs: [],
      };
      setProduct(selectedProduct);
      const firstTab = Object.keys(selectedProduct.tabsHeadings)[0] || '';
      setActiveTab(firstTab);
    }
  }, [slug]);

  if (!currentData) return <div>Product Not Found</div>;

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: product?.heading || 'Tech Cloud ERP', link: null },
  ];

  return (
    <>
      <Header />
      <PageHeader title={product?.heading || 'Tech Cloud ERP'} breadcrumbs={breadcrumbs} />
      <AboutSection slug={slug} />

      <Container>
        <div className="boxed_wrapper">
          <section className="service-details pt-60">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Sidebar */}
                <SidebarSection
                  sidebar={sidebar}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />

                {/* Main Content */}
                <MainContentSection content={content} />

                {/* On mobile, move download widget below main content */}
                {isMobile && (
                  <div className="col-12">
                    <DownloadWidget widget={sidebar?.downloadWidget} />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        <ProductCards
          product={product}
          visiblePlans={visiblePlans}
          toggleCards={toggleCards}
          isExpanded={isExpanded}
        />
      </Container>

      <NewProduct />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default ProductPage;
