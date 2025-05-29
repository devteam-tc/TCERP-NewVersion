import React from 'react';
import './IntegratedIntro.scss';

// Assuming react-icons is installed. If not, you may need to run `npm install react-icons --save` or `yarn add react-icons`.
// Importing specific icons from react-icons.
import { FaHubspot, FaFacebookF, FaFigma, FaSlack, FaGoogleDrive, FaInstagram } from 'react-icons/fa'; // Importing icons based on visual match from the image

const IntegratedIntro = () => {
  return (
    <section className="integrated-intro">
      <div className="integrated-intro__container row">
        <div className="integrated-intro__image-section col-12 col-md-6">
          {/* Add your image here */}
          <img src="/images/modules/apps.png" alt="Integrated Intro Image" className="integrated-intro__main-image"/>
        </div>
        <div className="integrated-intro__content-section col-12 col-md-6">
          <p className="integrated-intro__subtitle">Integration Software &#8594;</p>
          <h2 className="integrated-intro__title">Integrated with Tech Cloud ERP Used Software</h2>
          <p className="integrated-intro__description">Objectively strategize e-business e-tailers after an expanded array of communities.
Conveniently aggregate integrated best practices whereas resource sucking results.
Appropriately network collaborative portals without progressive channels.</p>
          <p className="integrated-intro__description">Bring in quality leads, nurture them and turn them into happy, paying customers. Get a
complete view of all customer data—personal details, all communication you've had with
them, and more—all in a single place.</p>
        </div>
      </div>
    </section>
  );
};

export default IntegratedIntro;
