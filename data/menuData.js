export const industriesMenu = {
  id: 3,
  title: "Industries",
  link: "/industries",
  children: [
    {
      heading: "Agriculture to Electronic Industries",
      submenu: [
        { label: "Agriculture Industry", href: "/industries/agriculture-industry" },
        { label: "Apparel Industry", href: "/industries/apparel-industry" },
        { label: "Automotive Industry", href: "/industries/automotive-industry" },
        { label: "Beverage Industry", href: "/industries/beverage-industry" },
        { label: "Chemical Industry", href: "/industries/chemical-industry" },
        { label: "Educational Institutes", href: "/industries/educational-institutes" },
        { label: "Electrical Solar Industry", href: "/industries/electrical-solar-industry" },
        { label: "Electronics Industry", href: "/industries/electronics-industry" },
      ],
    },
    {
      heading: "FMCG to Metal Fabrication Industry",
      submenu: [
        { label: "FMCG Industry", href: "/industries/fmcg-industry" },
        { label: "Food Industry", href: "/industries/food-industry" },
        { label: "Furniture Industry", href: "/industries/furniture-industry" },
        { label: "Garment Industry", href: "/industries/garment-industry" },
        { label: "Hydraulic Cylinders Industry", href: "/industries/hydraulic-industry" },
        { label: "Jewellery Industry", href: "/industries/jewellery-industry" },
        { label: "Leather Industry", href: "/industries/leather-industry" },
        { label: "Logistics Industry", href: "/industries/logistics-industry" },
        { label: "Medical Equipment Manufacturing Industry", href: "/industries/medicalequipmentmanufacturing-industry" },
        { label: "Wood Industry", href: "/industries/wood-industry" },
        { label: "Wholesalers Industry", href: "/industries/wholesalers-industry" },
        { label: "Metal Fabrication Industry", href: "/industries/metal-fabrication-industry" },
        { label: "Micro Finance Industry", href: "/industries/microfinance-industry" },
      ],
    },
    {
      heading: "Oil & Gas to Textile Industry",
      submenu: [
        { label: "Oil & Gas Industry", href: "/industries/oilandgas-industry" },
        { label: "Packaging Industry", href: "/industries/packaging-industry" },
        { label: "Paper Industry", href: "/industries/paper-industry" },
        { label: "Plastic Industry", href: "/industries/plastic-industry" },
        { label: "Pharmaceutical Industry", href: "/industries/pharma-industry" },
        { label: "Publishing Industry", href: "/industries/publishing-industry" },
        { label: "Printing Industry", href: "/industries/printing-industry" },
        { label: "Pre Engineering Industry", href: "/industries/preengineering-industry" },
        { label: "Rubber Industry", href: "/industries/rubber-industry" },
        { label: "Restaurant Industry", href: "/industries/restaurant-industry" },
        { label: "Retail Industry", href: "/industries/retail-industry" },
        { label: "Steel Industry", href: "/industries/steel-industry" },
        { label: "Telecom Industry", href: "/industries/telecom-industry" },
        { label: "Textile Industry", href: "/industries/textiles-industry" },
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
    id: 3,
    title: "Products",
    link: "/products",
    submenu: [
      {
        id: 41,
        title: "Tech Cloud ERP",
        link: "/products/tech-cloud-erp",
      },
      {
        id: 42,
        title: "Tech Cloud CRM",
        link: "/products/customer-relationship-management",
      },
      {
        id: 43,
        title: "Tech Cloud POS",
        link: "/products/point-of-sale",
      },
      {
        id: 44,
        title: "Tech Cloud Trading Software",
        link: "/products/trading-software",
      },
      {
        id: 45,
        title: "Tech Cloud Ecommerce",
        link: "/products/Ecommerce-software",
      },
      {
        id: 46,
        title: "Tech Cloud HRMS",
        link: "/products/hr-managament-software",
      },
      {
        id: 47,
        title: "Tech Cloud Finance",
        link: "/products/financial-management-systems",
      },
      {
        id: 48,
        title: "Integrated-With-CRM-Ecommerce-POS",
        link: "/products/integrated-erp-software",
      },
      {
        id: 49,
        title: "Tech Cloud Restaurant ERP",
        link: "/products/erp-for-restaraunt",
      },
      {
        id: 50,
        title: "Accounting Software",
        link: "/products/erp-for-accounting-software",
      },
    ],
  },
  {
    id: 4,
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
    id: 5,
    title: "BI",
    link: "/business-intelligence",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 7,
    title: "Pricing",
    link: "/pricing",
  },
  {
    id: 8,
    title: "Demo",
    link: "/demo",
  },
]; 