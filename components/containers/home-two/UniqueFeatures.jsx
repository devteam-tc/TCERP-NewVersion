"use client";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const features = [
  {
    icon: "/images/about-us/user-friendly.png",
    title: "User Friendly",
    alt: "UserFriendly icon"
  },
  {
    icon: "/images/about-us/web-technologies.png",
    title: "Web Technologies",
    alt: "WebTechnologies icon"
  },
  {
    icon: "/images/about-us/Customization.png",
    title: "Customisation",
    alt: "customisation icon"
  },
  {
    icon: "/images/about-us/opensource.png",
    title: "Accessibility",
    alt: "accessibility icon"
  },
  {
    icon: "/images/about-us/Amazing Support.png",
    title: "Amazing Support",
    alt: "Amazing Support icon"
  },
  {
    icon: "/images/about-us/versatility.png",
    title: "Versatility",
    alt: "Versatility icon"
  },
  {
    icon: "/images/about-us/Flexible Pricing.png",
    title: "Flexible Pricing",
    alt: "Flexible Pricing icon"
  },
  {
    icon: "/images/about-us/Mobile Versions.png",
    title: "Mobile Versions",
    alt: "Mobile Versions icon"
  },
  {
    icon: "/images/about-us/Cloud Servers.png",
    title: "Cloud Servers",
    alt: "Cloud Servers icon"
  },
  {
    icon: "/images/about-us/plugin marketplace.png",
    title: "Plugin Marketplace",
    alt: "Plugin Marketplace icon"
  },
  {
    icon: "/images/about-us/Secure & Reliable.png",
    title: "Secure & Reliable",
    alt: "Secure & Reliable icon"
  },
  {
    icon: "/images/about-us/speed.png",
    title: "Language versatility",
    alt: "Language versatility icon"
  },
  
];

const UniqueFeatures = () => {
  return (
    <section className="quiety-features py-120 pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {/* <div className="section-heading text-center mb-5">
              <h6 className="text-primary mb-3">Quiety Featured</h6>
              <h2>Enjoy some exclusive features</h2>
            </div> */}
             <div className=" text-center">
               <SectionTitle subTitle="Quiety Featured" title="Enjoy some exclusive features" extraClass="mb-30" />
             </div>
          </div>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="feature-card bg-white rounded-3 p-4 h-100">
                <div className="d-flex align-items-center gap-3">
                  <div className="feature-icon flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={40}
                      height={40}
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="mb-0">{feature.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures; 