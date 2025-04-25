"use client";
import Image from "next/image";

const features = [
  {
    icon: "/images/features/wordpress.svg",
    title: "WordPress",
    alt: "WordPress icon"
  },
  {
    icon: "/images/features/elementor.svg",
    title: "Elementor",
    alt: "Elementor icon"
  },
  {
    icon: "/images/features/woocommerce.svg",
    title: "WooCommerce Supported",
    alt: "WooCommerce icon"
  },
  {
    icon: "/images/features/contact-form.svg",
    title: "Contact Form 7",
    alt: "Contact Form 7 icon"
  },
  {
    icon: "/images/features/rtl.svg",
    title: "RTL support",
    alt: "RTL support icon"
  },
  {
    icon: "/images/features/browser.svg",
    title: "Browser Compatibility",
    alt: "Browser Compatibility icon"
  },
  {
    icon: "/images/features/mailchimp.svg",
    title: "Mailchimp Supported",
    alt: "Mailchimp icon"
  },
  {
    icon: "/images/features/google-fonts.svg",
    title: "Google Fonts",
    alt: "Google Fonts icon"
  },
  {
    icon: "/images/features/responsive.svg",
    title: "Responsive Design",
    alt: "Responsive Design icon"
  },
  {
    icon: "/images/features/color-scheme.svg",
    title: "Color Scheme",
    alt: "Color Scheme icon"
  },
  {
    icon: "/images/features/support.svg",
    title: "Quick Support",
    alt: "Quick Support icon"
  },
  {
    icon: "/images/features/clean-code.svg",
    title: "Clean Code",
    alt: "Clean Code icon"
  },
  {
    icon: "/images/features/documentation.svg",
    title: "Well Documented",
    alt: "Documentation icon"
  },
  {
    icon: "/images/features/layouts.svg",
    title: "Awesome Layouts",
    alt: "Layouts icon"
  },
  {
    icon: "/images/features/updates.svg",
    title: "Regular Updates",
    alt: "Updates icon"
  },
  {
    icon: "/images/features/minimal.svg",
    title: "Minimal & Clean",
    alt: "Minimal & Clean icon"
  }
];

const QuietyFeatures = () => {
  return (
    <section className="quiety-features py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading text-center mb-5">
              <h6 className="text-primary mb-3">Quiety Featured</h6>
              <h2>Enjoy some exclusive features</h2>
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

export default QuietyFeatures; 