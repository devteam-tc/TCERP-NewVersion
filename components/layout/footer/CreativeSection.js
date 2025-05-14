import './CreativeSection.scss';
import Image from 'next/image';

const CreativeSection = () => {
  return (
    <div className="scrolling-background-container">
      <div className="scrolling-bg"></div>
      <div className="staticImages">
        <Image 
          src="/footer/cargif.gif" 
          alt="Animated Car"
          width={300}
          height={120}
          className="staticImage"
          priority
        />
      </div>
    </div>
  );
};

export default CreativeSection;
