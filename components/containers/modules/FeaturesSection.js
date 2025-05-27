import React from 'react';
import './FeaturesSection.scss';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="core-features-label">Core Features</div>
        <h2 className="features-title">The Features to Boost your <br />Productivity</h2>
        <div className="content-wrapper row">
          <div className="text-content col-12 col-md-6">
            <h3>Save Time by <br />Having Everything in one Platform</h3>
            <p>
              Use marketing automation to identify hot leads and email your sales team telling them to follow up. 
              Nurture and contact leads at the opportune time to maximize.
            </p>
            <a href="#" className="explore-more">Explore More →</a>
          </div>
          <div className="image-column col-12 col-md-6">
            <img
              src="/images/modules/feature-dashboard.svg"
              alt="Features Section Graphic"
              className="features-section__main-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
