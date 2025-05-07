import './CreativeSection.scss';
import Image from 'next/image';

const CreativeSection = () => {
  return (
    <div className="scrolling-background-container">
      <div className="scrolling-bg"></div>
      <div className="staticImages">
        <Image 
          src="/footer/cards.png" 
          alt="Static Image"
          width={300}
          height={120}
          className="staticImage"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default CreativeSection;
