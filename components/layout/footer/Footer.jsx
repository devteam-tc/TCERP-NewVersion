import Link from 'next/link'
// import logo2 from '@/public/images/logo/logo2.svg';
import logo2 from '../../../public/images/logo/logo.webp';
import Image from 'next/image';
import ScrollProgressButton from '../ScrollProgressButton';
import WebCounter from '../../containers/home/WebCounter';
// import SocialMediaIcons from './SocialMediaIcons';
const Footer = () => {
  return (
    <>
      {/* scroll to top start */}
      <ScrollProgressButton />
      {/* scroll to top end */}
      <footer className="ep-footer-section pt-60">
        <div className="footer-bg">
          <div className="container">
            <div className="footer-main">
              <div className="row g-4">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget footer-about">
                    <div className="logo">
                      <Link href="/">
                        <Image priority src={logo2} alt="logo2" />
                      </Link>
                    </div>
                    <div className="short-info">
                      <p>Tech Cloud ERP delivers top-notch solutions tailored for any business comprehensive features.</p>
                    </div>
                    <div className="contact-info">
                      <ul className="list-unstyled">
                        <li>
                          <div className="d-flex align-items-center gap-2">
                            <div className="icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h4 className="title">Address </h4>
                          </div>
                          <p>Plot No. 241, 3rd Floor, VVG Elite Developers, Kavuri Hills, Madhapur, Hyderabad, Telangana - 500081</p>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2">
                            <div className="icon">
                              <i className="fas fa-envelope"></i>
                            </div>
                            <h4 className="title">Email </h4>
                          </div>
                          <p> <a href="mailto:info@techclouderp.com">info@techclouderp.com</a></p>
                          <WebCounter />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget footer-links services-widget">
                    <h4 className="footer-title">Useful Links</h4>
                    <ul className="list-unstyled">
                    {/* <i className="fas fa-chevron-right"></i>  */}
                      <li><Link href="/services">Home</Link></li>
                      <li><Link href="/services"> About Us</Link></li>
                      <li><Link href="/services"> Contact Us</Link></li>
                      <li><Link href="/services"> Our Features</Link></li>
                      <li><Link href="/services"> Our Blogs</Link></li>
                      <li><Link href="/services"> Our Branches</Link></li>
                      <li><Link href="/products"> All Products</Link></li>
                      <li><Link href="/services"> Careers</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-6">
                  <div className="footer-widget footer-links links-widget">
                    <h4 className="footer-title">Industries</h4>
                    <ul className="list-unstyled">
                      <li><Link href="/industries">All Industries</Link></li>
                      <li><Link href="/industries/jewellery-industry">Jewellery</Link></li>
                      <li><Link href="/industries/pharma-industry">Pharma</Link></li>
                      <li><Link href="/industries/agriculture-industry">Agriculture</Link></li>
                      <li><Link href="/industries/beverage-industry">Beverage</Link></li>
                      <li><Link href="/industries/leather-industry">Leather</Link></li>
                      <li><Link href="/industries/textiles-industry">Textile</Link></li>
                      <li><Link href="/industries/food-industry">Food</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget footer-links links-widget">
                    <h4 className="footer-title">Services </h4>
                    <ul className="list-unstyled">
                      <li><Link href="/services">All Services </Link></li>
                      <li><Link href="/blog">Web Development</Link></li>
                      <li><Link href="/contact">E-Commerce Website </Link></li>
                      <li><Link href="/contact">Mobile App Development</Link></li>
                      <li><Link href="/contact">Digital Marketing</Link></li>
                      <li><Link href="/contact">Whatsapp Business</Link></li>
                      <li><Link href="/contact">Business Intelligence</Link></li>
                      <li><Link href="/contact">Web Hosting</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row g-2">
                  <div className="col-lg-6">
                    <div className="footer-copyright text-center text-lg-start">
                      <p>© 2025 Tech Cloud ERP | All Rights Reserved.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="footer-menu text-center text-lg-end">
                      <ul className="list-unstyled">
                        <li className="d-inline-block"><Link href="#">Terms & Conditions</Link></li>
                        <li className="d-inline-block"><Link href="#">Privacy Policy</Link></li>
                        {/* <li className="d-inline-block"><Link href="/contact">Contact Us</Link></li> */}
                      </ul>
                    </div>
                  </div>
                  {/* <SocialMediaIcons /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
