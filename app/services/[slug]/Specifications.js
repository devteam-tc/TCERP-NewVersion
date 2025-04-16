// 'use client';
// import Image from 'next/image';
// import './servicesection.scss';

// const FEATURES_DATA = {
//   'web-development': [
//     {
//       image: '/images/servicescards/Webdesign1.png',
//       title: 'Web Designing',
//       desc: 'We provide visually appealing, user-friendly websites that reflect your brand and offer an engaging experience.',
//     },
//     {
//       image: '/images/servicescards/webdev2.png',
//       title: 'Web Development',
//       desc: 'We offer custom web development services focused on performance, speed, security and scalability.',
//     },
//     {
//       image: '/images/servicescards/mobile3.png',
//       title: 'Mobile App Development',
//       desc: 'We specialize in developing intuitive mobile apps for Android and iOS, enhancing user engagement and experience.',
//     },
//     {
//       image: '/images/servicescards/Wordpress4.png',
//       title: 'WordPress Development',
//       desc: 'We deliver secure, dynamic and easy-to-manage WordPress websites, customized to meet your business needs.',
//     },
//     {
//       image: '/images/servicescards/ecommerce5.png',
//       title: 'E-Commerce Development',
//       desc: 'We build scalable e-commerce platforms designed to enhance store performance, conversions and user experience.',
//     },
//     {
//       image: '/images/servicescards/webhosting6.png',
//       title: 'Web Hosting Services',
//       desc: 'We provide fast, secure and reliable web hosting solutions, ensuring optimal performance and uptime.',
//     },
//   ],
//   'app-development': [
//     {
//       image: '/images/servicescards/app1.png',
//       title: 'UI/UX Design',
//       desc: 'We design intuitive and engaging user interfaces and experiences, ensuring your app is easy to navigate and visually appealing.',
//     },
//     {
//       image: '/images/servicescards/app2.png',
//       title: 'Flutter App Development',
//       desc: 'We specialize in developing high-performance, cross-platform mobile apps using Flutter, providing a seamless experience on both Android and iOS.',
//     },
//     {
//       image: '/images/servicescards/app3.png',
//       title: 'Cross-Platform Development',
//       desc: 'We offer cross-platform mobile app development services that ensure your app performs flawlessly across multiple devices and operating systems.',
//     },
//     {
//       image: '/images/servicescards/app4.png',
//       title: 'Backend Development & Integration',
//       desc: 'We provide robust backend solutions, ensuring smooth integration with databases, servers and third-party services for enhanced app functionality.',
//     },
//     {
//       image: '/images/servicescards/app5.png',
//       title: 'API Development & Integration',
//       desc: 'Our team builds secure, scalable APIs and integrates them with your app, ensuring seamless communication between your app and external services.',
//     },
//     {
//       image: '/images/servicescards/app6.png',
//       title: 'Quality Assurance & Testing ',
//       desc: 'We conduct thorough testing to identify and fix bugs, ensuring your app performs flawlessly and delivers a high-quality user experience.',
//     },
//   ],
//   'digital-marketing': [
//     {
//       image: '/images/servicescards/digital-marketing1.png',
//       title: 'Search Engine Optimization',
//       desc: 'SEO involves optimizing your website to rank higher in search engine results, improving visibility and organic traffic. At Tech Cloud ERP, we offer expert SEO services to help businesses enhance their online presence.',
//     },
//     {
//       image: '/images/servicescards/digital-marketing2.png',
//       title: 'Search Engine Marketing',
//       desc: 'SEM focuses on paid advertising strategies to improve website visibility on search engines. Our SEM services ensure targeted campaigns that drive qualified traffic and maximize ROI.',
//     },
//     {
//       image: '/images/servicescards/digital-marketing3.png',
//       title: 'Social Media Optimization',
//       desc: 'SMO uses social media platforms to build your brand’s visibility and engagement. We provide tailored SMO services that enhance your social media presence and connect with your target audience.',
//     },
//     {
//       image: '/images/servicescards/digital-marketing4.png',
//       title: 'Facebook Ads',
//       desc: 'Facebook Ads allow businesses to reach a broader audience with targeted advertising. We specialize in creating effective Facebook ad campaigns that drive conversions and brand awareness.',
//     },
//     {
//       image: '/images/servicescards/digital-marketing5.png',
//       title: 'Content Marketing',
//       desc: 'Content marketing creates and shares valuable content to attract and retain customers. At Tech Cloud ERP, we craft engaging content strategies that drive traffic and enhance customer engagement.',
//     },
//     {
//       image: '/images/servicescards/digital-marketing6.png',
//       title: 'Email Marketing',
//       desc: 'Email marketing is a direct communication strategy to nurture leads and keep customers engaged. Our email marketing services help you deliver personalized, impactful messages that drive results.',
//     },
//   ],
// };

