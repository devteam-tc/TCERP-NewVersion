"use client";
import Link from "next/link";
import { menus } from "../../../data/menuData";

const Menu = () => {
  return (
    <ul className="navbar-nav mx-auto mb-lg-0">
      {menus.map((item, index) => (
        <li key={index} className="nav-item">
          <Link className="nav-link" href={item.link}>
            {item.title}
            {(item.submenu || item.children) && <i className="fas fa-chevron-down"></i>}
          </Link>

          {/* Handle Industries Menu */}
          {item.children && (
            <ul className="sub-menu list-unstyled">
              {item.children.map((category, catIndex) => (
                <li key={catIndex}>
                  <Link href="#">
                    {category.heading} <i className="fas fa-chevron-right"></i>
                  </Link>
                  <ul className="nested-submenu list-unstyled">
                    {category.submenu.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}

          {/* Handle Regular Submenus */}
          {item.submenu && (
            <ul className="sub-menu list-unstyled">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.link}>{subItem.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
