





// components/locations/WhyChooseUs.js
import { Col, Container, Row } from 'react-bootstrap';
import { FaUserTie, FaUsers, FaLightbulb, FaCheckCircle, FaStar, FaDollarSign } from 'react-icons/fa';

const defaultData = [
  { icon: <FaUserTie />, title: 'All-in-One ERP Platform', description: 'Manage crm, scales, purchase, inventory, hrm , accounting from a single, unified system to boost business efficiency.' },
  { icon: <FaUsers />, title: 'Customizable Modules', description: 'Tailor the ERP software to suit your industry-specific needs with flexible and scalable module configurations.' },
  { icon: <FaLightbulb />, title: 'Seamless Integration', description: 'Easily connect with eCommerce platforms, POS systems and third-party applications to ensure smooth data flow across your business.' },
  { icon: <FaCheckCircle />, title: 'User-Friendly Interface', description: 'Intuitive dashboards and role-based access simplify operations and reduce the learning curve for your team.' },
  { icon: <FaStar />, title: 'Data Security & Cloud Access', description: 'Enjoy secure, cloud-based access to your business data with regular backups and advanced encryption standards.' },
  { icon: <FaDollarSign />, title: 'Dedicated Support & Training', description: 'Get access to expert assistance, onboarding and training to ensure a successful implementation and smooth day-to-day use.' },
];

