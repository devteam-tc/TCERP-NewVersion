'use client';

import React from 'react';
import { FaGoogleDrive, FaGoogle, FaFigma, FaSpotify, FaSnapchatGhost, FaSlack, FaLine, FaDribbble, FaSketch } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';

const floatingIcons = [
  { icon: <FaGoogleDrive size={36} color="#4285F4" />, style: { top: '16%', left: '25%' } },
  { icon: <FaGoogle size={36} color="#EA4335" />, style: { top: '40%', left: '20%' } },
  { icon: <FaSketch size={36} color="#F7B500" />, style: { top: '70%', left: '23%' } },
  { icon: <FaSnapchatGhost size={36} color="#FFFC00" />, style: { top: '25%', left: '15%' } },
  { icon: <FaFigma size={36} color="#A259FF" />, style: { top: '58%', left: '12%' } },
  { icon: <FaSpotify size={36} color="#1DB954" />, style: { top: '50%', left: '70%' } },
  { icon: <FaDribbble size={36} color="#EA4C89" />, style: { top: '12%', right: '22%' } },
  { icon: <FaSlack size={36} color="#4A154B" />, style: { top: '40%', right: '12%' } },
  { icon: <FaLine size={36} color="#00C300" />, style: { top: '45%', right: '20%' } },
  { icon: <SiGoogleanalytics size={36} color="#F4B400" />, style: { top: '70%', right: '16%' } },
];

const integrationCards = [
  {
    icon: <FaSketch size={32} color="#F7B500" />,
    title: 'Google Drive',
    desc: 'Competently generate unique e-services and client-based models. Globally engage tactical niche',
    status: 'Connect',
    statusClass: 'connect',
  },
  {
    icon: <FaSlack size={32} color="#4A154B" />,
    title: 'Google Drive',
    desc: 'Globally engage tactical niche markets rather than client-based competently generate services',
    status: 'Connected',
    statusClass: 'connected',
  },
];

const ModulePage = () => (
  <>
    <section className="integrationSection">
      <div className="integrationIcons">
        {floatingIcons.map((item, idx) => (
          <span key={idx} className="integrationIcon" style={item.style}>{item.icon}</span>
        ))}
      </div>
      <div className="integrationContent">
        <h5 className="integrationSubtitle">Integration</h5>
        <h2 className="integrationTitle">We Collaborate with Top Software Company</h2>
        <button className="integrationButton">View all Integration</button>
      </div>
      <div className="integrationCards">
        {integrationCards.map((card, idx) => (
          <div className="integrationCard" key={idx}>
            <div className="integrationCardIcon">{card.icon}</div>
            <div className="integrationCardBody">
              <div className="integrationCardHeader">
                <span className="integrationCardTitle">{card.title}</span>
                <span className={`integrationCardStatus ${card.statusClass}`}>{card.status}</span>
              </div>
              <div className="integrationCardDesc">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default ModulePage;