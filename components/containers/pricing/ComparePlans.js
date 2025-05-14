'use client';
import comparisonData from '../../../data/pricing/comparison.json';

const Checkmark = () => (
  <span className="checkmark">✔</span>
);

const ComparePlans = () => {
  const { title, plans, features } = comparisonData;

  const renderFeatureCell = (plan, featureKey) => {
    const value = plan.features[featureKey];
    
    if (value === true) return <Checkmark />;
    if (value === false) return '';
    return value;
  };

  return (
    <section className="comparePlans">
      <h2>
        <span>{title.main}</span> {title.sub}
      </h2>
      <p>{title.description}</p>

      <div className="table">
        <div className="row header">
          <div className="cell">Features and Services</div>
          {plans.map((plan, i) => (
            <div key={i} className="cell">
              <strong>{plan.name}</strong>
              <button className={plan.isHighlighted ? 'activeBtn' : ''}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {features.map((feature, idx) => (
          <div className="row" key={idx}>
            <div className="cell">{feature.label}</div>
            {plans.map((plan, i) => (
              <div key={i} className="cell">
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