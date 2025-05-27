import { Layers, Lock, Link, Database } from 'lucide-react';
import './MultipleCardsSection.scss';

const MultipleCardsSection = () => {
  const cards = [
    {
      icon: <Layers className="multiple-cards-section__icon" />,
      title: "Centralised Repository",
      description: "Astroplate is a comprehensive starter template that includes everything you need to get started with your Astro project. What's Included in Astroplate"
    },
    {
      icon: <Lock className="multiple-cards-section__icon" />,
      title: "Centralised Repository",
      description: "suitable fulltime and temporary candidates. Publish job vacancies all major sites to broaden your reach – and access a global candidate warehouse offers thousands of pre-vetted technical, professional, and scientific candidates."
    },
    {
      icon: <Link className="multiple-cards-section__icon" />,
      title: "Centralised Repository",
      description: "With Astro, you can build modern and content-focused websites without sacrificing performance or ease of use."
    },
    {
      icon: <Database className="multiple-cards-section__icon" />,
      title: "Centralised Repository",
      description: "With Astro, you can build modern and content-focused websites without sacrificing performance or ease of use."
    }
  ];

  return (
    <section className="multiple-cards-section">
      <div className="multiple-cards-section__container">
        <h1 className="multiple-cards-section__headline">Ultimate Platform For Creating,<br />Sharing, And Executing</h1>
        <div className="multiple-cards-section__grid">
          {cards.map((card, index) => (
            <div key={index} className="multiple-cards-section__card">
              <div className="multiple-cards-section__card-icon">{card.icon}</div>
              <h3 className="multiple-cards-section__card-title">{card.title}</h3>
              <p className="multiple-cards-section__card-desc">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="multiple-cards-section__cta">
          <button className="multiple-cards-section__button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default MultipleCardsSection;