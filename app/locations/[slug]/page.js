import Image from 'next/image';
import Header from '../../../components/layout/header/Header';
import PageHeader from '../../../components/layout/PageHeader';
import { FaHome } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import WhyChooseUs from '../../../components/containers/locations/WhyChooseUs';
import ContactForm from '../../../components/containers/locations/ContactForm';
import Footer from '../../../components/layout/footer/Footer';

// URL to data mapping
const urlToDataMap = {
  // Hyderabad URLs
  'techcloud-erp-software-in-hyderabad': 'hyderabad',
  'hyderabad': 'hyderabad',
  
  // Chennai URLs
  'techcloud-erp-software-in-chennai': 'chennai',
  'chennai': 'chennai',
  
  // Coimbatore URLs
  'techcloud-erp-software-in-coimbatore': 'coimbatore',
  'coimbatore': 'coimbatore'
};

// Location data - you might want to move this to a separate data file
const locationData = {
  chennai: {
    title: 'Best ERP Software In Chennai',
    image: '/images/contact/chennai.png',
    description: 'Tech Cloud ERP, a trusted name in ERP software development, now proudly provides its industry-leading solutions in Chennai. As a leading ERP company in Chennai, we empower businesses across manufacturing, retail, trading and other sectors with smart, scalable ERP software. With our feature-rich and customizable ERP platform, organizations in Chennai can now optimize operations, reduce costs and accelerate growth—all from one centralized system. Whether you are a small business or a large enterprise, our ERP software in Chennai is tailored to your unique operational needs.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  hyderabad: {
    title: 'Best ERP Software In Hyderabad',
    image: '/images/contact/hyderabad.jpg',
    description: 'Tech Cloud ERP is the best Cloud-based ERP Software in India which provides a perfect ERP Software for Manufacturing and trading business. Being the finest in ERP software companies in Hyderabad, we enable you to simplify the operations, enhance productivity, and lower the capital expenditures through a fully centralized system. Our scalable ERP Hyderabad applications are made to fit start-ups and big corporates to offer you real-time insights and more control. Select Tech Cloud ERP for the top ERP software in Hyderabad to power your growth.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  coimbatore: {
    title: 'Best ERP Software In Coimbatore',
    image: '/images/contact/coimbatore.png',
    description: 'Tech Cloud ERP offers advanced and customizable ERP software in Coimbatore, designed to streamline operations across manufacturing, trading, retail  and service sectors. As a leading ERP software company in Coimbatore, we provide scalable solutions that help businesses enhance productivity, reduce costs and gain real-time insights. Our ERP Coimbatore solutions are tailored to meet the unique needs of both startups and large enterprises, ensuring seamless integration and efficient workflow management. Choose Tech Cloud ERP, a trusted ERP company in Coimbatore, to empower your business with innovative ERP solutions and drive sustainable growth.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  }
};

// This function tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  return Object.keys(urlToDataMap).map((slug) => ({
    slug,
  }));
}

export default function LocationPage({ params }) {
  const { slug } = params;
  const dataKey = urlToDataMap[slug];
  const location = locationData[dataKey];

  if (!location) {
    return <div>Location not found</div>;
  }

  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Locations', link: '/locations' },
    { label: location.title, link: null }
  ];

  return (
    <main>
      <Header />
      <PageHeader title={location.title} breadcrumbs={breadcrumbs} />
      
      <div className="location-detail-page">
        <div className="location-detail-page__hero">
          <Image
            src={location.image}
            alt={location.title}
            width={800}
            height={400}
            className="location-detail-page__hero-image"
          />
        </div>

        <div className="location-detail-page__content">
          <div className="location-detail-page__description">
            <h2>About {location.title}</h2>
            <p>{location.description}</p>
          </div>

          <div className="location-detail-page__features">
            <h3>Key Features</h3>
            <ul>
              {location.features.map((feature, index) => (
                <li key={index}>
                  <BsCheckCircle style={{ marginRight: '8px', color: '#ef5226' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <ContactForm />
      
      <Footer />
    </main>
  );
} 