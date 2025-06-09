'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const locations = [
  {
    title: 'ERP in Hyderabad',
    image: '/images/contact/hyderabad.jpg',
    description: 'Hyderabad businesses benefit from seamless integration across finance, inventory and CRM. As a provider of manufacturing ERP India, we offer scalable tools through our ERP partner branches.',
    link: '/locations/techcloud-erp-software-in-hyderabad',
  },  
  {
    title: 'ERP in Coimbatore',
    image: '/images/contact/coimbatore.png',
    description: 'We support Coimbatore\'s textile and engineering firms with flexible ERP systems. Discover reliable manufacturing ERP software in India designed to boost compliance and efficiency.',
    link: '/locations/techcloud-erp-software-in-coimbatore',
  },    
  {
    title: 'ERP in Chennai',
    image: '/images/contact/chennai.png',
    description: 'Our ERP in Chennai supports high-volume manufacturing and trading businesses with real-time visibility. Experience the best ERP software in India powered by advanced cloud-based ERP software in India.',
    link: '/locations/techcloud-erp-software-in-chennai',
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
              style={{ objectFit: 'cover' }}
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