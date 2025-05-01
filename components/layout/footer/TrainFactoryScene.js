import Image from 'next/image';
import './TrainFactoryScene.scss';

const TrainFactoryScene = () => {
  return (
    <div className="backgroundSection">
      <div className="scrollingImages">
        {/* Repeating image multiple times for continuous scroll effect */}
        <Image 
          src="/footer/train_11.png" 
          alt="Train Image 1" 
          width={300}
          height={120}
          className="trainImage"
          style={{ objectFit: 'contain' }}
        />
        
      </div>
    </div>
  );
};

export default TrainFactoryScene;
