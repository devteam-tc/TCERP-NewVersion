import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo/logo.webp";

const MobileMenuHeader = ({ toggleMenu }) => {
  return (
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
  );
};

export default MobileMenuHeader; 