const cardsByLocation = {
  hyderabad: [  
    { imgSrc: '/images/location/Hyderabad/StreamlinedBusiness.svg', title: 'Streamlined Business Automation', description: 'Enhance operational efficiency with smart ERP systems that automate repetitive tasks, helping teams focus on growth and innovation.' },
    { imgSrc: '/images/location/Hyderabad/TailoredIndustry.svg', title: 'Tailored Industry Modules', description: 'Access specialized modules crafted to meet the specific needs of your sector, from finance to supply chain management.' },
    { imgSrc: '/images/location/Hyderabad/FlexibleDeployment.svg', title: 'Flexible Deployment Options', description: 'Choose cloud or on-site solutions that scale with your business, ensuring seamless performance and secure data management.' },
    { imgSrc: '/images/location/Hyderabad/ActionableAnalytics.svg', title: 'Actionable Insights & Analytics', description: 'Transform raw data into meaningful insights with customizable dashboards and reports for strategic decision-making.' },
    { imgSrc: '/images/location/Hyderabad/SmoothSoftware.svg', title: 'Smooth Software Integration', description: 'Easily connect your ERP with existing tools and applications to maintain a continuous workflow without disruptions.' },
    { imgSrc: '/images/location/Hyderabad/ReliableTechnical.svg', title: 'Reliable Technical Support', description: 'Benefit from dedicated support that resolves issues promptly and ensures uninterrupted operations.' },
  ], 
coimbatore: [
  { imgSrc: '/images/location/Coimbatore/EfficientProcess.svg', title: 'Efficient Process Management', description: 'Automate core operations and streamline workflows to save time, reduce errors and boost overall productivity.' },
  { imgSrc: '/images/location/Coimbatore/SectorSpecificERP.svg', title: 'Sector-Specific ERP Tools', description: 'Implement modules designed for specific industries, covering inventory, HR, sales and accounting seamlessly.' },
  { imgSrc: '/images/location/Coimbatore/FlexibleDeployment.svg', title: 'Flexible Deployment', description: 'Opt for cloud-based or on-premise ERP solutions, providing flexibility and secure access anytime.' },
  { imgSrc: '/images/location/Coimbatore/SmartReporting.svg', title: 'Smart Reporting & Analytics', description: 'Monitor performance metrics and generate detailed reports to make well-informed business decisions.' },
  { imgSrc: '/images/location/Coimbatore/IntegratedBusiness.svg', title: 'Integrated Business Systems', description: 'Ensure smooth interaction between your ERP and other business software to maintain operational continuity.' },
  { imgSrc: '/images/location/Coimbatore/DedicatedERP.svg', title: 'Dedicated ERP Assistance', description: 'Access professional support for troubleshooting and guidance, keeping your business processes uninterrupted.' },
],
chennai: [
  { icon: <img src="/images/location/Chennai/ModernSolutions.svg" alt="Modern ERP Solutions" />, title: 'Modern ERP Solutions', description: 'Upgrade to intelligent ERP systems that optimize workflows and improve collaboration across teams.' },
  { icon: <img src="/images/location/Chennai/CustomModules.svg" alt="Custom Modules" /> , title: 'Custom Modules', description: 'Utilize modules built to handle sector-specific challenges efficiently, from production to customer management.' },
  { icon: <img src="/images/location/Chennai/ScalableDeployment.svg" alt="Scalable Deployment Choices" /> , title: 'Scalable Deployment Choices', description: 'Deploy solutions on the cloud or on-premise to match your company’s growth and technological infrastructure.' },
  { icon: <img src="/images/location/Chennai/DecisionAnalytics.svg" alt="Decision Analytics" /> , title: 'Decision Analytics', description: 'Leverage analytics and reporting tools that provide actionable insights to drive better results.' },
  { icon: <img src="/images/location/Chennai/SeamlessConnectivity.svg" alt="Seamless System Connectivity" /> , title: 'Seamless System Connectivity', description: 'Integrate ERP with other software to ensure smooth, uninterrupted operations across all departments.' },
  { icon: <img src="/images/location/Chennai/ExpertGuidance.svg" alt="Expert ERP Guidance" /> , title: 'Expert ERP Guidance', description: 'Receive round-the-clock assistance to address technical issues and optimize system usage.' },
  ],
  bangalore: [
    { icon: <img src="/images/location/Bangalore/StreamlinedBusiness.svg" alt="Streamlined Business Workflows" />, 
    title: 'Streamlined Business Workflows', 
    description: 'Enhance productivity with ERP solutions that automate routine tasks and improve team efficiency.' 
    },
    { 
    icon: <img src="/images/location/Bangalore/
    .svg" alt="Industry Modules" />,
          title: 'Industry Modules', 
           description: 'Implement modules specifically built for sector-specific challenges, from finance to operations.' 
       },
    { 
    icon: <img src="/images/location/Bangalore/DeploymentOptions.svg" alt="Deployment Options" />, 
          title: 'Deployment Options', 
    description: 'Choose cloud or on-premise ERP solutions to match your company’s needs and infrastructure.' 
    },
    { 
    icon: <img src="/images/location/Bangalore/AnalyticsReports.svg" alt="Analytics & Reports" />, 
    title: 'Analytics & Reports', 
    description: 'Use dashboards and reports to track performance, monitor trends and make informed decisions.' 
    },
    { 
    icon: <img src="/images/location/Bangalore/SystemIntegration.svg" alt="System Integration" />, 
    title: 'System Integration', 
    description: 'Ensure ERP works in harmony with your existing software for seamless operations.' 
    },
    { 
    icon: <img src="/images/location/Bangalore/DedicatedSupport.svg" alt="Dedicated ERP Support" />, 
    title: 'Dedicated ERP Support', 
    description: 'Receive round-the-clock assistance for troubleshooting and optimization of your ERP system.' 
    },
    ],
kolkata: [
  { imgSrc: '/images/location/Kolkata/BusinessProcess.svg',  title: 'Business Process Optimization', description: 'Enhance efficiency with ERP platforms that simplify daily operations and reduce manual effort.' },
  { imgSrc: '/images/location/Kolkata/Industry-Ready.svg',  title: 'Industry-Ready Modules', description: 'Manage finance, HR, inventory and sales with modules designed specifically for your business needs.' },
  { imgSrc: '/images/location/Kolkata/DeploymentFlexibility.svg',  title: 'Deployment Flexibility', description: 'Select from cloud or on-premise options to suit your business scale and IT environment.' },
  { imgSrc: '/images/location/Kolkata/AnalyticalReporting.svg',  title: 'Analytical Reporting', description: 'Turn data into insights with reporting and dashboards that help monitor business performance closely.' },
  { imgSrc: '/images/location/Kolkata/SmoothERP.svg',  title: 'Smooth ERP Integration', description: 'Connect your ERP system with other business tools for consistent workflow management.' },
  { imgSrc: '/images/location/Kolkata/ResponsiveTechnical.svg',  title: 'Responsive Technical Support', description: 'Get timely support to solve issues and keep your ERP running efficiently.' },
],
mumbai: [
  { imgSrc: '/images/location/Mumbai/Intelligent ERP Management.png',  title: 'Intelligent ERP Management', description: 'Automate operations and reduce errors with smart ERP systems tailored for fast-paced business environments.' },
  { imgSrc: '/images/location/Mumbai/Modular ERP.png', title: 'Modular ERP', description: 'Choose from a range of modules that address industry-specific requirements efficiently.' },
  { imgSrc: '/images/location/Mumbai/CloudOn-Premise.svg',  title: 'Cloud & On-Premise', description: 'Implement solutions on the cloud or on-site, depending on your infrastructure and growth plans.' },
  { imgSrc: '/images/location/Mumbai/DataSecurity.svg',  title: 'Data-Driven Insights', description: 'Leverage analytics dashboards to make informed decisions and improve business outcomes.' },
  { imgSrc: '/images/location/Mumbai/Integrated Systems.png',  title: 'Integrated Systems', description: 'Ensure seamless communication between ERP and existing applications to maintain productivity.' },
  { imgSrc: '/images/location/Mumbai/Reliable Support Services.png',  title: 'Reliable Support Services', description: 'Access technical support that helps your team resolve issues quickly and stay productive.' },
],
kochi: [
  { imgSrc: '/images/location/Kochi/StreamlinedOperations.svg',  title: 'Streamlined Operations', description: 'Simplify daily tasks and boost operational efficiency with smart ERP solutions.' },
  { imgSrc: '/images/location/Kochi/Industry-Centric.svg',  title: 'Industry-Centric Modules', description: 'Use modules designed for specific sectors to handle finance, sales, inventory and HR efficiently.' },
  { imgSrc: '/images/location/Kochi/TailoredDeployment.svg',  title: 'Tailored Deployment Solutions', description: 'Select cloud or on-premise deployment options for secure, scalable and flexible ERP systems.' },
  { imgSrc: '/images/location/Kochi/InsightfulAnalytics.svg',  title: 'Insightful Analytics', description: 'Gain clarity on your business with advanced reporting and analytics tools.' },
  { imgSrc: '/images/location/Kochi/IntegratedWorkflows.svg',  title: 'Integrated Workflows', description: 'Combine ERP with other business software to maintain smooth and consistent operations.' },
  { imgSrc: '/images/location/Kochi/ProfessionalSupport.svg',  title: 'Professional Support', description: 'Enjoy prompt, expert support to resolve ERP issues and enhance system performance.' },
],
delhi: [
  { imgSrc: '/images/location/Delhi/EfficientBusiness.svg',  title: 'Efficient Business Automation', description: 'Improve efficiency by automating repetitive processes and allowing teams to focus on strategic tasks.' },
  { imgSrc: '/images/location/Delhi/SpecializedModules.svg',  title: 'Specialized Modules', description: 'Access modules built for industry-specific needs, including finance, HR and operations management.' },
  { imgSrc: '/images/location/Delhi/FlexibleERP.svg ',  title: 'Flexible ERP Deployment', description: 'Deploy ERP solutions on cloud or on-premise platforms according to your infrastructure needs.' },
  { imgSrc: '/images/location/Delhi/AnalyticsTools.svg',  title: 'Analytics Tools', description: 'Use dashboards and reporting tools to make data-driven business decisions confidently.' },
  { imgSrc: '/images/location/Delhi/SeamlessSoftware.svg',  title: 'Seamless Software Integration', description: 'Ensure smooth ERP connectivity with existing business applications for uninterrupted workflow.' },
  { imgSrc: '/images/location/Delhi/DedicatedSupport.svg',  title: 'Dedicated Support Team', description: 'Receive timely assistance from experts to maintain consistent ERP performance.' },
],
ahmedabad: [
  { imgSrc: '/images/location/Ahmedabad/SmartOperations.svg',  title: 'Smart Operations Management', description: 'Boost efficiency and reduce errors with ERP solutions that streamline everyday business activities.' },
  { imgSrc: '/images/location/Ahmedabad/IndustrySpecific.svg',  title: 'Industry-Specific Functionality', description: 'Deploy modules designed to meet the unique requirements of your sector efficiently.' },
  { imgSrc: '/images/location/Ahmedabad/CloudOn-Site.svg',  title: 'Cloud & On-Site', description: 'Choose ERP deployment that fits your infrastructure, providing secure access and scalability.' },
  { imgSrc: '/images/location/Ahmedabad/_x31_79.svg',  title: 'Reporting & Analytics', description: 'Monitor KPIs and generate insights to make strategic, data-driven decisions.' },
  { imgSrc: '/images/location/Ahmedabad/IntegratedERP.svg',  title: 'Integrated ERP Systems', description: 'Ensure smooth integration with other tools to maintain uninterrupted business processes.' },
  { imgSrc: '/images/location/Ahmedabad/Group.svg',  title: 'Tech Support', description: 'Get professional support to troubleshoot issues and optimize ERP usage.' },
],
vizag: [
  { imgSrc: '/images/location/Vizag/OptimizeDaily.svg',  title: 'Optimize Daily Operations', description: 'Simplify complex business processes with ERP platforms designed for efficiency and accuracy.' },
  { imgSrc: '/images/location/Vizag/CustomModules.svg',  title: 'Custom Modules', description: 'Manage your sector-specific operations with ERP modules covering finance, inventory and HR.' },
  { imgSrc: '/images/location/Vizag/DeploymentOptions.svg',  title: 'Deployment Options', description: 'Select cloud or on-premise solutions for secure, scalable and flexible ERP usage.' },
  { imgSrc: '/images/location/Vizag/DataInsights.svg',  title: 'Data Insights & Dashboards', description: 'Make better decisions with advanced analytics and reporting tools.' },
  { imgSrc: '/images/location/Vizag/ERPIntegration.svg',  title: 'ERP Integration', description: 'Connect seamlessly with existing systems for uninterrupted workflows.' },
  { imgSrc: '/images/location/Vizag/ExpertSupport.svg',  title: 'Expert Support Team', description: 'Access professional help to maintain smooth operations and resolve issues quickly.' },
],

UAE: [
  {   icon: <img src="/images/location/Bangalore/StreamlinedBusiness.svg" alt="Streamlined Business Workflows" />, 
    title: 'Unified Business Operations', 
    description: 'Simplify core functions and improve efficiency with ERP tools built for growing enterprises.' 
    },
    { 
    icon: <img src="/images/location/Bangalore/IndustryModules.svg" alt="Industry Modules" />,
          title: 'Industry-Focused ERP Modules', 
           description: 'Access modules that fit diverse sectors, enabling smooth management of finance, HR and logistics.' 
       },
    { 
    icon: <img src="/images/location/Bangalore/DeploymentOptions.svg" alt="Deployment Options" />, 
          title: 'Secure Deployment Models', 
    description: 'Enjoy the flexibility of cloud or on-premise ERP systems designed for data safety and scalability.' 
    },
    { 
    icon: <img src="/images/location/Bangalore/AnalyticsReports.svg" alt="Analytics & Reports" />, 
    title: 'Real-Time Insights', 
    description: 'Track progress through dynamic dashboards and actionable analytics for informed decisions.' 
    },
    { 
    icon: <img src="/images/location/Bangalore/SystemIntegration.svg" alt="System Integration" />, 
    title: 'Effortless Integration', 
    description: 'Connect ERP with your existing software ecosystem to streamline every business process.' 
    },
    { 
    icon: <img src="/images/location/Bangalore/DedicatedSupport.svg" alt="Dedicated ERP Support" />, 
    title: 'Reliable Support Network', 
    description: 'Receive continuous technical assistance to keep your operations running without interruptions.' 
    },
],
 
    dubai: [
      {
        icon: <img src="/images/location/Bangalore/StreamlinedBusiness.svg" alt="Streamlined Business Workflows" />,
        title: 'Smart ERP Infrastructure',
        description: 'Automate business processes and empower teams with a centralized, intelligent ERP platform.'
      },
      {
        icon: <img src="/images/location/Bangalore/IndustryModules.svg" alt="Industry Modules" />,
        title: 'Specialized ERP Solutions',
        description: 'Leverage customized modules that align perfectly with your business goals and operations.'
      },
      {
        icon: <img src="/images/location/Bangalore/DeploymentOptions.svg" alt="Deployment Options" />,
        title: 'Cloud & On-Site Flexibility',
        description: 'Choose the deployment method that best supports your company’s workflow and data access needs.'
      },
      {
        icon: <img src="/images/location/Bangalore/AnalyticsReports.svg" alt="Analytics & Reports" />,
        title: 'Insightful Business Analytics',
        description: 'Use visual reports and dashboards to identify trends and improve strategic decision-making.'
      },
      {
        icon: <img src="/images/location/Bangalore/SystemIntegration.svg" alt="System Integration" />,
        title: 'Seamless Connectivity',
        description: 'Integrate ERP with third-party applications for uninterrupted and cohesive workflows.'
      },
      {
        icon: <img src="/images/location/Bangalore/DedicatedSupport.svg" alt="Dedicated ERP Support" />,
        title: 'Expert Technical Assistance',
        description: 'Count on our professionals for quick support and system optimization anytime you need it.'
      },
    ],
    bahrain: [
      { 
        icon: <img src="/images/location/Bangalore/Complete Business Automation.svg" alt="Streamlined Business Workflows" /> ,
        title: "Complete Business Automation", 
        description: "Enhance productivity by digitizing operations with a powerful ERP system that adapts to your business.", 
      },
      { 
      
        icon: <img src="/images/location/Bangalore/Sector-Centric Modules.svg" alt="Industry Modules" /> ,
        title: "Sector-Centric Modules", 
        description: "Manage every department efficiently with ERP modules customized for various industries.", 
      },
      { 
       icon: <img src="/images/location/Bangalore/Scalable Cloud Solutions.svg" alt="Deployment Options" /> ,
       title: "Scalable Cloud Solutions", 
       description: "Experience flexibility with secure, scalable ERP deployments designed for modern enterprises.", 
       
      },
      {  
        icon: <img src="/images/location/Bangalore/Data-Driven Intelligence.svg" alt="Analytics & Reports" /> ,
        title: "Data-Driven Intelligence", 
        description: "Monitor key performance metrics through insightful analytics and reporting tools.", 
      },
      { 
        icon: <img src="/images/location/Bangalore/Connected Operations.svg" alt="System Integration" /> ,
        title: "Connected Operations", 
        description: "Integrate all business functions under one unified system for better visibility and control.", 
       
      },
      { 
       
        icon: <img src="/images/location/Bangalore/Trusted Customer Support.svg" alt="Dedicated ERP Support" /> ,
        title: "Trusted Customer Support", 
        description: "Rely on experienced ERP specialists for dependable support and system guidance.", 
      },
    ],
  
    Kuwait: [
      { 
        title: "Simplified ERP Management", 
        description: "Transform daily business tasks with intelligent ERP tools that automate and optimize workflows.", 
        icon: <img src="/images/location/Bangalore/Simplified ERP Management.svg" alt="Streamlined Business Workflows" /> 
      },
      { 
        title: "Industry-Ready Modules", 
        description: "Handle finance, operations and inventory effortlessly using purpose-built ERP modules.", 
        icon: <img src="/images/location/Bangalore/Industry-Ready Modules.svg" alt="Industry Modules" /> 
      },
      { 
        title: "Flexible ERP Setup", 
        description: "Select cloud or on-premise deployment to align with your data and infrastructure goals.", 
        icon: <img src="/images/location/Bangalore/Flexible ERP Setup.svg" alt="Deployment Options" /> 
      },
      { 
        title: "Performance Tracking Tools", 
        description: "Access real-time analytics that help you measure progress and identify growth opportunities.", 
        icon: <img src="/images/location/Bangalore/Performance Tracking Tools.svg" alt="Analytics & Reports" /> 
      },
      { 
        title: "Smooth Integration Capability", 
        description: "Combine ERP with existing platforms to maintain uninterrupted business continuity.", 
        icon: <img src="/images/location/Bangalore/Smooth Integration Capability.svg" alt="System Integration" /> 
      },
      { 
        title: "Dedicated Support System", 
        description: "Get responsive technical assistance that ensures efficiency and reliability across your ERP system.", 
        icon: <img src="/images/location/Bangalore/DedicatedSupport.svg" alt="Dedicated ERP Support" /> 
      },
    ],
  
    Oman: [
      { 
        title: "Next-Gen ERP Platform", 
        description: "Simplify complex workflows and improve team coordination through modern ERP automation.", 
        icon: <img src="/images/location/Bangalore/Next-Gen ERP Platform.svg" alt="Streamlined Business Workflows" /> 
      },
      { 
        title: "Business-Centric Modules", 
        description: "Manage key areas like finance, HR and supply chain using modules tailored for your industry.", 
        icon: <img src="/images/location/Bangalore/Business-Centric Modules.svg" alt="Industry Modules" /> 
      },
      { 
        title: "Cloud or On-Premise Flexibility", 
        description: "Deploy your ERP securely on the cloud or maintain it on-site, depending on your business needs.", 
        icon: <img src="/images/location/Bangalore/Cloud or On-Premise Flexibility.svg" alt="Deployment Options" /> 
      },
      { 
        title: "Comprehensive Analytics", 
        description: "Use data-driven dashboards to track goals, enhance forecasting and improve decisions.", 
        icon: <img src="/images/location/Bangalore/Comprehensive Analytics.svg" alt="Analytics & Reports" /> 
      },
      { 
        title: "Integrated Business Systems", 
        description: "Ensure seamless communication between departments with an interconnected ERP solution.", 
        icon: <img src="/images/location/Bangalore/Integrated Business Systems.svg" alt="System Integration" /> 
      },
      { 
        title: "Ongoing Technical Assistance", 
        description: "Stay supported with expert help and proactive maintenance to keep your ERP performing at its best.", 
        icon: <img src="/images/location/Bangalore/Ongoing Technical Assistance.svg" alt="Dedicated ERP Support" /> 
      },
    ],
  
    Qatar: [
      { 
        title: "Advanced ERP Framework", 
        description: "Digitize and unify your operations with ERP solutions built for growing organizations.", 
        icon: <img src="/images/location/Delhi/Advanced ERP Framework.svg" alt="Efficient Business Automation" /> 
      },
      { 
        title: "Custom-Built Modules", 
        description: "Experience tailored modules that align with specific business functions and industry standards.", 
        icon: <img src="/images/location/Delhi/Custom-Built Modules.svg" alt="Specialized Modules" /> 
      },
      { 
        title: "Deployment That Adapts", 
        description: "Opt for cloud-based or local installations offering flexibility and secure data management.", 
        icon: <img src="/images/location/Delhi/Deployment That Adapts.svg" alt="Flexible ERP Deployment" /> 
      },
      { 
        title: "Real-Time Reporting", 
        description: "Gain visibility into operations through analytics tools and performance dashboards.", 
        icon: <img src="/images/location/Delhi/Real-Time Reporting.svg" alt="Analytics Tools" /> 
      },
      { 
        title: "Effortless ERP Integration", 
        description: "Connect systems, tools and teams in one cohesive platform for smooth business flow.", 
        icon: <img src="/images/location/Delhi/Effortless ERP Integration.svg" alt="Seamless Software Integration" /> 
      },
      { 
        title: "Dependable Support Services", 
        description: "Get continuous guidance and rapid issue resolution from an experienced ERP team.", 
        icon: <img src="/images/location/Delhi/Dependable Support Services.svg" alt="Dedicated Support Team" /> 
      },
    ],
  
    USA: [
      { 
        title: "Comprehensive ERP Solutions", 
        description: "Automate business functions and enhance decision-making through intelligent ERP software.", 
        icon: <img src="/images/location/Delhi/Comprehensive ERP Solutions.svg" alt="Efficient Business Automation" /> 
      },
      { 
        title: "Industry-Specific Functionality", 
        description: "Access versatile modules designed for manufacturing, retail, services and more.", 
        icon: <img src="/images/location/Delhi/Industry-Specific Functionality.svg" alt="Specialized Modules" /> 
      },
      { 
        title: "Cloud & Hybrid Deployments", 
        description: "Choose between cloud or hybrid ERP systems for scalable, secure business performance.", 
        icon: <img src="/images/location/Delhi/Cloud & Hybrid Deployments.svg" alt="Flexible ERP Deployment" /> 
      },
      { 
        title: "Insight-Driven Dashboards", 
        description: "Make strategic decisions faster using data visualization and performance tracking.", 
        icon: <img src="/images/location/Delhi/Insight-Driven Dashboards.svg" alt="Analytics Tools" /> 
      },
      { 
        title: "Streamlined Business Connectivity", 
        description: "Integrate ERP with your existing technology stack to unify processes company-wide.", 
        icon: <img src="/images/location/Delhi/Streamlined Business Connectivity.svg" alt="Seamless Software Integration" /> 
      },
      { 
        title: "Global ERP Support", 
        description: "Enjoy 24/7 technical support and maintenance for uninterrupted business operations.", 
        icon: <img src="/images/location/Delhi/Global ERP Support.svg" alt="Dedicated Support Team" /> 
      },
    ],
};

export default function WhyChooseUs({ locationKey }) {
  const data = cardsByLocation[locationKey] || defaultData;

  return (
    <section className="whyChooseUs">
       <Container>
             <Row>
               <Col>
                 {/* <h2 className="heading">Why Choose Tech Cloud ERP?</h2> */}
                 <div className="grid">
                   {data.map((item, index) => (
                     <div
                       key={item.title || index}
                       className="card"
                       style={{ animationDelay: `${index * 0.2}s` }}
                     >
                       {/* <div className="icon">{item.imgSrc}</div> */}
                       <div className="icon">{item.imgSrc ? <img src={item.imgSrc} alt={item.title} loading="lazy"   width={50}  height={50}/> : item.icon}</div>
     
                       <h3>{item.title}</h3>
                       <p>{item.description}</p>
                     </div>
                   ))}
                 </div>
               </Col>
             </Row>
           </Container>
    </section>
  );
}