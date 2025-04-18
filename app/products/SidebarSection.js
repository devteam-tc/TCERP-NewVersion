import React from 'react';
import DownloadWidget from './DownloadWidget';
import { useMediaQuery } from 'react-responsive';

const SidebarSection = ({ sidebar, activeIndex, setActiveIndex }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  // Log the download widget data to verify it's being passed correctly
  console.log('Sidebar downloadWidget:', sidebar?.downloadWidget);

  return (
    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
      <div className="service-sidebar mr_40 custom-sidebar-wrapper">
        <div className="category-widget mb_40 ">
          <ul className="category-list clearfix">
            {sidebar?.categories.map((cat, index) => (
              <li key={cat.href}>
                <a
                  href={cat.href}
                  className={index === activeIndex ? 'current' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(index);
                  }}
                >
                  {cat.title} <i className="icon-42"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Only render on desktop */}
        {!isMobile && <DownloadWidget widget={sidebar?.downloadWidget} />}
      </div>
    </div>
  );
};

export default SidebarSection;
