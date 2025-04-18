'use client'; // if using in an app router page


import './cards.scss';
import Link from 'next/link';
import Image from 'next/image';

const WorkingSteps = () => {
  return (
    <section className="working-step-section bg-color fix section-padding">
      <div className="container">
        <div className="section-title-area align-items-end mb-60">
          <div className="section-title">
            <span className="sub-badge p1-clr fw-semibold fs-seven text-uppercase d-block mb-2">
              OUR 4 WORKING STEPS
            </span>
            <h2
              className="wow fadeInUp black fw-bold visible-slowly-right"
              data-wow-delay=".3s"
            >
              Our working steps
            </h2>
          </div>
          {/* <Link
            href="/team"
            className="common-btn heading-font box-style d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden border rounded100"
          >
            Learn More
          </Link> */}
        </div>

        <div className="row g-4">
          {[
            {
              step: '01',
              title: 'Discussion',
              image: '/images/servicescards/work-author1.png',
            },
            {
              step: '02',
              title: 'Ideas & concept',
              image: '/images/servicescards/work-author1.png',
            },
            {
              step: '03',
              title: 'Testing & trying',
              image: '/images/servicescards/work-author1.png',
            },
            {
              step: '04',
              title: 'Execute & install',
              image: '/images/servicescards/work-author1.png',
            },
          ].map(({ step, title, image }, index) => (
            <div
              key={index}
              className="col-sm-6 col-lg-3 wow fadeInUp"
              data-wow-delay={`.${3 + index * 2}s`}
            >
              <div className="work-learn-item text-center">
                <div className="thumb-author d-center mb-xl-4 mb-3">
                  <div className="thumb rounded-circle">
                    <Image
                      src={image}
                      alt={title}
                      width={100}
                      height={100}
                      className="rounded-circle"
                    />
                  </div>
                  <span className="serial d-center rounded-circle">{step}</span>
                </div>
                <h4 className="mb-xl-3 mb-2">
                  <Link href="/team-details" className="black">
                    {title}
                  </Link>
                </h4>
                <p className="fs-seven pra">
                  Since 1985 Reed has pioneered cialist recruitment, sour
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSteps;