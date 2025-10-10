import Image from 'next/image';
import Header from '../../../components/layout/header/Header';
import PageHeader from '../../../components/layout/PageHeader';
import { FaHome } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import WhyChooseUs from '../../../components/containers/locations/WhyChooseUs';
import ContactForm from '../../../components/containers/locations/ContactForm';
import Footer from '../../../components/layout/footer/Footer';
import metaInfo from '../../utils/metaInfo.json';
import CustomCursor from '../../../components/layout/CustomCursor';

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
  'coimbatore': 'coimbatore',

  // Bangalore URLs
  'techcloud-erp-software-in-bangalore': 'bangalore',
  'bangalore': 'bangalore',
  
  // Kolkata URLs
  'techcloud-erp-software-in-kolkata': 'kolkata',
  'kolkata': 'kolkata',

  // Mumbai URLs
  'techcloud-erp-software-in-mumbai': 'mumbai',
  'mumbai': 'mumbai',

  // Kochi URLs
  'techcloud-erp-software-in-kochi': 'kochi',
  'kochi': 'kochi',

  // Delhi URLs
  'techcloud-erp-software-in-delhi': 'delhi',
  'delhi': 'delhi',

  // Ahmedabad URLs
  'techcloud-erp-software-in-ahmedabad': 'ahmedabad',
  'ahmedabad': 'ahmedabad',

  // Vizag URLs
  'techcloud-erp-software-in-vizag': 'vizag',
  'vizag': 'vizag',

  // Bangalore URLs
  'techcloud-erp-software-in-bangalore': 'bangalore',
  'bangalore': 'bangalore',

  // brazil URLs
  'techcloud-erp-software-in-UAE': 'UAE',
  'UAE': 'UAE',
 
  // dubai URLs
  'techcloud-erp-software-in-dubai': 'dubai',
  'dubai': 'dubai', 

  // bahrain URLs
  'techcloud-erp-software-in-bahrain': 'bahrain',
  'bahrain': 'bahrain',

  // Oman URLs
  'techcloud-erp-software-in-Oman': 'Oman',
  'Oman': 'Oman',

  // Qatar URLs
  'techcloud-erp-software-in-Qatar': 'Qatar',
  'Qatar': 'Qatar',

  // Kuwait URLs
  'techcloud-erp-software-in-Kuwait': 'Kuwait',
  'Kuwait': 'Kuwait',
 
  //Oman URLs
  'techcloud-erp-software-in-Oman': 'Oman',
  'Oman': 'Oman',

  //Qatar URLs
  'techcloud-erp-software-in-Qatar': 'Qatar',
  'Qatar': 'Qatar',

  //USA URLs
  'techcloud-erp-software-in-USA': 'USA',
  'USA': 'USA',
};

