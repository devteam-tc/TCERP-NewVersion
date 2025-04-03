import serviceDetailsImg1 from '@/public/images/services/service-details-img1.png'
import serviceDetailsImg2 from '@/public/images/services/service-details-img2.png'
import PageHeader from '@/components/layout/PageHeader';
import { categories } from '@/data/categories';
import Link from 'next/link';
import Image from 'next/image';

const ServiceDetailsPage = () => {

  return (
    <div>
      <section className="ep-service-details-section mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 service-content">
              <div className="service-details">
                <div className="service-banner rounded-20 overflow-hidden reveal left">
                  <Image priority src={serviceDetailsImg1} alt="service-details-img"
                    className="img-fluid w-100" />
                </div>
                <div className="service-text mt-30">
                  <h3 className="title">Tech solutions for a smarter future</h3>
                  <p>The rapid advancement of technology continuously drives innovation within the IT sector, making
                    it a dynamic and evolving field. Cloud computing, artificial intelligence, and cybersecurity are
                    among the critical areas within IT that have transformed businesses operate</p>
                  <h4 className="sub-title">Innovative IT for business growth</h4>
                  <p>IT solutions streamline processes, enhance communication, an improve decision-making by providing
                    real-time data protecting sensitive information from t and breaches. IT services also include
                    technical support and maintenance, ensuring that systems run smoothly and efficiently</p>
                  <ul className="list-unstyled options">
                    <li><i className="fa-solid fa-circle-check"></i> Tech Solutions for a Connected World</li>
                    <li><i className="fa-solid fa-circle-check"></i> Your Vision, Our Innovation</li>
                    <li><i className="fa-solid fa-circle-check"></i> Technology That Drives Success</li>
                    <li><i className="fa-solid fa-circle-check"></i> Connecting the Dots of Digital Innovation</li>
                  </ul>
                  <div className="inner-details">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="innner-img overflow-hidden rounded-20 reveal left">
                          <Image priority src={serviceDetailsImg2} alt="service-details-img"
                            className="img-fluid w-100" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="inner-text">
                          <h4 className="sub-title mt-0">Secure your future with IT</h4>
                          <p>It encompasses the use of computers, net, and other digl technologies to store, retrieve,
                            transmit, and manipulate data. IT professionals develop maintain the infrastructure that
                            support</p>
                          <ul className="list-unstyled m-0 inner-options">
                            <li><i className="fa-solid fa-angles-right"></i> angles-right
                              Your IT Success Partner</li>
                            <li><i className="fa-solid fa-angles-right"></i> Technology That Powers the Future</li>
                            <li><i className="fa-solid fa-angles-right"></i> Accelerate with Cutting-Edge Tech</li>
                            <li><i className="fa-solid fa-angles-right"></i> Revolutionizing Digital Experiences</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="sub-title">Crafting Tomorrow’s Digital World</h4>
                  <p>It encompasses the use of computers, net, and other digital technologies to store, retrieve,
                    transmit, and manipulate data. IT professionals develop maintain the infrastructure that supports
                    a company's operations, including hardware, software, and security systems. The rapid advancement
                  </p>
                  <p>Ttechnology continuously drives innovation within the IT sector, making it a dynamic and evolving
                    field. Cloud computing, artificial intelligence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="service-sidebar rounded-20">
                <h4 className="sidebar-title mb-30 position-relative d-inline-block">Category</h4>
                <ul className="list-unstyled inner_category">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link className="d-flex align-items-center justify-content-between" href="#">
                        {category.name} <span className="flex-shrink-0">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetailsPage;
