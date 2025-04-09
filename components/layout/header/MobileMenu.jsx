import logo from "@/public/images/logo/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
    // submenu: [
    //   {
    //     id: 11,
    //     title: "Home One",
    //     link: "/",
    //   },
    //   {
    //     id: 12,
    //     title: "Home Two",
    //     link: "/home-two",
    //   },
    // ],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Products",
    link: "#",
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
    id: 5,
    title: "BI",
    link: "#",
   
  },
  // {
  //   id: 6,
  //   title: "Services",
  //   link: "#",
  //   submenu: [
  //     {
  //       id: 51,
  //       title: "Blog Single",
  //       link: "/blog",
  //     },
  //     {
  //       id: 52,
  //       title: "Blog Details",
  //       link: "/blog-details",
  //     },
  //   ],
  // },
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
                <Image src={logo} alt="logo" priority/>
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
                      <Link
                        href="#"
                        onClick={() => toggleSubmenu(menu.id)}
                      >
                        {menu.title}{" "}
                        <i
                          className={`fas float-end ${openSubmenuId === menu.id ? "fa-chevron-up" : "fa-chevron-down"}`}
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
                  ) : (
                    <Link href={menu.link} onClick={closeMenu}>
                      {menu.title}
                    </Link>
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