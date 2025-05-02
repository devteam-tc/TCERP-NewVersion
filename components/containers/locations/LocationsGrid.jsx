'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const locations = [
  {
    title: 'ERP in Ahmedabad',
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=updating',
    description: 'SourcePro Infotech Pvt. Ltd., with 20 years of expertise, offers top ERP solutions in Ahmedabad...',
    link: '/locations/ahmedabad',
  },
  {
    title: 'ERP in Chennai',
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=updating',
    description: 'ERP software in Chennai acts as the backbone for modern business management...',
    link: '/locations/chennai',
  },
  {
    title: 'ERP in Hyderabad',
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=updating',
    description: 'Transform your business operations with our cutting-edge ERP solutions in Hyderabad, the tech hub of India...',
    link: '/locations/hyderabad',
  },
  {
    title: 'ERP in Coimbatore',
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=updating',
    description: 'Streamline your manufacturing and textile business with our specialized ERP solutions in Coimbatore...',
    link: '/locations/coimbatore',
  },
  {
    title: 'ERP in Indore',
    image: 'https://dummyimage.com/300x200/cccccc/000000&text=updating',
    description: 'Enhance your business efficiency with our comprehensive ERP solutions in Indore, the commercial capital of Madhya Pradesh...',
    link: '/locations/indore',
  }
];

export default function LocationsGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedLocations, setLoadedLocations] = useState([]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoadedLocations(locations);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="locations-page__grid">
      {isLoading ? (
        // Shimmer loading state
        Array(5).fill(0).map((_, idx) => (
          <div className="locations-page__card shimmer" key={idx}>
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-description"></div>
            <div className="shimmer-button"></div>
          </div>
        ))
      ) : (
        // Actual content
        loadedLocations.map((loc, idx) => (
          <div className="locations-page__card" key={idx}>
            <Image
              src={loc.image}
              alt={loc.title}
              width={300}
              height={200}
              className="locations-page__card-image"
            />
            <h3>{loc.title}</h3>
            <p>{loc.description}</p>
            <Link href={loc.link} className="locations-page__card-button">
              Visit this page
            </Link>
          </div>
        ))
      )}
    </div>
  );
} 