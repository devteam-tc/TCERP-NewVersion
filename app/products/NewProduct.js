"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import "./NewProduct.scss"; // Regular SCSS import
import  productscardData  from "../../data/products/productscardData.json"; 
import { Button } from "react-bootstrap";

const ProductsSection = () => {
  const params = useParams();
  const slug = params?.slug;

  const product = productscardData[slug];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCards = () => {
    setIsExpanded(!isExpanded);
  };

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h2>Product Not Found</h2>
        <p>Please check the URL or try again later.</p>
      </div>
    );
  }

  const cardsToDisplay = isExpanded ? product.cards : product.cards.slice(0, 3);

  return (
    <div className="product-area style-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h5 className="section-sub-title">FEATURED PRODUCTS</h5>
              <h1 className="section-main-title">{product.mainTitle}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {cardsToDisplay.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-product-box">
                <div className="product-box-inner">
                  <div className="product-content">
                    <h4 className="product-title">{card.title}</h4>
                    <p className="product-des">{card.text}</p>
                  </div>
                  <div className="product-icon">
                    <Image 
                      src={card.image} 
                      alt="product icon" 
                      width={50} 
                      height={40} 
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {product.cards.length > 3 && (
          <button onClick={toggleCards} className="styledButton">
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;