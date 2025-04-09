import logo from "@/public/images/logo/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuData from './MenuData';

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
   
  {
    id: 3,
    title: "Menu Data",
    link : "/industries",
    component: <MenuData />  // Rendering component directly
  },
  {
    id: 4,
    title: "Products",
    link: "#",
    submenu: [
      {
        id: 41,
        title: "Tech Cloud ERP",
        link: "/projects",
      },
      {
        id: 42,
        title: "Tech Cloud CRM",
        link: "/project-details",
      },
      {
        id: 43,
        title: "Tech Cloud POS",
        link: "/project-details",
      },
      {
        id: 44,
        title: "Tech Cloud Trading Software",
        link: "/project-details",
      },
      {
        id: 45,
        title: "Tech Cloud Ecommerce",
        link: "/project-details",
      },
      {
        id: 46,
        title: "Tech Cloud HRMS",
        link: "/project-details",
      },
      {
        id: 47,
        title: "Tech Cloud Finance",
        link: "/project-details",
      },
      {
        id: 48,
        title: "Integrated-With-CRM-Ecommerce-POS",
        link: "/project-details",
      },
      {
        id: 49,
        title: "Tech Cloud Restaurant ERP",
        link: "/project-details",
      },
      {
        id: 50,
        title: "Accounting Software",
        link: "/project-details",
      },
    ],
  },
  {
    id: 5,
    title: "Services",
    link: "#",
    submenu: [
      {
        id: 31,
        title: "Digital Marketing",
        link: "/services",
      },
      {
        id: 32,
        title: "Web Development",
        link: "/service-details",
      },
      {
        id: 33,
        title: "Mobile App Development",
        link: "/service-details",
      },
    ],
  },
  {
    id: 6,
    title: "BI",
    link: "#",
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenuId(null);
  };

  // Toggle submenu visibility with smooth transition
  const toggleSubmenu = (id) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  return (
    <div className="mobile-menu-area d-block d-xl-none">
      <div className="container">
        <div className="mobile-topbar">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="logo" priority />
              </Link>
            </div>
            <div className="bars" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Main */}
      <div className={`mobile-menu-main ${isMenuOpen ? "active" : ""}`}>
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="close-mobile-menu" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </div>
        <div className="menu-body">
          <div className="menu-list">
            <ul className="list-unstyled">
              {menus.map((menu) => (
                <li className="sub-mobile-menu" key={menu.id}>
                  {menu.submenu ? (
                    <>
                      <Link href="#" onClick={() => toggleSubmenu(menu.id)}>
                        {menu.title}{" "}
                        <i
                          className={`fas float-end ${
                            openSubmenuId === menu.id
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}
                        ></i>
                      </Link>
                      <ul
                        className={`submenu ${openSubmenuId === menu.id ? "open" : ""}`}
                      >
                        {menu.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link href={submenu.link} onClick={closeMenu}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : menu.component ? (
                    // If menu has a `component`, render it instead of a `Link`
                    <div>{menu.component}</div>
                  ) : (
                    menu.link && (
                      <Link href={menu.link} onClick={closeMenu}>
                        {menu.title}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="call-us p-4">
          <a
            href="tel:+91 8919439603"
            className="call-us-btn d-flex align-items-center gap-3"
          >
            <span className="icon d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-phone"></i>
            </span>
            <div className="info">
              <span className="title">Need ERP?</span>
              <h5 className="number">+91 8919439603</h5>
              <h5 className="number">+91 7032082300</h5>

            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
