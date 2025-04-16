"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./NewProduct.module.scss";
import { productscardData } from "../utils/constant"; // adjust the path as needed
import { Row, Col, Button, Container } from 'react-bootstrap';

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
    <div className={styles["product-area"] + " " + styles["style-two"]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles["section-title"] + " text-center"}>
              <h5 className={styles["section-sub-title"]}>FEATURED PRODUCTS</h5>
              <h1 className="mainTitle">{product.mainTitle}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {cardsToDisplay.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className={styles["single-product-box"]}>
                <div className={styles["product-box-inner"]}>
                  <div className={styles["product-content"]}>
                    <h4 className={styles["product-title"]}>{card.title}</h4>
                    <p className={styles["product-des"]}>{card.text}</p>
                  </div>
                  <div className={styles["product-icon"]}>
                    <Image src={card.image} alt="product icon" width={50} height={40} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {product.cards.length > 3 && (
            <Button onClick={toggleCards} className="styledButton">
            {isExpanded ? 'Show less' : 'Show more'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
