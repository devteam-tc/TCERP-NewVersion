
import  '../business-intelligence/bi.scss';
import Image from 'next/image';
import Link from 'next/link';

const BusinessSection = () => {
  return (
    <section className="businessSection fix">
      <div className="container">
        <div className="sectionTitle mb-lg-4 mb-0 pb-lg-2">
          <h2 className="wow fadeInUp black fw-bold" data-wow-delay=".3s">
          Advanced BI for Smarter Decisions
          </h2>
        </div>

        <div className="row g-4 justify-content-between">
          <div className="col-lg-5 order-lg-0 order-1">
            <div className="businessThumbnail">
              <Image src="/bi/business-thumb (1).png" alt="Business" width={500} height={500} className="mimg" />
              <Image src="/bi/line-card.png" alt="line" className="lineCard" width={300} height={200} />
              <Image src="/bi/box-card.png" alt="box" className="boxCard" width={300} height={200} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="businessContent">
              <p className="pra">
              Tech Cloud ERP s Business Intelligence is designed to give you more than just reports, it gives you clarity. With real-time dashboards, simple reporting tools and data directly connected to your ERP system, you can make informed decisions faster. Whether you re managing operations, sales, or finance, our BI tools help you turn everyday data into smart, strategic actions.
              </p>

              <div className="row g-4">
                {[
                  {
                    icon: '/bi/business-icon1.png',
                    title: 'Access for Every Team Member',
                    desc: 'Enable every user to view real-time insights and act with confidence.',
                  },
                  {
                    icon: '/bi/business-icon2.png',
                    title: 'Information Management',
                    desc: 'Centralized data for full visibility and smarter business planning.',
                  },
                  {
                    icon: '/bi/business-icon3.png',
                    title: 'Networked Business Intelligence',
                    desc: 'Seamlessly integrate data from all sources for deeper intelligence.',
                  },
                  {
                    icon: '/bi/business-icon4.png',
                    title: 'Technology Source',
                    desc: 'Integrated ERP reports offer real-time insights from centralized data.',
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
