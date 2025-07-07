"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dropdown.module.css";
import TableOfContentsStyles from "../blogs/[slug]/TableOfContents.module.css";
const industries = [
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        submenu: [
          { label: "Agriculture Industry", href: "/industries/agriculture-industry" },
          { label: "Apparel Industry", href: "/industries/apparel-industry" },
          { label: "Automotive Industry", href: "/industries/automotive-industry" },
          { label: "Beverage Industry", href: "/industries/beverage-industry" },
          { label: "Chemical Industry", href: "/industries/chemical-industry" },
          { label: "Educational Institutes", href: "/industries/educational-institutes" },
          { label: "Electrical Solar Industry", href: "/industries/electrical-solar-industry" },
          { label: "Electronics Industry", href: "/industries/electronics-industry" },
          { label: "FMCG Industry", href: "/industries/fmcg-industry" },
          { label: "Food Industry", href: "/industries/food-industry" },
          { label: "Furniture Industry", href: "/industries/furniture-industry" },
          { label: "Garment Industry", href: "/industries/garment-industry" },
          { label: "Hydraulic Cylinders Industry", href: "/industries/hydraulic-industry" },
          { label: "Jewellery Industry", href: "/industries/jewellery-industry" },
          { label: "Leather Industry", href: "/industries/leather-industry" },
          { label: "Logistics Industry", href: "/industries/logistics-industry" },
          { label: "Medical Equipment Manufacturing", href: "/industries/medicalequipmentmanufacturing-industry" },
          { label: "Wood Industry", href: "/industries/wood-industry" },
          { label: "Wholesalers Industry", href: "/industries/wholesalers-industry" },
          { label: "Metal Fabrication Industry", href: "/industries/metal-fabrication-industry" },
          { label: "Micro Finance Industry", href: "/industries/microfinance-industry" },
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
  },
];

const DropdownSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Categories");
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    router.push(option.href);
  };

  const closeDropdownFromOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownFromOutside);
    return () => {
      document.removeEventListener("click", closeDropdownFromOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={TableOfContentsStyles.tocTitle}>Categories</h2>
      <div
        className={`${styles.dropdowndata} ${isOpen ? styles.opened : ""}`}
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        <input
          type="text"
          className={styles.input}
          value={selectedOption}
          placeholder="Select Categories"
          readOnly
        />
        {isOpen && (
          <ul className={styles.options}>
            {industries[0].children[0].submenu.map((option, index) => (
              <li
                key={index}
                className={styles.option}
                onClick={() => selectOption(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownSection;
