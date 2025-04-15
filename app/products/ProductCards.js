import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs';
import Image from 'next/image';

const ProductCards = ({ product, visiblePlans, toggleCards, isExpanded }) => {
  return (
    <div className="bodySection">
      <Container className="my-2">
        <h2 className="mainTitle">{product?.mainTitle}</h2>
        <Row>
          {product?.cards?.slice(0, visiblePlans).map((card, index) => (
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

        {product?.cards?.length > 3 && (
          <Button onClick={toggleCards} className="styledButton">
            {isExpanded ? 'Show less' : 'Show more'}
          </Button>
        )}
      </Container>
    </div>
  );
};

export default ProductCards;
