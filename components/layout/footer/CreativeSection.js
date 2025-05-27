import Image from 'next/image';
import './CreativeSection.scss';

const CreativeSection = () => {
  return (
    <div className="scrolling-background-container">
      <div className="scrolling-bg" aria-hidden="true"></div>
      <div className="staticImages">
        <Image 
          src="/footer/car.webp" 
          alt="Creative Section"
          width={300}
          height={300}
          className="staticImage"
          priority
          loading="eager"
        />
      </div>
    </div>
  );
};

export default CreativeSection;
