// components/locations/WhyChooseUs.js
import { Col, Container, Row } from 'react-bootstrap';
import { FaUserTie, FaUsers, FaLightbulb, FaCheckCircle, FaStar, FaDollarSign } from 'react-icons/fa';

const data = [
  {
    icon: <FaUserTie />,
    title: 'Expertise and Experience',
    description: 'Our team comprises seasoned professionals with extensive experience in the industry.',
  },
  {
    icon: <FaUsers />,
    title: 'Customer-Centric Approach',
    description: 'We prioritize understanding our clients needs and delivering tailored solutions.',
    
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovative Solutions',
    description: 'We leverage cutting-edge technologies and creative strategies to drive results.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Proven Track Record',
    description: 'We have a history of successfully delivering projects and exceeding client expectations.',
  },
  {
    icon: <FaStar />,
    title: 'Commitment to Quality',
    description: 'We adhere to the highest standards of quality in everything we do, ensuring excellence.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Affordable Pricing',
    description: 'We offer competitive pricing without compromising on the quality of our services.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="whyChooseUs">
      <Container>
        <Row>
            <Col>
            <h2 className="heading">Why Choose Us?</h2>
      <div className="grid">
        {data.map((item, index) => (
          <div
          key={index}
          className="card"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}
