import Image from 'next/image';
import SectionTitle from '../SectionTitle';

const AboutSection = ({ slug }) => {
  let content;
  
  try {
    content = require(`../../../data/services/${slug}.json`);
  } catch (error) {
    console.error(`Failed to load content for slug: ${slug}`);
    return null;
  }

  if (!content || !content.about) return null;

  const { about } = content;

  return (
    <section className="about-section style-1 style-3 pt_120 pb_120">
    <div className="container">
      <div className="row flex-row-reverse justify-content-lg-between justify-content-center g-4 align-items-center">
        {/* Content Column */}
        <div className="col-xl-5 col-lg-7 order-2 order-lg-1">
          <div className="about-content">
            {/* Section Title */}
            <div className=" text-center">
               <SectionTitle subTitle={about.subtitle} title={about.heading} extraClass="mb-30" />
             </div>
            <div className="section-title text-lg-start text-center mb-4"> 
              <p className="pra fs-seven">{about.paragraph}</p>
            </div>

            {/* Features List */}
            <ul className="about-list d-grid justify-content-center justify-content-lg-start gap-1">
              {about.features.map((item, index) => (
                <li key={index} className="d-flex align-items-center gap-2">
                  <span className="icon d-center">
                    <i className="fa-solid fa-check p1-clr fs-eight"></i>
                  </span>
                  <p className="fw-semibold black">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-xl-6 col-lg-5 order-1 order-lg-2 ">
          <div className="about-thumb position-relative reveal-left w-100">
            <Image 
              src={about.imageMain}
              alt="about"
              width={600}
              height={500}
              className="w-100"
              priority
            />
            <Image 
              src={about.imageDecor}
              alt="dots"
              width={150}
              height={150}
              className="about-ele"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutSection; 