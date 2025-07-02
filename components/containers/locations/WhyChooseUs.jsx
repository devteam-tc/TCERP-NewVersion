// components/locations/WhyChooseUs.js
import { Col, Container, Row } from 'react-bootstrap';
import { FaUserTie, FaUsers, FaLightbulb, FaCheckCircle, FaStar, FaDollarSign } from 'react-icons/fa';

const data = [
  {
    icon: <FaUserTie />,
    title: 'All-in-One ERP Platform',
    description: 'Manage crm, scales, purchase, inventory, hrm , accounting from a single, unified system to boost business efficiency.',
  },
  {
    icon: <FaUsers />,
    title: 'Customizable Modules',
    description: 'Tailor the ERP software to suit your industry-specific needs with flexible and scalable module configurations.',
    
  },
  {
    icon: <FaLightbulb />,
    title: 'Seamless Integration',
    description: 'Easily connect with eCommerce platforms, POS systems and third-party applications to ensure smooth data flow across your business.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'User-Friendly Interface',
    description: ' Intuitive dashboards and role-based access simplify operations and reduce the learning curve for your team.',
  },
  {
    icon: <FaStar />,
    title: 'Data Security & Cloud Access',
    description: 'Enjoy secure, cloud-based access to your business data with regular backups and advanced encryption standards.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Dedicated Support & Training',
    description: ' Get access to expert assistance, onboarding and training to ensure a successful implementation and smooth day-to-day use.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="whyChooseUs">
      <Container>
        <Row>
            <Col>
            <h2 className="heading">Why Choose Tech Cloud ERP?
            </h2>
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
