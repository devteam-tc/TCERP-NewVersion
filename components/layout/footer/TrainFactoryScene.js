import Image from 'next/image';
import './TrainFactoryScene.scss';

const TrainFactoryScene = () => {
  return (
    <div className="backgroundSection">
      <div className="scrollingImages">
        <Image 
          src="/footer/train_9.png" 
          alt="img1" 
          width={5000} 
          height={3500} 
          className="vert-move" 
        />
       
        {/* Add more images here */}
      </div>
    </div>
  );
};

export default TrainFactoryScene;
