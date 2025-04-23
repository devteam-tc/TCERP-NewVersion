import Image from 'next/image';
import appDevelopmentData from '../../../data/services/app-development.json';
import webDevelopmentData from '../../../data/services/web-development.json';
import digitalMarketingData from '../../../data/services/digital-marketing.json';

const Specifications = ({ slug }) => {
  const getDataBySlug = () => {
    switch(slug) {
      case 'app-development':
        return appDevelopmentData;
      case 'web-development':
        return webDevelopmentData;
      case 'digital-marketing':
        return digitalMarketingData;
      default:
        return { service: [] }; // Return empty array if slug doesn't match
    }
  };

  const data = getDataBySlug();
  const services = data.services;

  if (!services || services.length === 0) {
    return null; // Return nothing if no services are found
  }

  return (
    <section>
      <div className="sservice-area pt_120 pb_120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
              </div>
            </div>

            {services.map((service, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-single-box" style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}>
                  <div className="service-icon">
                    <Image 
                      src={service.img} 
                      alt={service.title} 
                      width={300} 
                      height={300}
                      style={{ height: 'auto', maxWidth: '120px' }}
                    />
                  </div>
                  <div className="service-content" style={{ flex: 1 }}>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative Shapes */}
            <div className="service-shape bounce-animate3">
              <Image
                src="/images/services/service5.webp"
                alt="shape"
                width={100}
                height={100}
                style={{ width: '199px', height: '420px', aspectRatio: '199 / 420' }}
              />
            </div>

            <div className="service-shape2">
              <Image src="/images/services/service7.png" alt="shape" width={100} height={100} />
            </div>
            <div className="service-shape3 bounce-animate4">
              <Image
                src="/images/services/service8.png"
                alt="shape"
                width={100}
                height={100}
                style={{ width: '341px', height: '351px', aspectRatio: '341 / 351' }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;