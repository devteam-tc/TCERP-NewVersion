import Link from 'next/link';
import   './bi.scss';

const services = [
  {
    icon: 'flaticon-big-data',
    title: 'Big Data',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
  },
  {
    icon: 'flaticon-data-analytics',
    title: 'Data Analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
  },
  {
    icon: 'flaticon-document',
    title: 'Managed Analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
  },
  {
    icon: 'flaticon-chart',
    title: 'Business Intelligence',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
  },
  {
    icon: 'flaticon-science',
    title: 'Data Science',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
  },
  {
    icon: 'flaticon-data-management',
    title: 'Data Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
  }
];

const CardsSection = () => {
  return (
    <section className="servicesSection pt-100 pb-70">
      <div className="container">
        <div className="sectionTitle">
          <span>Our Services</span>
          <h2>Expolre Our Data Services</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="singleServicesBox">
                <div className="icon">
                  <i className="icon"></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="/services/details/" className="serviceBtn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
