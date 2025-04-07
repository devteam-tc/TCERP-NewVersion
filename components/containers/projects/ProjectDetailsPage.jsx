// import Image from "next/image";
// import Link from "next/link";
// import arrowIcon from '@/public/images/icons/icon-right-arrow.svg';
// import industryProjectsData from "@/data/industryProjectsData";
// import projectInerImg1 from '@/public/images/projects/project-detail-inner-img-1.png';
// import projectInerImg2 from '@/public/images/projects/project-detail-inner-img-2.png';

// const ProjectDetailsPage = ({ industrySlug }) => {
//   const projectData = industryProjectsData[industrySlug] || industryProjectsData["it"];

//   return (
//     <>
//       <section className="ep-project-details-section pt-120">
//         <div className="container">
//           <div className="project-banner-image position-relative">
//             <div className="reveal zoom-out overflow-hidden rounded-20">
//               <Image priority src={projectInerImg1} alt="Project Banner" className="img-fluid w-100" />
//             </div>
//             <div className="project-information position-absolute rounded-20">
//               <h4 className="title rounded-20 text-center mb-30">Project Information</h4>
//               <ul className="list-unstyled options">
//                 <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
//                   <h5 className="flex-shrink-0 label">Category:</h5>
//                   <p>{projectData.category}</p>
//                 </li>
//                 <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
//                   <h5 className="flex-shrink-0 label">Customer:</h5>
//                   <p>{projectData.customer}</p>
//                 </li>
//                 <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
//                   <h5 className="flex-shrink-0 label">Start date:</h5>
//                   <p>{projectData.startDate}</p>
//                 </li>
//                 <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
//                   <h5 className="flex-shrink-0 label">End date:</h5>
//                   <p>{projectData.endDate}</p>
//                 </li>
//                 <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
//                   <h5 className="flex-shrink-0 label">Rating:</h5>
//                   <div className="rating">
//                     {[...Array(projectData.rating)].map((_, i) => (
//                       <i key={i} className="fa-solid fa-star"></i>
//                     ))}
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="project-description">
//             <h3 className="title split-text right">Project Overview</h3>
//             <p>{projectData.description}</p>

//             <div className="inner-options">
//               <ul className="list-unstyled">
//                 {projectData.keyPoints.map((point, index) => (
//                   <li key={index}>
//                     <Image src={arrowIcon} alt="icon-right-arrow" />
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="inner-image mb-30">
//               <div className="row">
//                 {projectData.images.map((imgSrc, index) => (
//                   <div key={index} className="col-lg-6">
//                     <div className="image rounded-20 overflow-hidden reveal right">
//                       <Image priority src={projectInerImg2} alt={`project-image-${index}`} className="img-fluid w-100" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-lg-8">
//                 <h3 className="title split-text right">Building Tomorrow’s Tech Today</h3>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                   industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and
//                   scrambled it to make a type specimen book</p>
//               </div>
//             </div>
//             <div className="list-info mt-30">
//               <div className="row">
//                 <div className="col-xl-4 col-md-6">
//                   <div className="info-item">
//                     <h4 className="info-title d-flex align-items-center">
//                       <i className="fa-solid fa-check"></i>
//                       Your Gateway to Innovation
//                     </h4>
//                     <p>The rapid advancement of technology continuously</p>
//                   </div>
//                 </div>
//                 <div className="col-xl-4 col-md-6">
//                   <div className="info-item">
//                     <h4 className="info-title d-flex align-items-center">
//                       <i className="fa-solid fa-check"></i>
//                       Engineering the Future of IT
//                     </h4>
//                     <p>The rapid advancement of technology continuously</p>
//                   </div>
//                 </div>
//                 <div className="col-xl-4 col-md-6">
//                   <div className="info-item">
//                     <h4 className="info-title d-flex align-items-center">
//                       <i className="fa-solid fa-check"></i>
//                       Innovate with Confidence
//                     </h4>
//                     <p>The rapid advancement of technology continuously</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProjectDetailsPage;



import Image from "next/image";
import Link from "next/link";
import arrowIcon from '@/public/images/icons/icon-right-arrow.svg';
import industryProjectsData from "@/data/industryProjectsData";
import projectInerImg1 from '@/public/images/projects/project-detail-inner-img-1.png';
import projectInerImg2 from '@/public/images/projects/project-detail-inner-img-2.png';

const ProjectDetailsPage = ({ industrySlug }) => {
  const projectData = industryProjectsData[industrySlug] || industryProjectsData["agriculture-industry"];

  return (
    <>
      <section className="ep-project-details-section pt-120">
        <div className="container">
          <div className="project-banner-image position-relative">
            <div className="reveal zoom-out overflow-hidden rounded-20">
              <Image priority src={projectData.banner} width={100} height={100} alt="Project Banner" className="img-fluid w-100" />
            </div>
            <div className="project-information position-absolute rounded-20">
              <h4 className="title rounded-20 text-center mb-30">Industry Information</h4>
              <ul className="list-unstyled options">
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">Industry:</h5>
                  <p>{projectData.industry}</p>
                </li>
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">Solution:</h5>
                  <p>{projectData.solution}</p>
                </li>
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">Modules:</h5>
                  <p>{projectData.modules.join(", ")}</p>
                </li>
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">Result:</h5>
                  <p>{projectData.result.join(",")}</p>
                </li>
                <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
                  <h5 className="flex-shrink-0 label">No of Customers:</h5>
                  <p>{projectData.customers}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-description">
            <h3 className="title split-text right">{projectData.title}</h3>
            <p>{projectData.description}</p>
            <div className="inner-options">
              <ul className="list-unstyled">
                {projectData.keyPoints.map((point, index) => (
                  <li key={index}>
                    <Image src={arrowIcon} alt="icon-right-arrow" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="inner-image mb-30">
              <div className="row">
                {projectData.images.map((imgSrc, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="image rounded-20 overflow-hidden reveal right">
                      <Image priority src={imgSrc} width={100} height={100} alt={`project-image-${index}`} className="img-fluid w-100 h-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <h3 className="title split-text right">{projectData.subHeading}</h3>
                <p>{projectData.subText}</p>
              </div>
            </div>

            <div className="list-info mt-30">
              <div className="row">
                {projectData.features.map((feature, index) => (
                  <div key={index} className="col-xl-4 col-md-6">
                    <div className="info-item">
                      <h4 className="info-title d-flex align-items-center">
                        <i className="fa-solid fa-check"></i>
                        {feature.title}
                      </h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsPage;
