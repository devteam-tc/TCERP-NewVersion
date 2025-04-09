// "use client";

// import { Container, Row, Col } from "react-bootstrap";
// import { FaArrowRight } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import styles from './industryList.module.css'
// import Image from "next/image";

// export default function IndustryList({ industryList, index }) {
//   const router = useRouter();

//   const handleArrowClick = (link) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     router.push(link);
//   };

//   return (
//     <Container className={`${styles.styledContainer} mt-5 mb-5`}>
//       <Row className=" align-items-center">
//         <Col>
//           <h2 className={styles.header}>
//             {index === 0
//               ? "Agriculture to Electronic Industries"
//               : index === 1
//               ? "FMCG to Metal Fabrication Industry"
//               : "Oil and Gas Industry"}
//           </h2>
//         </Col>
//       </Row>
//       <Row>
//       <Col className="d-flex justify-content-end">
//           <a href="#" className={styles.industryCount}>
//             {industryList.length} Industries
//           </a>
//         </Col>
//       </Row>
//       <Row>
//         {industryList.map((industry) => (
//           <Col md={6} key={industry.id}>
//             <div className={styles.industryCard}>
//               <div className={styles.iconWrapper}>
//                 <Image src={industry.icon} width={40} height={40} alt={`${industry.title} icon`} className={styles.icon} />
//               </div>
//               <div className={styles.cardContent}>
//                 <h3 className={styles.title}>{industry.title}</h3>
//                 <p className="mb-1">{industry.description}</p>
//               </div>
//               <div className={styles.arrow} onClick={() => handleArrowClick(industry.link)}>
//                 <FaArrowRight />
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }


"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./industryList.scss";

export default function IndustryList({ industryList, index }) {
  const router = useRouter();

  const handleArrowClick = (link) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(link);
  };

  return (
    <Container className="industry-section mt-5 mb-5">
      <Row className="align-items-center">
        <Col>
          <h2 className="header">
            {index === 0
              ? "Agriculture to Electronic Industries"
              : index === 1
              ? "FMCG to Metal Fabrication Industry"
              : "Oil and Gas Industry"}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <a href="#" className="industry-count">
            {industryList.length} Industries
          </a>
        </Col>
      </Row>
      <Row>
        {industryList.map((industry) => (
          <Col md={6} key={industry.id}>
            <div className="industry-card">
              <div className="icon-wrapper">
                <Image
                  src={industry.icon}
                  width={40}
                  height={40}
                  alt={`${industry.title} icon`}
                  className="icon"
                />
              </div>
              <div className="card-content">
                <h3 className="title">{industry.title}</h3>
                <p className="mb-1">{industry.description}</p>
              </div>
              <div className="arrow" onClick={() => handleArrowClick(industry.link)}>
                <FaArrowRight />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
