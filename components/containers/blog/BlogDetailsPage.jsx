import blogBanner from '@/public/images/blog/blog-details-banner.png';
import blogDetailsInnerImg1 from '@/public/images/blog/blog-details-inner-img-1.png';
import blogDetailsInnerImg2 from '@/public/images/blog/blog-details-inner-img-2.png';
import blogDetailsInnerImg3 from '@/public/images/blog/blog-details-inner-img-3.png';
import blogDetailsInnerImg4 from '@/public/images/blog/blog-details-inner-img-4.png';
import quoteIcon from '@/public/images/icons/quote-icon-2.svg';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';

const BlogDetailsPage = () => {

  return (
    <>
      <section className="ep-blog-details-section pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 mx-auto">
              <div className="blog-details-wrapper">
                <div className="blog-details-banner position-relative">
                  <div className="reveal zoom-out">
                  <Image priority src={blogBanner} alt="blog-details-banner" className="img-fluid w-100" />
                  </div>
                  <div className="blog-meta position-absolute d-inline-flex rounded-20 align-items-center gap-4">
                    <Link href="#" className="d-flex align-items-center">
                      <i className="fa-regular fa-user"></i>
                      Br Simmons
                    </Link>
                    <Link href="#" className="d-flex align-items-center">
                      <i className="fa-regular fa-folder-open"></i>
                      Category
                    </Link>
                    <Link href="#" className="d-flex align-items-center">
                      <i className="fa-regular fa-comments"></i>
                      Comments (04)
                    </Link>
                  </div>
                </div>
                <div className="blog-description">
                  <h3 className="title split-text right mb-30 title-anim">Empowering progress through digital innovation Navigate your
                    future</h3>
                  <p>It encompasses the use of computers, networks, and other digital technologies to store, retrieve,
                    transmit, and manipulate data. IT professionals dev and maintain the infrastructure that supports a
                    company's operations, including hardware, software</p>
                  <p> The rapid advancement of technology continuously drives innovation within the IT sector, making it a
                    dynamic and evolving field. Cloud computing, artificial intelligence</p>
                  <div className="inner-images my-30">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="image rounded-20 reveal right">
                          <Image priority src={blogDetailsInnerImg1} alt="blog-details-inner-img"
                            className="img-fluid w-100" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="image rounded-20 reveal right">
                          <Image priority src={blogDetailsInnerImg2} alt="blog-details-inner-img"
                            className="img-fluid w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>IT solutions streamline processes, enhance communication, and improve decision-making by providing
                    real-time data and analytics. Cybersecurity is a crucial aspect of IT</p>
                  <ul className="list-unstyled list-info">
                    <li className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <h5 className="list-title">Stay ahead with cutting-edge technology your business with IT Solutions</h5>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <h5 className="list-title">Enhance your business performance with technology</h5>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <h5 className="list-title">Empower your business with IT Solutions Unlock the potential of technology
                      </h5>
                    </li>
                  </ul>
                  <blockquote className="rounded-20 section-bg">
                    <div className="icon mb-20">
                      <Image src={quoteIcon} alt="quote-icon" />
                    </div>
                    <p>Protecting sensitive information from threats and breaches. IT services also include technical
                      support and maintenance, ensuring that systems run smoothly and efficiently. The IT industry offers
                      diverse career opportunities, from network</p>
                    <h5 className="name mt-20 position-relative">Bret Lee</h5>
                  </blockquote>
                  <h3 className="title mb-20 split-text right">Simplify Life with Mobile Apps</h3>
                  <p>Administration to software developmen. As technology continues to evolve, the importance of IT in
                    shaping the future of businesses and society cannot be overstated IT professionals develop and
                    maintain the infrastructure that supports a company's operations, including hardware, software, and
                    security systems. The rapid advancement of technology</p>
                  <div className="inner-images my-30">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="image rounded-20 reveal right">
                          <Image priority src={blogDetailsInnerImg3} alt="blog-details-inner-img"
                            className="img-fluid w-100" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="image rounded-20 reveal right">
                          <Image priority src={blogDetailsInnerImg4} alt="blog-details-inner-img"
                            className="img-fluid w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Continuously drives innovation within the IT sector, making it a dynamic and evolving field. Cloud
                    computing, artificial intelligence, and cybersecurity are among the critical areas within IT that have
                    transformed how businesses operate</p>
                  <div className="tags-and-social-icon">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="tags d-md-flex align-items-center">
                          <h4 className="title mb-2 mb-md-0">Tags:</h4>
                          <ul className="list-unstyled">
                            <li className="d-inline-block"><a href="#">Data Tech</a></li>
                            <li className="d-inline-block"><a href="#">Optimization Services</a></li>
                            <li className="d-inline-block"><a href="#">IT</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="social-icon-box text-start text-lg-end">
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
                  </div>
                </div>
                <div className="blog-details-pagination rounded-20 section-bg">
                  <ul className="list-unstyled d-flex justify-content-between align-items-center gap-4">
                    <li>
                      <Link href="#" className="d-flex align-items-center gap-3">
                        <span className="icon d-flex align-items-center justify-content-center rounded-pill"><i
                          className="fa-solid fa-arrow-left"></i></span> Previous
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="active d-flex align-items-center gap-3">
                        Next <span className="icon d-flex align-items-center justify-content-center rounded-pill"><i
                          className="fa-solid fa-arrow-right"></i></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="comment-box mt-120">
                  <h3 className="title mb-30">Leave A Comment</h3>
                  <form action="#" className="comment-form">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="input-group">
                          <input type="text" className="form-control form-field shadow-none" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <input type="text" className="form-control form-field shadow-none" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <input type="text" className="form-control form-field shadow-none" placeholder="Your Number" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <select className="form-select form-field shadow-none">
                            <option>Choose a Option</option>
                            <option>Los Angeles</option>
                            <option>Chicago</option>
                            <option>Houston</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-group">
                          <textarea className="form-field textarea-control" placeholder="Message here.."></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="theme-btn position-relative">Submit Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-10 mx-auto">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
