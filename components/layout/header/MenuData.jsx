"use client";
import Link from "next/link";

const industriesMenu = {
  label: "Industries",
  href: "/industries",
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

const MenuData = () => {
  return (
    <ul className="navbar-nav mx-auto mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" href={industriesMenu.href}>
          {industriesMenu.label} <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
          {industriesMenu.children.map((category, index) => (
            <li key={index}>
              <span className="submenu-heading">{category.heading}</span>
              <ul className="nested-submenu list-unstyled">
                {category.submenu.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default MenuData;
