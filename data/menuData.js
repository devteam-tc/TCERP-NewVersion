export const industriesMenu = {
  id: 3,
  title: "Industries",
  link: "/industries",
  children: [
    {
      heading: "Manufacturing Industries",
      submenu: [
        { label: "Automative Industry", href: "/industries/automotive-industry" },
        { label: "Casting Industry", href: "/industries/casting-industry" },
        { label: "Chemical Industry", href: "/industries/chemical-industry" },
        { label: "Construction Industry", href: "/industries/construction-industry" },
        { label: "Solar Industry", href: "/industries/electrical-solar-industry" },
        { label: "Electronics Industry", href: "/industries/electronics-industry" },
        { label: "Food Industry", href: "/industries/food-industry" },
        { label: "Furniture Industry", href: "/industries/furniture-industry" },
        { label: "Hydraulic Cylinders Industry", href: "/industries/hydraulic-industry" },
        { label: "Leather Industry", href: "/industries/leather-industry" },
        { label: "Metal Fabrication Industry", href: "/industries/metal-fabrication-industry" },
        { label: "Packaging Industry", href: "/industries/packaging-industry" },
        { label: "Paper Industry", href: "/industries/paper-industry" },
        { label: "Plastic Industry", href: "/industries/plastic-industry" },
        { label: "Pre Engineering Industry", href: "/industries/preengineering-industry" },
        { label: "Rubber Industry", href: "/industries/rubber-industry" },
        { label: "Steel Industry", href: "/industries/steel-industry" }
      ],
    },
    {
      heading: "Retail Industries",
      submenu: [
        { label: "Apparel Industry", href: "/industries/apparel-industry" },
        { label: "Food & Bevarage Industry", href: "/industries/beverage-industry" },
        { label: "FMCG Industry", href: "/industries/fmcg-industry" },
        { label: "Garment Industry", href: "/industries/garment-industry" },
        { label: "Jewellery Industry", href: "/industries/jewellery-industry" },
        { label: "Restaurant Industry", href: "/industries/restaurant-industry" },
        { label: "Retail Industry", href: "/industries/retail-industry" },
        { label: "Wholesalers Industry", href: "/industries/wholesalers-industry" },
        
      ],
    },
    {
      heading: "Specialized Industries",
      submenu: [
        { label: "Agriculture Industry", href: "/industries/agriculture-industry" },
        { label: "Educational Institutes Industry", href: "/industries/educational-institutes" },
        { label: "Logistics Industry", href: "/industries/logistics-industry" },
        { label: "Medical Equipment Manufacturing Industry", href: "/industries/medicalequipmentmanufacturing-industry" },
        { label: "Micro Finance Industry", href: "/industries/microfinance-industry" },
        { label: "Oil & Gas Industry", href: "/industries/oilandgas-industry" },
        { label: "Pharmaceutical Industry", href: "/industries/pharma-industry" },
        { label: "Printing Industry", href: "/industries/printing-industry" },
        { label: "Publishing Industry", href: "/industries/publishing-industry" },
        { label: "Signage Industry", href: "/industries/signage-industry" },
        { label: "Telecom Industry", href: "/industries/telecom-industry" },
        { label: "Textile Industry", href: "/industries/textiles-industry" },
        { label: "Wood Industry", href: "/industries/wood-industry" },
      ],
    },
  ],
};

export const menus = [
  // {
  //   id: 1,
  //   title: "Home",
  //   link: "/",
  // },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  industriesMenu,
  {
    id: 4,
    title: "Products",
    link: "/products",
    submenu: [
      {
        id: 41,
        title: "ERP",
        link: "/products/tech-cloud-erp",
      },
      {
        id: 42,
        title: "CRM",
        link: "/products/customer-relationship-management",
      },
      {
        id: 43,
        title: "POS",
        link: "/products/point-of-sale",
      },
      {
        id: 44,
        title: "Trading",
        link: "/products/trading-software",
      },
      {
        id: 45,
        title: "Ecommerce",
        link: "/products/Ecommerce-software",
      },
      {
        id: 46,
        title: "HRMS",
        link: "/products/hr-managament-software",
      },
      {
        id: 47,
        title: "Finance & Accounting",
        link: "/products/financial-management-systems",
      },
      // {
      //   id: 48,
      //   title: "Integrated with CRM, Ecommerce, POS",
      //   link: "/products/integrated-erp-software",
      // }
    ],
  },
  {
    id: 5,
    title: "Services",
    link: "/services",
    submenu: [
      {
        id: 31,
        title: "Digital Marketing",
        link: "/services/digital-marketing",
      },
      {
        id: 32,
        title: "Web Development",
        link: "/services/web-development",
      },
      {
        id: 33,
        title: "Mobile App Development",
        link: "/services/app-development",
      },
    ],
  },
  ,
  {
    id: 6,
    title: "BI",
    link: "/business-intelligence",
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 8,
    title: "Pricing",
    link: "/pricing",
  },
  {
    id: 9,
    title: "Demo",
    link: "/demo",
  },
]; 