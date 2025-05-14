import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo/logo.svg";

const MobileMenuHeader = ({ toggleMenu }) => {
  return (
    <div className="mobile-topbar">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo"  priority width={200} height={100} />
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