// export default function Specifications({ slug = 'web-development' }) {
//   const normalizedSlug = slug.toLowerCase().trim();
//   const FEATURES = FEATURES_DATA[normalizedSlug] || FEATURES_DATA['web-development'];

//   return (
//     <section className="pt_120 pb_120 chooseus-style-two centred">
//       <div className="auto-container">
//         <div className="sec-title pb_20 sec-title-animation animation-style2">
//           <h2 className="title-animation pb_35">Essential Services for Modern Digital Marketing</h2>
//         </div>

//         {/* Repeat Section Only Once */}
//         <div className="row clearfix">
//           {FEATURES.map((item, index) => (
//             <div key={index} className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
//               <div className="chooseus-block-one">
//                 <div className="inner-box">
//                   <div className="icon-box no-rotate">
//                     <Image src={item.image} alt={item.title} width={60} height={60} />
//                   </div>
//                   <h3>
//                     <a>{item.title}</a>
//                   </h3>
//                   <p>{item.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import Image from 'next/image';
import Link from 'next/link';

import './servicesection.scss';
const services = [
  {
    title: 'Web Development',
    img: '/images/services/service1.png',
    link: '/services/web-development',
    para:' Marketing repurpose success in professions whereas in services sapien maximus design.',
  },
  {
    title: 'IT Management',
    img: '/images/services/service2.png',
    link: '/services/it-management',
    para:' Marketing repurpose success in professions whereas in services sapien maximus design.',

  },
  {
    title: 'Digital Marketing',
    img: '/images/services/service3.png',
    link: '/services/digital-marketing',
    para:' Marketing repurpose success in professions whereas in services sapien maximus design.',

  },
  {
    title: 'App Development',
    img: '/images/services/service4.png',
    link: '/services/app-development',
    para:' Marketing repurpose success in professions whereas in services sapien maximus design.',

  },
];

const SolutekServices = () => {
  return (
    <div className="sservice-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h5 className="section-sub-title">SOLUTEK COMPANY</h5>
              <h1 className="section-main-title">How Professional IT Services</h1>
              <h1 className="section-main-title">
                Can Drive <span>Success.</span>
              </h1>
            </div>
          </div>

          {services.map((service, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div className="service-single-box">
                <div className="service-icon">
                  <Image src={service.img} alt={service.title} width={64} height={64} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.para}  </p>
                  <div className="service-btn">
                    <Link href={service.link}>
                      <i className="fas fa-plus"></i> READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative Shapes */}
          <div className="service-shape bounce-animate3">
            <Image
              src="/images/services/service5.webp"
              alt="shape"
              width={100}
              height={100}
              style={{ width: '199px', height: '420px', aspectRatio: '199 / 420' }}
            />
          </div>

          <div className="service-shape2">
            <Image src="/images/services/service7.png" alt="shape" width={100} height={100} />
          </div>
          <div className="service-shape3 bounce-animate4">
            <Image
              src="/images/services/service8.png"
              alt="shape"
              width={100}
              height={100}
              style={{ width: '341px', height: '351px', aspectRatio: '341 / 351' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SolutekServices;

