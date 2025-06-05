import Image from "next/image";
import cloudIcon from '../../../public/images/industry-icons/checkmark-icon.svg';
const ProjectDescription = ({ title, description, keyPoints }) => (
  <div>
    <h3 className="title split-text right">{title}</h3>
    <p>{description}</p>
    <div className="inner-options">
      <ul className="list-unstyled">
        {keyPoints.map((point, index) => (
          <div style={{display: "flex", gap: "10px", alignItems: "start", justifyContent: "left"}}>
          <div>
          <Image 
          src={cloudIcon} 
          alt={`Bullet point arrow for ${point}`}
          width={30}
          height={30}
        />
          </div>
          <li key={index}>
            {point}
          </li></div>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectDescription;