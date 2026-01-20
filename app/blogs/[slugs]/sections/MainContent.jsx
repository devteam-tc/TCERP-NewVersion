
'use client';

import React from 'react';
import styles from './MainContent.module.css';
import KeywordParser from './components/KeywordParser';

const ContentSection = ({ section  }) => {
  if (!section) return null;
 console.log('Image URL:', section.img2);
  console.log('Section data:', section);
  return (
    
    <div className={styles.contentSection} id={section.id || section.title?.toLowerCase().replace(/\s+/g, '-')}>
      
 {/* Add img2 from database if it exists */}
      {section.imgurl2 && (
  <div className={styles.imageContainer}>
    <img 
      src={section.imgurl2} 
      alt={section.title || 'Content image'} 
      className={styles.contentImage}
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        display: 'block' // Ensures no extra space below image
      }}
      onError={(e) => {
        console.error('Image failed to load:', {
          src: section.imgurl2,
          error: e,
          section: section
        });
      }}
    />
  </div>
)}

      {section.title && <h2 className={styles.mainContentHeading1}>{section.title}</h2>}

      {section.description && (
        <div className={styles.sectionContent}>
          {Array.isArray(section.description) ? (
            section.description.map((paragraph, idx) => (
              <div key={idx} className={styles.dec_pr1}>
                <KeywordParser 
                  description={paragraph}  
                />
              </div>
            ))
          ) : (
            <div className={styles.dec_pr1}>
              <KeywordParser 
                description={section.description}  
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MainContent = ({ contentSections = [], pointsData = []  }) => {
  return (
    <div className={styles.mainContent}>
      {/* Main Content Sections */}
      {contentSections.map((section, index) => (
        <ContentSection 
          key={index} 
          section={section} 
         
        />
      ))}

      {/* Points Section */}
      {pointsData.length > 0 && (
        <div className={styles.pointsSection}>
          {/* <h2 className={styles.sectionTitle}>Key Points</h2> */}
          <div className={styles.pointsGrid}>
            {pointsData.map((point, index) => (
              <div key={index} className={styles.pointCard}>
                {point.title && <h3 className={styles.contentSubheading}>{point.title}</h3>}
                {point.description && (
                  <div className={styles.pointContent}>
                    <KeywordParser 
                      description={point.description} 
                      
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;