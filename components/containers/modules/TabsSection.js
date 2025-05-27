'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const featureTabs = [
  {
    key: 'ai',
    label: 'AI & Data Science',
    title: 'AI & Data Science',
    description: [
      'Continually network effective bandwidth whereas goal-oriented schemas.',
      'Intrinsically incentivize corporate synergy with accurate task bricks-and-clicks leadership skills.',
      'Conveniently develop innovative infomediaries for enabled functionalities. Dynamically coordinate leading-edge after virtual potentialities drive multidisciplinary infrastructures.'
    ],
    link: '#',
    image: '/images/modules/widget-8.png',
    stats: [
      { value: '1200+', label: 'Students' },
      { value: '10 Years', label: 'Experience' },
      { value: '70%', label: 'Success', type: 'circle' }
    ]
  },
  {
    key: 'automation',
    label: 'Automation Power',
    title: 'Automation Power',
    description: [
      'Automate your workflows and increase productivity with our advanced automation tools.'
    ],
    link: '#',
    image: '/images/modules/widget-11.png',
    stats: []
  },
  {
    key: 'technology',
    label: 'Advanced Technology',
    title: 'Advanced Technology',
    description: [
      'Leverage the latest technology to stay ahead in your industry.'
    ],
    link: '#',
    image: '/images/modules/widget-12.png',
    stats: []
  }
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const activeFeature = featureTabs.find(tab => tab.key === activeTab);

  return (
    
    <section className="moduleSection">
      <div className="headerBlock">
        <h5 className="subtitle">Features</h5>
        <h2 className="title">Powerful Advanced Features</h2>
        <p className="desc">
          Dynamically initiate market positioning total linkage with clicks-and-mortar technology<br />
          progressively procrastinate compelling.
        </p>
        <div className="tabButtons">
          {featureTabs.map(tab => (
            <button
              key={tab.key}
              className={activeTab === tab.key ? "activeTab" : "tab"}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="contentBlock">
        <div className="textBlock">
          <h3 className="featureTitle">{activeFeature.title}</h3>
          {activeFeature.description.map((line, idx) => (
            <p key={idx} className="featureDesc">{line}</p>
          ))}
          <a href={activeFeature.link} className="knowMore">
            Know More About Us &rarr;
          </a>
        </div>
        <div className="imageBlock">
          <Image
            src={activeFeature.image}
            alt={activeFeature.title}
            width={400}
            height={300}
            className="featureImage"
          />
          {activeFeature.stats.length > 0 && (
            <div className="statsBlock">
              {activeFeature.stats.map((stat, idx) => (
                stat.type === 'circle' ? (
                  <div key={idx} className="circleStat">
                    <svg width="80" height="80">
                      <circle cx="40" cy="40" r="35" stroke="#d1d5db" strokeWidth="8" fill="none" />
                      <circle cx="40" cy="40" r="35" stroke="#3b4cca" strokeWidth="8" fill="none" strokeDasharray={220} strokeDashoffset={66} />
                    </svg>
                    <div className="circleValue">{stat.value}</div>
                  </div>
                ) : (
                  <div key={idx} className="statItem">
                    <div className="statValue">{stat.value}</div>
                    <div className="statLabel">{stat.label}</div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
