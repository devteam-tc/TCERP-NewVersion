import Image from "next/image";

const ProjectBanner = ({ banner }) => (
  <div className="project-banner-image position-relative mb-4 mb-lg-0 mt-4">
    <div className="reveal zoom-out overflow-hidden">
      <Image
        priority
        src={banner}
        width={100}
        height={100}
        alt={`Industry banner showcasing ${banner.split('/').pop().split('-').join(' ').replace('.jpg', '')}`}
        className="img-fluid custom-banner-img"
      />
    </div>
  </div>
);

export default ProjectBanner; 