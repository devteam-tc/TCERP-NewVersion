'use client';

import { useState, useEffect } from "react";
import ProjectBanner from "./IndustryBanner";
import ProjectDescription from "./IndustryDescription";
import InfoCards from "./InfoCards";
import DemoBanner from "./DemoBanner";
import FAQSection from "./FAQSection";
import IndustryInformation from "./IndustryInformation";
import DownloadWidget from "./DownloadWidget";

// Cache for industry data
const industryDataCache = new Map();

const ProjectDetailsPage = ({ industrySlug }) => {
  const [currentProject, setCurrentProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize Bootstrap only on client side
    import('bootstrap/dist/js/bootstrap.bundle.min').catch(err => 
      console.error('Failed to load Bootstrap:', err)
    );
  }, []);

  useEffect(() => {
    const loadIndustryData = async () => {
      try {
        setError(null);

        // Validate industry slug
        if (!industrySlug) {
          throw new Error('Industry slug is required');
        }
        
        // Check if data is in cache
        if (industryDataCache.has(industrySlug)) {
          setCurrentProject(industryDataCache.get(industrySlug));
          return;
        }

        // Dynamically import the specific industry data
        try {
          const module = await import(`../../../data/industries/${industrySlug}.json`);
          const industryData = module.default;
          
          if (!industryData) {
            throw new Error('Loaded data is empty or undefined');
          }
          
          // Cache the data
          industryDataCache.set(industrySlug, industryData);
          setCurrentProject(industryData);
        } catch (importError) {
          console.error('Import error details:', importError);
          throw new Error(`Failed to import data for ${industrySlug}: ${importError.message}`);
        }
      } catch (error) {
        console.error('Error loading industry data:', error);
        setError(error.message || `Failed to load data for ${industrySlug}`);
      }
    };

    loadIndustryData();
  }, [industrySlug]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (error) {
    return (
      <div className="alert alert-danger m-4" role="alert">
        {error}
      </div>
    );
  }

  if (!currentProject) {
    return null; // Return null instead of loading state
  }

  return (
    <section className="ep-project-details-section pt-20">
      <div className="container">
        <div className="row align-items-start g-4">
          {/* Left column */}
          <div className="col-lg-8">
            <ProjectBanner banner={currentProject.banner} />
            <div className="project-description">
              <ProjectDescription
                title={currentProject.title}
                description={currentProject.description}
                keyPoints={currentProject.keyPoints}
              />
              <InfoCards infoCards={currentProject.infoCards} />
              <FAQSection
                faqData={currentProject.faqData}
                activeIndex={activeIndex}
                toggleAccordion={toggleAccordion}
              />
            </div>
          </div>
          {/* Right column */}
          <div className="col-lg-4">
            <IndustryInformation data={currentProject} />
            <DownloadWidget 
              bgShape={currentProject.downloadWidget?.bgShape}
              image={currentProject.downloadWidget?.image}
              title={currentProject.downloadWidget?.title}
              spanTitle={currentProject.downloadWidget?.spanTitle}
              buttonText={currentProject.downloadWidget?.buttonText}
            />
            <DemoBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
