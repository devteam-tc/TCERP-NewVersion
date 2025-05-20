import Image from "next/image";

const ProjectBanner = ({ banner }) => (
  <div className="project-banner-image position-relative mb-4 mb-lg-0">
    <div className="reveal zoom-out overflow-hidden rounded-20">
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