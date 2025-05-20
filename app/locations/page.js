'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/layout/header/Header';
import PageHeader from '../../components/layout/PageHeader';
import { FaHome } from 'react-icons/fa';
import Integrations from "../../components/containers/locations/Integrations"
import Footer from '../../components/layout/footer/Footer';
import Support from '../../components/containers/locations/Support';
import LocationsGrid from '../../components/containers/locations/LocationsGrid';

const locations = [
   
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
  
];

export default function LocationsPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Locations', link: null }
  ];

  return (
    <main>
      <Header/>
      <PageHeader title="Locations" breadcrumbs={breadcrumbs}/>
      <div className="locations-page">
        <Integrations/>
        <LocationsGrid/>
        <Support/>
        <Footer/>
      </div>
    </main>
  );
}
