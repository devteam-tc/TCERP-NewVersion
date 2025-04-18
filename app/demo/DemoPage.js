'use client';

import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './demopage.scss';

const DemoPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
     

      <Container>
        <Row>
          <Col>
            <div
              className="calendly-inline-widget demo-calendly-widget"
              data-url="https://calendly.com/padmini-techclouderp/demo"
            ></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DemoPage;
