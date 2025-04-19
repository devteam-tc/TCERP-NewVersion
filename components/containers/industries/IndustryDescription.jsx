import Image from "next/image";
import arrowIcon from '@/public/images/icons/icon-right-arrow.svg';
const ProjectDescription = ({ title, description, keyPoints }) => (
  <div>
    <h3 className="title split-text right">{title}</h3>
    <p>{description}</p>
    <div className="inner-options">
      <ul className="list-unstyled">
        {keyPoints.map((point, index) => (
          <li key={index}>
            <Image 
              src={arrowIcon} 
              alt={`Bullet point arrow for ${point}`}
              width={24}
              height={24}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectDescription; 