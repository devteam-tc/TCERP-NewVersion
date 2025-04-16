'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Accordion, Col, Container, Row, Button } from 'react-bootstrap';
import { productData, productDetailsData } from '../../utils/constant';

import PageHeader from "@/components/layout/PageHeader";
import Footer from '../../../components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Link from "next/link";
import ServiceDetailsPage from '@/components/containers/services/ServiceDetailsPage';
import { BsCheckCircle } from 'react-icons/bs';
import CustomCursor from "@/components/layout/CustomCursor";
import Image from 'next/image';

const ProductPage = ({ breadcrumbTitle }) => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('');
  const [activeIndex, setActiveIndex] = useState(1);
  const [visiblePlans, setVisiblePlans] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

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

  if (!currentData) {
    return <div>Product Not Found</div>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  const tabContent = product.tabData?.[activeTab] ?? {
    content: [],
    image: '/default-image.png',
    alt: 'Default image',
  };

  const handleOnClick = (index) => setActiveIndex(index);

  const generateFAQSchema = (faqs) => {
    if (!faqs || faqs.length === 0) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };
  };

  // ✅ Dynamic breadcrumbs based on product
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: product?.heading || 'Tech Cloud ERP', link: null }
  ];
  

  const faqSchema = generateFAQSchema(product.faqs);

  return (
    <>
      <Header />
      <PageHeader title={product?.heading || "Tech Cloud ERP"} breadcrumbs={breadcrumbs} />

      <Container>
        <div className="boxed_wrapper">
          <section className="service-details pt-120 ">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Sidebar */}
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                    <div className="category-widget mb_40">
                      <ul className="category-list clearfix">
                        {sidebar?.categories.map((cat, index) => (
                          <li key={cat.href}>
                            <a
                              href={cat.href}
                              className={index === activeIndex ? "current" : ""}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveIndex(index);
                              }}
                              style={{
                                color: "inherit",
                                cursor: "pointer",
                                textDecoration: "none",
                              }}
                            >
                              {cat.title} <i className="icon-42"></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Download Widget */}
                    <div className="download-widget mt-5 mb-5">
                      <div
                        className="shape"
                        style={{
                          backgroundImage: `url(${sidebar?.downloadWidget?.bgShape})`,
                        }}
                      ></div>
                      <div className="inner-box">
                        <figure className="image-box">
                          <Image
                            src={sidebar?.downloadWidget?.image || ""}
                            alt="Book"
                            width={200}
                            height={300}
                          />
                        </figure>
                        <h4>
                          {sidebar?.downloadWidget?.title}
                          <span>{sidebar?.downloadWidget?.spanTitle}</span>
                        </h4>
                        <button type="button" className="theme-btn btn-one">
                          {sidebar?.downloadWidget?.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="sec-title pb-60">
                      <span className="sub-title mb-3 mt-3">{content?.subTitle}</span>
                      <h2>{content?.heading}</h2>
                      <p className="mt-3">{content?.paragraphs?.[0]}</p>
                    </div>
                    <figure className="image-box mb-5">
                      <Image
                        src={content?.image}
                        alt={content?.subTitle}
                        width={800}
                        height={450}
                      />
                    </figure>
                    <div className="text-box">
                      {content?.paragraphs?.slice(1).map((para, index) => (
                        <p key={index} className={index === 0 ? "mb-3" : ""}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Cards Section */}
        <div className="bodySection">
          <Container className="my-2">
            <h2 className="mainTitle">{product.mainTitle}</h2>
            <Row>
              {product.cards.slice(0, visiblePlans).map((card, index) => (
                <Col md={6} lg={4} key={index} className="mb-4 d-flex">
                  <div className="cardContainer">
                    <div className="cardTitleContainer">
                      {card.image && (
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={100}
                          height={100}
                          className="cardImage"
                        />
                      )}
                    </div>
                    <h3 className="cardTitle">{card.title}</h3>
                    <p className="cardText">{card.text}</p>
                    <ul className="cardList">
                      {card.items.map((item, idx) => (
                        <li key={idx} className="cardItem">
                          <BsCheckCircle className="icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>

            {product.cards.length > 3 && (
              <Button onClick={toggleCards} className="styledButton">
                {isExpanded ? 'Show less' : 'Show more'}
              </Button>
            )}
          </Container>
        </div>
      </Container>

      <Footer />
      <CustomCursor />
    </>
  );
};

export default ProductPage;
