import Image from 'next/image';
import './TrainFactoryScene.scss';

const TrainFactoryScene = () => {
  return (
    <div className="backgroundSection">
      <div className="scrollingImages">
        <div className="imageWrapper">
          <Image 
            src="/footer/train_11.png" 
            alt="img1" 
            width={5000} 
            height={3500}
            className="trainImage vert-move"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TrainFactoryScene;
