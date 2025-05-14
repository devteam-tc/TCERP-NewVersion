import Image from 'next/image';
import Header from '../../../components/layout/header/Header';
import PageHeader from '../../../components/layout/PageHeader';
import { FaHome } from 'react-icons/fa';
import WhyChooseUs from '../../../components/containers/locations/WhyChooseUs';
import ContactForm from '../../../components/containers/locations/ContactForm';
import Footer from '../../../components/layout/footer/Footer';
// Location data - you might want to move this to a separate data file
const locationData = {
  ahmedabad: {
    title: 'ERP in Ahmedabad',
    image: 'https://dummyimage.com/800x400/cccccc/000000&text=Ahmedabad',
    description: 'SourcePro Infotech Pvt. Ltd., with 20 years of expertise, offers top ERP solutions in Ahmedabad. Our solutions help businesses streamline operations, improve efficiency, and drive growth in the vibrant business landscape of Ahmedabad.',
    features: [
      'Customized ERP solutions for Ahmedabad businesses',
      'Local support and implementation team',
      'Industry-specific modules',
      '24/7 customer support'
    ]
  },
  chennai: {
    title: 'ERP in Chennai',
    image: 'https://dummyimage.com/800x400/cccccc/000000&text=Chennai',
    description: 'ERP software in Chennai acts as the backbone for modern business management. Our solutions are tailored to meet the unique needs of Chennai\'s diverse business ecosystem.',
    features: [
      'Manufacturing-focused ERP solutions',
      'Local implementation support',
      'Multi-language support',
      'Cloud and on-premise options'
    ]
  },
  hyderabad: {
    title: 'ERP in Hyderabad',
    image: 'https://dummyimage.com/800x400/cccccc/000000&text=Hyderabad',
    description: 'Transform your business operations with our cutting-edge ERP solutions in Hyderabad, the tech hub of India.',
    features: [
      'Tech-focused ERP solutions',
      'Local implementation team',
      'Advanced analytics integration',
      'Custom development services'
    ]
  },
  coimbatore: {
    title: 'ERP in Coimbatore',
    image: 'https://dummyimage.com/800x400/cccccc/000000&text=Coimbatore',
    description: 'Streamline your manufacturing and textile business with our specialized ERP solutions in Coimbatore.',
    features: [
      'Manufacturing-specific modules',
      'Local support team',
      'Inventory management solutions',
      'Production planning tools'
    ]
  },
  indore: {
    title: 'ERP in Indore',
    image: 'https://dummyimage.com/800x400/cccccc/000000&text=Indore',
    description: 'Enhance your business efficiency with our comprehensive ERP solutions in Indore, the commercial capital of Madhya Pradesh.',
    features: [
      'Retail-focused solutions',
      'Local implementation support',
      'Multi-store management',
      'Inventory optimization'
    ]
  },
  illinois: {
    title: 'ERP in Illinois',
    image: 'https://dummyimage.com/800x400/cccccc/000000&text=Illinois',
    description: 'Empower your business with our advanced ERP solutions in Illinois, serving the heart of American industry.',
    features: [
      'US-specific compliance features',
      'Local support team',
      'Multi-currency support',
      'Advanced reporting tools'
    ]
  }
};

// This function tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({
    slug,
  }));
}

export default function LocationPage({ params }) {
  const { slug } = params;
  const location = locationData[slug];

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
                <li key={index}>{feature}</li>
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