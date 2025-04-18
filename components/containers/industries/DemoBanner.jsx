import Image from "next/image";
import Link from "next/link";

const DemoBanner = () => (
    <div className="demo-banner-container mt-4 mb-5">
      <Link href="/demo" className="demo-banner-link">
        <Image
          src="/images/industry-icons/book-a-demo-img.jpg"
          alt="Book a personalized demo of our industry solutions"
          width={1200}
          height={300}
          className="img-fluid"
        />
      </Link>
    </div>
  );

export default DemoBanner;
  


