import Link from "next/link";
import Image from "next/image";

const AuditPage = () => {
  return (
    <section className="auditSection">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          {/* Left Column with Image */}
          <div className="col-lg-6">
            {/* <div className="auditImage text-center">
              <Image
                src="/assets/images/audit-illustration.png"
                alt="Free IT Audit"
                width={500}
                height={400}
                className="img-fluid"
              />
            </div> */}
          </div>

          {/* Right Column with Content */}
          <div className="col-lg-6">
            <div className="auditContent">
              <div className="section-title">
                <span className="sub-badge p1-clr fw-semibold fs-seven text-uppercase d-block mb-xxl-4 mb-3">
                  ARRANGE A
                </span>
                <h2
                  className="wow fadeInUp black fw-bold visible-slowly-right mb-xxl-4 mb-md-3 mb-2"
                  data-wow-delay=".3s"
                >
                  <span className="animatedText">Free ITaudit</span>
                </h2>
                <p className="pra mb-xl-4 mb-4 pb-xl-2">
                  We believe in four pillars of influence that drive our growth. This is ingrained in
                  everything we do. We use technology.
                </p>
                <Link
                  href="/contact"
                  className="common-btn box-style cmn-style1 box-bg white d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 overflow-hidden rounded-5"
                >
                  Tell Us How We Can Help
                </Link>

                <ul className="d-flex align-items-center gap-xxl-4 gap-sm-3 gap-2 flex-wrap mt-4 pt-lg-2">
                  <li className="d-flex align-items-center gap-2 black fs-eight fw_500">
                    <i className="fas fa-check p3-clr" aria-hidden="true"></i> Quick response
                  </li>
                  <li className="d-flex align-items-center gap-2 black fs-eight fw_500">
                    <i className="fas fa-check p3-clr" aria-hidden="true"></i> Save time and money
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditPage;
