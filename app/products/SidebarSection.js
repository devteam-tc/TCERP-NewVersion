import React from 'react';
import Image from 'next/image';

const SidebarSection = ({ sidebar, activeIndex, setActiveIndex }) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
      <div className="service-sidebar mr_40">
        <div className="category-widget mb_40">
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

        <div className="download-widget mt-5 mb-5">
          <div
            className="shape"
            style={{ backgroundImage: `url(${sidebar?.downloadWidget?.bgShape})` }}
          ></div>
          <div className="inner-box">
            <figure className="image-box">
              <Image
                src={sidebar?.downloadWidget?.image || ''}
                alt="Book"
                width={200}
                height={300}
              />
            </figure>
            <h4>
              {sidebar?.downloadWidget?.title}
              <span>{sidebar?.downloadWidget?.spanTitle}</span>
            </h4>
            <button type="button" className="theme-btn btn-one">
              {sidebar?.downloadWidget?.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;