"use client";
import Link from "next/link";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const MenuItem = ({ 
  menu, 
  openSubmenuId, 
  openIndustrySection, 
  toggleSubmenu, 
  toggleIndustrySection, 
  closeMenu 
}) => {
  if (menu.submenu) {
    return (
      <li className="sub-mobile-menu">
        <Link href="#" onClick={() => toggleSubmenu(menu.id)}>
          {menu.title}{" "}
          <span className="float-end">
            {openSubmenuId === menu.id ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </Link>
        <ul className={`submenu ${openSubmenuId === menu.id ? "open" : ""}`}>
          {menu.submenu.map((submenu) => (
            <li key={submenu.id}>
              <Link href={submenu.link} onClick={closeMenu}>
                {submenu.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  if (menu.children) {
    return (
      <li className="sub-mobile-menu">
        <Link href="#" onClick={() => toggleSubmenu(menu.id)}>
          {menu.title}{" "}
          <span className="float-end">
            {openSubmenuId === menu.id ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </Link>
        <ul className={`submenu ${openSubmenuId === menu.id ? "open" : ""}`}>
          {menu.children.map((section, index) => (
            <li key={index}>
              <Link href="#" onClick={(e) => toggleIndustrySection(e, section.heading)}>
                {section.heading}{" "}
                <span className="float-end">
                  {openIndustrySection === section.heading ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              </Link>
              <ul
                className={`nested-submenu ${
                  openIndustrySection === section.heading ? "open" : ""
                }`}
              >
                {section.submenu.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="sub-mobile-menu">
      <Link href={menu.link} onClick={closeMenu}>
        {menu.title}
      </Link>
    </li>
  );
};

export default MenuItem; 