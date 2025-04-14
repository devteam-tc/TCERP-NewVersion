"use client";
import Link from "next/link";
import MenuData from "./MenuData";

const Menu = () => {
  return (
    <ul className="navbar-nav mx-auto mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="#">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/about">
          About
        </Link>
      </li>

      <MenuData />

      <li className="nav-item">
        <Link className="nav-link" href="/products">
          Products <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
          <li><Link href="/products/tech-cloud-erp">Tech Cloud ERP</Link></li>
          <li><Link href="/products/customer-relationship-management">Tech Cloud CRM</Link></li>
          <li><Link href="/products/point-of-sale">Tech Cloud POS</Link></li>
          <li><Link href="/products/trading-software">Tech Cloud Trading Software</Link></li>
          <li><Link href="/products/Ecommerce-software">Tech Cloud Ecommerce</Link></li>
          <li><Link href="/products/hr-managament-software">Tech Cloud HRMS</Link></li>
          <li><Link href="/products/financial-management-systems">Tech Cloud Finance</Link></li>
          <li><Link href="/products/integrated-erp-software">
            Tech Cloud ERP Integrated-With-CRM-Ecommerce-POS
          </Link></li>
          <li><Link href="/products/erp-for-restaraunt">Tech Cloud Restaurant ERP</Link></li>
          <li><Link href="/products/erp-for-accounting-software">Accounting Software</Link></li>
        </ul>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="/business-intelligence">
          BI
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="#">
          Services <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
        <li>
            <Link href="/services/digital-marketing">Digital Marketing</Link>
          </li>
          <li>
            <Link href="/services/web-development">Web Development</Link>
          </li>
          <li>
            <Link href="/services/app-development">Mobile App Development</Link>
          </li> 
        </ul>
      </li>

      {/* <li className="nav-item">
        <Link className="nav-link" href="#">
          Blogs
        </Link>
        <ul className="sub-menu list-unstyled">
          <li><Link href="/blog">Blog Single</Link></li>
          <li><Link href="/blog-details">Blog Details</Link></li>
        </ul>
      </li> */}

      <li className="nav-item">
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="/demo">
          Demo
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