// Location data - you might want to move this to a separate data file
const locationData = {
  chennai: {
    title: 'Leading ERP Software in Chennai for Modern Businesses',
    heading:'Best ERP Software In Chennai',
    image: '/images/contact/chennai.webp',
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
    title: 'Best ERP software in Hyderabad to Empower Your Business',
    heading:'Best ERP Software In Hyderabad',
    image: '/images/contact/hyderabad.webp',
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
    title: 'Trusted ERP Software in Coimbatore for Your Business',
    heading:'Best ERP Software In Coimbatore',
    image: '/images/contact/coimbatore.webp',
    description: 'Tech Cloud ERP offers advanced and customizable ERP software in Coimbatore, designed to streamline operations across manufacturing, trading, retail  and service sectors. As a leading ERP software company in Coimbatore, we provide scalable solutions that help businesses enhance productivity, reduce costs and gain real-time insights. Our ERP Coimbatore solutions are tailored to meet the unique needs of both startups and large enterprises, ensuring seamless integration and efficient workflow management. Choose Tech Cloud ERP, a trusted ERP company in Coimbatore, to empower your business with innovative ERP solutions and drive sustainable growth.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  }, 
  kolkata: {
    title: 'Top ERP Software in Kolkata to Transform Your Business',
    heading: 'Best ERP in Kolkata',
    image: '/images/contact/kolkata.webp',
    description: 'Tech Cloud ERP offers advanced cloud-based ERP software in Kolkata, designed to meet the needs of trading, logistics, and manufacturing firms. Our ERP in Kolkata empowers businesses with seamless integration across finance, HR, and operations, helping you reduce costs and boost efficiency. From startups to established enterprises, our scalable ERP solutions provide real-time visibility and control. Partner with Tech Cloud ERP in Kolkata to drive smarter growth and long-term success.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  mumbai: {
    title: 'Best ERP Software in Mumbai to Empower Your Business',
    heading: 'Best ERP Software In Mumbai',
    image: '/images/contact/mumbai.webp',
    description: 'Tech Cloud ERP delivers the best cloud-based ERP software in Mumbai, built for trading, manufacturing and service-driven enterprises. Our ERP in Mumbai helps businesses streamline finance, inventory, HR and operations through a fully integrated system. With scalable solutions for both startups and large corporations, we provide real-time insights, improved efficiency and complete control. Choose Tech Cloud ERP in Mumbai to accelerate growth and stay ahead in the city’s competitive business environment.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  kochi: {
    title: 'Trusted ERP Software in Kochi for Seamless Operations',
    heading: 'Best ERP Software In Kochi',
    image: '/images/contact/kochin.webp',
    description: 'Tech Cloud ERP is the best Cloud-based ERP Software in India which provides a perfect ERP Software for manufacturing, trading and logistics businesses. Being one of the finest ERP software companies in Kochi, we enable you to simplify operations, enhance productivity and lower capital expenditures through a fully centralized system. Our scalable ERP Kochi applications are made to fit start-ups and big corporates to offer you real-time insights and more control.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  delhi: {
    title: 'Best ERP software in Delhi to Empower Your Business',
    heading: 'Best ERP Software In Delhi',
    image: '/images/contact/delhi.webp',
    description: 'Tech Cloud ERP is the best Cloud-based ERP Software in India which provides a perfect ERP Software for manufacturing, trading and service-based businesses. Being one of the finest ERP software companies in Delhi, we enable you to simplify operations, enhance productivity and reduce capital expenditures through a fully centralized system. Our scalable ERP Delhi applications are made to fit start-ups and big corporates to offer you real-time insights and more control.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  ahmedabad: {
    title: 'Scalable ERP Software in Ahmedabad for Modern Enterprises',
    heading: 'Best ERP Software In Ahmedabad',
    image: '/images/contact/ahmedabad.webp',
    description: 'At Tech Cloud ERP, we deliver advanced cloud-based ERP solutions in Ahmedabad designed to accelerate business growth and operational excellence. Our ERP in Ahmedabad unifies all core functions from finance, sales, procurement, inventory, HR to production into a single, intelligent platform. With real-time analytics, automated workflows and seamless integrations, businesses gain full visibility, reduce redundancies and scale with confidence.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  vizag: {
    title: 'Scalable ERP Software in Vizag for Modern Enterprises',
    heading: 'Best ERP Software In Vizag',
    image: '/images/contact/vizag.webp',
    description: 'Tech Cloud ERP offers the best cloud-based ERP software in Vizag, tailored for manufacturing, trading and port-related industries. Our ERP in Vizag helps businesses streamline finance, inventory, HR and operations through a centralized platform. With scalable solutions for startups and large enterprises alike, we deliver real-time insights, enhanced productivity and smarter decision-making. Choose Tech Cloud ERP in Vizag to strengthen your operations and drive sustainable growth in the city’s evolving business landscape.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  bangalore: {
    title: 'Scalable ERP Software in Bangalore for Modern Enterprises',
    heading: 'Best ERP Software In Bangalore',
    image: '/images/contact/bangalore.webp',
    description: 'Tech Cloud ERP delivers the best cloud-based ERP software in Bangalore, designed to support the city’s thriving IT, startup and manufacturing industries. With our ERP in Bangalore, businesses can streamline finance, HR, inventory and operations through a fully centralized system. Our scalable ERP applications are built to suit startups as well as large enterprises, offering real-time insights, improved efficiency and smarter decision-making. Choose Tech Cloud ERP in Bangalore to drive growth, innovation and long-term success.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  UAE: {
    title: 'Scalable ERP Software in UAE for Modern Enterprises',
    heading: 'Best ERP Software In UAE',
    image: '/images/contact/uae.webp',
    description: 'UAE’s growing business environment thrives on efficiency, innovation and digital transformation. Our cloud-based ERP in UAE helps enterprises automate operations, optimize resources and enhance decision-making. With real-time analytics and scalability, it supports companies of all sizes. Streamline finance, HR and inventory seamlessly under one platform. Tech Cloud ERP empowers UAE businesses to achieve agility and operational excellence.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  // europe: {
  //   title: 'Scalable ERP Software in Europe for Modern Enterprises',
  //   heading: 'Best ERP Software In Europe',
  //   image: '/images/contact/europe.webp',
  //   description: 'Tech Cloud ERP delivers the most reliable ERP software in Europe built for businesses that value compliance, innovation and efficiency. Our cloud ERP in Europe unifies finance, supply chain and operations across multiple regions, ensuring data accuracy and seamless collaboration. Designed for manufacturers, traders and service providers, it enhances productivity with automated workflows and real-time insights. With multilingual and multicurrency support, Tech Cloud ERP empowers European enterprises to scale globally while staying compliant with regional business regulations.',
  //   features: [
  //     'Centralized Dashboard',
  //     'Customizable Modules',
  //     'Multi-Device Accessibility',
  //     'Real-Time Analytics',
  //     'Cloud-Based Deployment'
  //   ]
  // },
  dubai: {
    title: 'Scalable ERP Software in Dubai for Modern Enterprises',
    heading: 'Best ERP Software In Dubai',
    image: '/images/contact/dubai.webp',
    description: 'Dubai’s competitive economy demands agility, automation and smarter business control. Our ERP software in Dubai integrates finance, HR, inventory and operations on a unified cloud platform. Gain real-time insights to make informed decisions and drive productivity. Built for startups and large enterprises alike, it simplifies complex workflows. Tech Cloud ERP helps Dubai businesses grow with precision and efficiency.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  }
  ,
  bahrain: {
    title: 'Scalable ERP Software in Bahrain for Modern Enterprises',
    heading: 'Best ERP Software In Bahrain',
    image: '/images/contact/bahrain.webp',
    description: 'Bahrain’s fast-evolving industries require flexible and efficient management tools. Our ERP system in Bahrain streamlines business processes across finance, HR and supply chain management. With automation and centralized control, companies can boost performance and reduce manual tasks. It enhances data accuracy and supports smarter decisions. Tech Cloud ERP helps Bahraini enterprises stay competitive and future-ready.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  Kuwait: {
    title: 'Scalable ERP Software in Kuwait for Modern Enterprises',
    heading: 'Best ERP Software In Kuwait',
    image: '/images/contact/kuwait.webp',
    description: 'Kuwait’s growing economy from oil and gas to retail demand integrated business operations. Our cloud ERP in Kuwait connects finance, inventory and HR to ensure visibility and process automation. It simplifies workflows while improving productivity and resource utilization. Real-time insights enable strategic decision-making and operational growth. Tech Cloud ERP empowers Kuwaiti businesses to scale efficiently and confidently.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  Oman: {
    title: 'Scalable ERP Software in Oman for Modern Enterprises',
    heading: 'Best ERP Software In Oman',
    image: '/images/contact/oman.webp',
    description: 'Oman’s developing economy depends on innovation and seamless management systems. Our ERP software in Oman brings all business functions—finance, HR and supply chain—into one centralized platform. It automates daily operations and enhances visibility across departments. With real-time analytics, companies can optimize efficiency and ensure compliance. Tech Cloud ERP drives smarter business performance across Oman’s growing sectors.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  }
  ,
  Qatar: {
    title: 'Scalable ERP Software in Qatar for Modern Enterprises',
    heading: 'Best ERP Software In Qatar',
    image: '/images/contact/qatar.webp',
    description: 'Qatar’s enterprises aim for precision, performance and long-term sustainability. Our ERP in Qatar unifies finance, HR and operations with intelligent automation and real-time reporting. It reduces manual work, enhances collaboration and improves decision accuracy. Designed for growing organizations, it supports scalability and compliance. Tech Cloud ERP helps Qatar businesses streamline workflows and achieve consistent growth.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  }
  ,
  USA: {
    title: 'Scalable ERP Software in USA for Modern Enterprises',
    heading: 'Best ERP Software In USA',
    image: '/images/contact/usa.webp',
    description: 'The USA’s dynamic industries demand automation, scalability and powerful business control. Our cloud ERP in USA centralizes finance, HR, inventory and operations into one unified solution. It helps businesses analyse data in real time, reduce costs and increase efficiency. Scalable for startups to large corporations, it ensures consistent performance. Tech Cloud ERP supports innovation and growth across all American industries.',
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

export async function generateMetadata({ params }) {
  const { slug } = params;
  const dataKey = urlToDataMap[slug];
  const location = locationData[dataKey];
  const meta = metaInfo.locations?.[slug];
  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: 'website',
        images: location ? [
          {
            url: location.image,
            width: 1200,
            height: 630,
            alt: meta.title,
            type: 'image/webp'
          }
        ] : []
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
        images: location ? [location.image] : []
      }
    };
  }
  if (!location) {
    return {
      title: 'Location Not Found | Tech Cloud ERP',
      description: 'Requested location page could not be found.',
    };
  }
  return {
    title: `${location.title} | Tech Cloud ERP`,
    description: location.description,
    keywords: `ERP ${dataKey}, ERP software ${dataKey}, Tech Cloud ERP ${dataKey}, ERP in ${dataKey}`,
    openGraph: {
      title: `${location.title} | Tech Cloud ERP`,
      description: location.description,
      type: 'website',
      images: [
        {
          url: location.image,
          width: 1200,
          height: 630,
          alt: location.title,
          type: 'image/webp'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${location.title} | Tech Cloud ERP`,
      description: location.description,
      images: [location.image]
    }
  };
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
    { label: location.heading, link: null }
  ];

  return (
    <main>
      <Header />
      <PageHeader title={location.heading} breadcrumbs={breadcrumbs} />
      
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
            <h1> {location.title}</h1>
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
      <WhyChooseUs locationKey={dataKey} />
 
      <Footer />
      <CustomCursor />
    </main>
  );
} 