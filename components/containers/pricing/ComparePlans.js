'use client';
import { useState } from 'react';
import comparisonData from '../../../data/pricing/comparison.json';

const Checkmark = () => (
  <span className="checkmark" aria-label="Included">✔</span>
);

const ComparePlans = () => {
  const { title, plans, features } = comparisonData;
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const renderFeatureCell = (plan, featureKey) => {
    const value = plan.features[featureKey];
    
    if (value === true) return <Checkmark />;
    if (value === false) return <span aria-label="Not included">—</span>;
    return <span>{value}</span>;
  };

  return (
    <section className="comparePlans">
      <h2>
        <span>{title.main}</span>
        {title.sub}
      </h2>
      <p>{title.description}</p>

      <div className="table" role="table" aria-label="Pricing comparison table">
        <div className="row header" role="row">
          <div className="cell" style={{justifyContent: 'center !important;'}} role="columnheader">
            <strong >Features and Services</strong>
          </div>
          {plans.map((plan, i) => (
            <div key={i} className="cell" role="columnheader">
              <strong>{plan.name}</strong>
            </div>))}
        </div>

        {features.map((feature, idx) => (
          <div className="row" key={idx} role="row"
            onMouseEnter={() => setHoveredFeature(feature.key)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="cell" role="cell">
              {feature.label}
              {feature.description && hoveredFeature === feature.key && (
                <div className="feature-tooltip">
                  {feature.description}
                </div>
              )}
            </div>
            {plans.map((plan, i) => (
              <div key={i} className="cell" role="cell">
                {renderFeatureCell(plan, feature.key)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparePlans;