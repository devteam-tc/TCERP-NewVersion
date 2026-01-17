import projectBanners from '@/public/images/projects/project-details-banner.png';
import arrowIcon from '@/public/images/icons/icon-right-arrow.svg';
import projectInerImg1 from '@/public/images/projects/project-detail-inner-img-1.png';
import projectInerImg2 from '@/public/images/projects/project-detail-inner-img-2.png';
import Image from 'next/image';
import Link from 'next/link';

const ProjectDetailsPage = () => {
  return (
    <>
      <section className="ep-project-details-section pt-120">
        <div className="container">
          <div className="project-banner-image position-relative">
            <div className="reveal zoom-out overflow-hidden rounded-20">
              <Image priority src={projectBanners} alt="project-details-banner"
                className="img-fluid w-100" />
            </div>
            <div className="project-information position-absolute rounded-20">
              <h4 className="title rounded-20 text-center mb-30">Project Information</h4>
              <ul className="list-unstyled options">
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">Category:</h5>
                  <p>Roof Service</p>
                </li>
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">Customer:</h5>
                  <p>David Bravis</p>
                </li>
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">Start date:</h5>
                  <p>21 April 2024</p>
                </li>
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">End date:</h5>
                  <p>28 September 2024</p>
                </li>
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">Rating:</h5>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </li>
              </ul>
              <div className="social-icon-box mt-30 d-flex justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <Link target='_blank' href="https://www.facebook.com/" className="d-inline-flex justify-content-center align-items-center">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link target='_blank' href="https://www.pinterest.com/" className="d-inline-flex justify-content-center align-items-center">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                  <li>
                    <Link target='_blank' href="https://bd.linkedin.com/" className="d-inline-flex justify-content-center align-items-center">
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link target='_blank' href="https://www.instagram.com/" className="d-inline-flex justify-content-center align-items-center">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-description">
            <h3 className="title split-text right">Redefining the Digital Landscape</h3>
            <p>Cybersecurity is a crucial aspect of IT, protecting sensitive information threats and breaches. IT services
              also include technical support and maintenance, ensuring that systems run smoothly and efficiently. IT
              industry offers diverse career opportunities, from network administration to software development As
              technology continues to evolve, the importance of IT in shaping the future of businesses and society</p>
            <p>Cloud computing, artificial intelligence, an cybersecurity are among the critical areas within IT that have
              transformed how businesses operate. IT solutions streamline processes, enhance communication, and improve
              decision-making by providing real-time data and analytics. Cybersecurity</p>

            <div className="inner-options">
              <ul className="list-unstyled">
                <li><Image src={arrowIcon} alt="icon-right-arrow" /> Inno Secure Technologies</li>
                <li><Image src={arrowIcon} alt="icon-right-arrow" /> Empowering Your Digital
                  Future</li>
                <li><Image src={arrowIcon} alt="icon-right-arrow" /> Unlocking the Power of
                  Technology</li>
                <li><Image src={arrowIcon} alt="icon-right-arrow" /> Technology that Moves You
                  Forward</li>
              </ul>
            </div>
            <div className="inner-image mb-30">
              <div className="row">
                <div className="col-lg-6">
                  <div className="image rounded-20 overflow-hidden reveal right">
                    <Image priority src={projectInerImg1} alt="project-detail-inner-img"
                      className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="image rounded-20 overflow-hidden reveal right">
                    <Image priority src={projectInerImg2} alt="project-detail-inner-img"
                      className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <h3 className="title split-text right">Building Tomorrow’s Tech Today</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and
                  scrambled it to make a type specimen book</p>
              </div>
            </div>
            <div className="list-info mt-30">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="info-item">
                    <h4 className="info-title d-flex align-items-center">
                      <i className="fa-solid fa-check"></i>
                      Your Gateway to Innovation
                    </h4>
                    <p>The rapid advancement of technology continuously</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="info-item">
                    <h4 className="info-title d-flex align-items-center">
                      <i className="fa-solid fa-check"></i>
                      Engineering the Future of IT
                    </h4>
                    <p>The rapid advancement of technology continuously</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="info-item">
                    <h4 className="info-title d-flex align-items-center">
                      <i className="fa-solid fa-check"></i>
                      Innovate with Confidence
                    </h4>
                    <p>The rapid advancement of technology continuously</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetailsPage
