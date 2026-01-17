import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/layout/header/Header';
import PageHeader from '../../../components/layout/PageHeader';
import { FaHome } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import WhyChooseUs from '../../../components/containers/locations/WhyChooseUs';
import Footer from '../../../components/layout/footer/Footer';
import metaInfo from '../../utils/metaInfo.json';
import CustomCursor from '../../../components/layout/CustomCursor';
<<<<<<< HEAD
import { locationData } from '../../../data/location';
=======
 
>>>>>>> 61b7ab182e6fa8efa1dfad8622b8749b7a6ec29f



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

  // Oman URLs
  'techcloud-erp-software-in-oman': 'Oman',
  'oman': 'Oman',
  'techcloud-erp-software-in-Oman': 'Oman',

  // Vizag URLs
  'techcloud-erp-software-in-vizag': 'vizag',
  'vizag': 'vizag',

<<<<<<< HEAD
  // UAE URLs
  'techcloud-erp-software-in-uae': 'uae',
  'uae': 'uae',
 
  // dubai URLs
  'techcloud-erp-software-in-dubai': 'dubai',
  'dubai': 'dubai', 
=======
  // Bangalore URLs
  'techcloud-erp-software-in-bangalore': 'bangalore',
  'bangalore': 'bangalore',

>>>>>>> 61b7ab182e6fa8efa1dfad8622b8749b7a6ec29f

 
  // Other country URLs
  'techcloud-erp-software-in-bahrain': 'bahrain',
  'bahrain': 'bahrain',
<<<<<<< HEAD

  // Oman URLs
  'techcloud-erp-software-in-oman': 'oman',
  'oman': 'oman',

  // Qatar URLs
  'techcloud-erp-software-in-qatar': 'qatar',
  'qatar': 'qatar',

  // kuwait URLs (all lowercase)
  'techcloud-erp-software-in-kuwait': 'kuwait',
  'kuwait': 'kuwait',
 
  // USA URLs (all lowercase)
  'techcloud-erp-software-in-usa': 'usa',
  'usa': 'usa',
  
  // Additional emirates
  'techcloud-erp-software-in-abu-dhabi': 'abu-dhabi',
  'abu-dhabi': 'abu-dhabi',
  'techcloud-erp-software-in-sharjah': 'sharjah',
  'sharjah': 'sharjah',
  'techcloud-erp-software-in-ajman': 'ajman',
  'ajman': 'ajman'
};

// Location data is now imported from data/location directory
=======
  'techcloud-erp-software-in-oman': 'Oman',
  'Oman': 'Oman',
  'techcloud-erp-software-in-qatar': 'Qatar',
  'Qatar': 'Qatar',
  'techcloud-erp-software-in-kuwait': 'Kuwait',
  'Kuwait': 'Kuwait',
  'techcloud-erp-software-in-usa': 'USA',
  'USA': 'USA',



  // UAE and its emirates
  'uae': 'UAE',
  'techcloud-erp-software-in-uae': 'UAE',
  'dubai': 'dubai',
  'techcloud-erp-software-in-dubai': 'dubai',
  'abudhabi': 'abudhabi',
  'techcloud-erp-software-in-abudhabi': 'abudhabi',
  'techcloud-erp-software-in-abu-dhabi': 'abudhabi',  // Added hyphenated version
  'sharjah': 'sharjah',
  'techcloud-erp-software-in-sharjah': 'sharjah',
  'ajman': 'ajman',
  'techcloud-erp-software-in-ajman': 'ajman'
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
  title: 'Best ERP Software in UAE',
  heading: 'ERP Solutions in UAE',
  image: '/images/contact/uae.webp',
  description: 'UAE’s businesses thrive on efficiency and innovation. Our ERP helps streamline operations, manage resources, and make smarter decisions.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ],
  emirates: [
    {
      name: 'Dubai',
      slug: 'dubai',
      image: '/images/contact/dubai.webp',
      description: 'Dubai is a hub for trade and innovation. Our ERP empowers businesses to optimize workflows, improve productivity and make data-driven decisions.'
    },
    {
      name: 'Abu Dhabi',
      slug: 'abu-dhabi',
      image: '/images/contact/abudhabi.webp',
      description: 'Abu Dhabi’s growing business sector demands efficiency. Our ERP helps organizations streamline operations, manage resources and drive smart growth.'
    },
    {
      name: 'Sharjah',
      slug: 'sharjah',
      image: '/images/contact/sharjah.webp',
      description: 'Sharjah’s diverse industries need reliable solutions. Our ERP unifies finance, operations and inventory, helping businesses grow with confidence.'
    },
    {
      name: 'Ajman',
      slug: 'ajman',
      image: '/images/contact/ajman.webp',
      description: 'Ajman’s expanding business market thrives on efficiency. Our ERP simplifies daily operations, enhances accuracy and supports sustainable growth.'
    }
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
    description: 'Dubai is a global business hub known for its speed and innovation. Our ERP in Dubai connects finance, operations and supply chain to help companies work smarter and scale faster. Gain real-time insights and manage your business seamlessly all in one platform.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
    abudhabi: {
    title: 'Scalable ERP Software in Dubai for Modern Enterprises',
    heading: 'Best ERP Software In Dubai',
    image: '/images/contact/dubai.webp',
    description: 'Abu Dhabi’s growing economy demands efficiency, innovation and precision. Our ERP in Abu Dhabi streamlines operations across finance, inventory and HR, helping businesses achieve better control and visibility. Manage growth confidently with a system built for modern enterprises.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
//  sharjah: {
//     title: 'Scalable ERP Software in Dubai for Modern Enterprises',
//     heading: 'Best ERP Software In Dubai',
//     image: '/images/contact/dubai.webp',
//     description: 'Sharjah’s economy thrives on manufacturing, trade and logistics. Our ERP in Sharjah simplifies complex workflows, automates routine tasks and ensures complete data accuracy. Empower your business with an ERP solution that supports productivity and long-term growth.',
//     features: [
//       'Centralized Dashboard',
//       'Customizable Modules',
//       'Multi-Device Accessibility',
//       'Real-Time Analytics',
//       'Cloud-Based Deployment'
//     ]
//   },
  // ajman: {
  //   title: 'Scalable ERP Software in Dubai for Modern Enterprises',
  //   heading: 'Best ERP Software In Dubai',
  //   image: '/images/contact/dubai.webp',
  //   description: 'Ajman’s business sector is rapidly expanding across manufacturing and services. Our ERP in Ajman Our ERP in Ajman integrates key processes from finance to inventory to boost efficiency and decision-making and manage growth effectively through automation and real-time insights.',
  //   features: [
  //     'Centralized Dashboard',
  //     'Customizable Modules',
  //     'Multi-Device Accessibility',
  //     'Real-Time Analytics',
  //     'Cloud-Based Deployment'
  //   ]
  // },
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
  },
  // dubai: {
  //   title: 'Best ERP Software in Dubai',
  //   heading: 'ERP Solutions in Dubai',
  //   image: '/images/contact/dubai.webp',
  //   description: 'Dubais competitive economy demands agility, automation and smarter business control. Our ERP software in Dubai integrates finance, HR, inventory and operations on a unified cloud platform. Gain real-time insights to make informed decisions and drive productivity. Built for startups and large enterprises alike, it simplifies complex workflows. Tech Cloud ERP helps Dubai businesses grow with precision and efficiency.',
  //   features: [
  //     'Centralized Dashboard',
  //     'Customizable Modules',
  //     'Multi-Device Accessibility',
  //     'Real-Time Analytics',
  //     'Cloud-Based Deployment'
  //   ]
  // },
  abudhabi: {
    title: 'Best ERP Software in Abu Dhabi',
    heading: 'ERP Solutions in Abu Dhabi',
    image: '/images/contact/abudhabi.webp',
    description: 'Abu Dhabi growing economy requires robust, scalable ERP solutions. Our ERP software in Abu Dhabi streamlines business processes, enhances operational efficiency, and provides real-time data insights. Designed to meet the unique needs of businesses in the capital, our solution supports growth and innovation across all sectors.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  sharjah: {
    title: 'Best ERP Software in Sharjah',
    heading: 'ERP Solutions in Sharjah',
    image: '/images/contact/sharjah.webp',
    description: 'Sharjah’s economy thrives on manufacturing, trade and logistics. Our ERP in Sharjah simplifies complex workflows, automates routine tasks and ensures complete data accuracy. Empower your business with an ERP solution that supports productivity and long-term growth.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  },
  ajman: {
    title: 'Best ERP Software in Ajman',
    heading: 'ERP Solutions in Ajman',
    image: '/images/contact/ajman.webp',
    description: 'Ajman’s business sector is rapidly expanding across manufacturing and services. Our ERP in Ajman Our ERP in Ajman integrates key processes from finance to inventory to boost efficiency and decision-making and manage growth effectively through automation and real-time insights.',
    features: [
      'Centralized Dashboard',
      'Customizable Modules',
      'Multi-Device Accessibility',
      'Real-Time Analytics',
      'Cloud-Based Deployment'
    ]
  }
  
};
>>>>>>> 61b7ab182e6fa8efa1dfad8622b8749b7a6ec29f


// This function tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
<<<<<<< HEAD
  // Get all possible slugs from urlToDataMap and locationData
  const allSlugs = [
    // Add all keys from urlToDataMap
    ...Object.keys(urlToDataMap),
    
    // Add all location keys from locationData in both formats
    ...Object.keys(locationData).map(key => `techcloud-erp-software-in-${key}`),
    ...Object.keys(locationData)
  ];
  
  // Remove duplicates and create params array
  const uniqueSlugs = [...new Set(allSlugs)];
  
  // Return the params in the required format
  return uniqueSlugs.map(slug => ({
    slug: slug.toLowerCase() // Ensure all slugs are lowercase for consistency
=======
  // Get all slugs from urlToDataMap
  const allSlugs = [...new Set([
    // Include all keys from urlToDataMap
    ...Object.keys(urlToDataMap),
    // Explicitly include all UAE emirate slugs to ensure they're pre-rendered
    'techcloud-erp-software-in-dubai',
    'techcloud-erp-software-in-abu-dhabi',
    'techcloud-erp-software-in-abudhabi',
    'techcloud-erp-software-in-sharjah',
    'techcloud-erp-software-in-ajman',
    'dubai',
    'abudhabi',
    'abu-dhabi',
    'sharjah',
    'ajman'
  ])];

  return allSlugs.map((slug) => ({
    slug,
>>>>>>> 61b7ab182e6fa8efa1dfad8622b8749b7a6ec29f
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
  
  // Normalize the slug for consistent matching
  const normalizedSlug = slug.toLowerCase();
  let dataKey = null;
  
  // Create a case-insensitive version of the urlToDataMap
  const lowerCaseUrlMap = Object.entries(urlToDataMap).reduce((acc, [key, value]) => {
    acc[key.toLowerCase()] = value;
    return acc;
  }, {});
  
  // Try exact match first (case-insensitive)
  if (lowerCaseUrlMap[normalizedSlug]) {
    dataKey = lowerCaseUrlMap[normalizedSlug];
  }
  // Try with full prefix if not found
  else if (normalizedSlug.startsWith('techcloud-erp-software-in-')) {
    // Extract the location part from the full URL
    const locationKey = normalizedSlug.replace('techcloud-erp-software-in-', '');
    dataKey = lowerCaseUrlMap[locationKey] || locationKey; // Try both with and without mapping
  }
  // Try with simple slug
  else {
    dataKey = normalizedSlug;
  }
  
  // If we have a data key, try to get the location data
  const location = locationData[dataKey];

  // If location not found, try to find a matching location in the data
  if (!location) {
    // Try to find a matching location in the data
    const locationKeys = Object.keys(locationData);
    const matchingKey = locationKeys.find(key => 
      key.toLowerCase() === dataKey?.toLowerCase() ||
      `techcloud-erp-software-in-${key}`.toLowerCase() === normalizedSlug
    );
    
    if (matchingKey) {
      if (typeof window !== 'undefined') {
        window.location.href = `/locations/techcloud-erp-software-in-${matchingKey}`;
        return <div>Redirecting to correct URL...</div>;
      }
    }
    
    return <div>Location not found. Please check the URL and try again.</div>;
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
          {/* <div className="location-detail-page__features">
            <h3>Key Features</h3>
            <ul>
              {location.features.map((feature, index) => (
                <li key={index}>
                  <BsCheckCircle style={{ marginRight: '8px', color: '#ef5226' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div> */}
      <div className="location-detail-page__features">
          <h3>Key Features</h3>
          <ul className="features-list">
            {location.features && location.features.map((feature, index) => (
              <li key={index}>
                <BsCheckCircle style={{ marginRight: '8px', color: '#ef5226' }} />
                {feature}
              </li>
            ))}
          </ul>
      </div>
        </div>
      </div>
<<<<<<< HEAD
      {dataKey.toLowerCase() === 'uae' && (
=======
      {dataKey === 'UAE' && (
>>>>>>> 61b7ab182e6fa8efa1dfad8622b8749b7a6ec29f
        <div className="emirates-section" style={{ padding: '4rem 1rem', background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', color: '#1a365d' }}>
              Our Presence in the UAE
            </h2>
            <div className="locations-page__grid">
              {location.emirates && location.emirates.map((emirate, index) => (
                <div key={index} className="locations-page__card">
                  <div className="locations-page__card-image">
                    <Image
                      src={emirate.image}
                      alt={emirate.name}
                      width={300}
                      height={200}
                      className="locations-page__card-img"
                    />
                  </div>
                 <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                    margin: '0 0 1rem 0',
                    color: '#2d3748',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                  }}>{emirate.name}</h3>
                    <p style={{
                    color: '#4a5568',
                    marginBottom: '1.25rem',
                    lineHeight: '1.6',
                    fontSize: '0.95rem',
                    flex: 1
                  }}>{emirate.description}</p>
                    <Link 
                      href={`/locations/techcloud-erp-software-in-${emirate.slug}`}
                      className="locations-page__card-button"
                    >
                      Visit This Page
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {dataKey.toLowerCase() === 'uae' ? (
  <section className="uae-features">
    <div className="container">
      <div className="row">
        {location.cities?.slice(0, 4).map((city, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card h-100">
              <img 
                src={city.image} 
                className="card-img-top" 
                alt={city.name} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{city.name}</h5>
                <p className="card-text">{city.description}</p>
                <a href={city.link} className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
) : (
  <WhyChooseUs locationKey={dataKey} />
)}
      <Footer />
      <CustomCursor />
    </main>
  );

  
} 