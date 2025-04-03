"use client";
import Link from "next/link"
import MenuData from "./MenuData";

const Menu = () => {
  return (
    <ul className="navbar-nav mx-auto mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="#">
          Home 
        </Link>
        {/* <i className="fas fa-chevron-down"></i> */}
        {/* <ul className="sub-menu list-unstyled">
          <li>
            <Link href="/">Home One</Link>
          </li>
          <li>
            <Link href="/home-two">Home Two</Link>
          </li>
        </ul> */}
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/about">
          About
        </Link>
      </li>
      <MenuData />
      <li className="nav-item">
        <Link className="nav-link" href="#">
        Products <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
        <li>
            <Link href="/projects">Tech Cloud ERP</Link>
          </li>
          <li>
            <Link href="/projects">Tech Cloud CRM</Link>
          </li>
          <li>
            <Link href="/projects">Tech Cloud POS</Link>
          </li>
          <li>
            <Link href="/projects">Tech Cloud Trading Software</Link>
          </li>
          <li>
            <Link href="/projects">Tech Cloud Ecommerce</Link>
          </li>
          <li>
            <Link href="/projects">Tech Cloud HRMS</Link>
          </li>
          <li>
            <Link href="/projects">Tech Cloud Finance</Link>
          </li>
          <li>
            <Link href="/projects"> Integrated-With-CRM-Ecommerce-POS</Link>
          </li>
          <li>
            <Link href="/projects">Tech Cloud Restaurant ERP</Link>
          </li>
          <li>
            <Link href="/projects">Accounting Software</Link>
          </li>
          <li>
            <Link href="/projects">Project Single</Link>
          </li>
          <li>
            <Link href="/project-details">Project Details</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/about">
          BI
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">
          Services <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
        <li>
            <Link href="/services">Digital Marketing</Link>
          </li>
          <li>
            <Link href="/services">Web Development</Link>
          </li>
          <li>
            <Link href="/services">Mobile App Development</Link>
          </li>
          <li>
            <Link href="/services">Service Single</Link>
          </li>
          <li>
            <Link href="/service-details">Service Details</Link>
          </li>
        </ul>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" href="#">
          Blog 
        </Link>
        {/* <ul className="sub-menu list-unstyled">
          <li>
            <Link href="/blog">Blog Single</Link>
          </li>
          <li>
            <Link href="/blog-details">Blog Details</Link>
          </li>
        </ul> */}
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Menu
