// components/BusinessSection.js

import  '../business-intelligence/bi.scss';
import Image from 'next/image';
import Link from 'next/link';

const BusinessSection = () => {
  return (
    <section className="businessSection fix">
      <div className="container">
        <div className="sectionTitle mb-lg-4 mb-0 pb-lg-2">
          <h2 className="wow fadeInUp black fw-bold" data-wow-delay=".3s">
            Why we are different from others
          </h2>
        </div>

        <div className="row g-4 justify-content-between">
          <div className="col-lg-5 order-lg-0 order-1">
            <div className="businessThumbnail">
              <Image src="/bi/business-thumb.png" alt="Business" width={500} height={500} className="mimg" />
              <Image src="/bi/line-card.png" alt="line" className="lineCard" width={100} height={100} />
              <Image src="/bi/box-card.png" alt="box" className="boxCard" width={100} height={100} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="businessContent">
              <p className="pra">
                Applies deep technological expertise in machine learning and artificial intelligence development services to help clients deliver personalization and customer convenience at scale.
              </p>

              <div className="row g-4">
                {[
                  {
                    icon: '/bi/business-icon1.png',
                    title: 'End to end development',
                    desc: 'Your time is precious, and we that cleaning is really just one more',
                  },
                  {
                    icon: '/bi/business-icon2.png',
                    title: 'Technology source',
                    desc: 'Your time is precious, and we that cleaning is really just one more',
                  },
                  {
                    icon: '/bi/business-icon3.png',
                    title: 'Information manage',
                    desc: 'Your time is precious, and we that cleaning is really just one more',
                  },
                  {
                    icon: '/bi/business-icon4.png',
                    title: 'Network business',
                    desc: 'Your time is precious, and we that cleaning is really just one more',
                  },
                ].map((item, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="businessItems">
                      <Image src={item.icon} alt="icon" width={50} height={50} />
                      <h5>
                        <Link href="/services-details" className="black">
                          {item.title}
                        </Link>
                      </h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
