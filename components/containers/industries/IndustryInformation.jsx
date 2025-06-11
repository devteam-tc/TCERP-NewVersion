const IndustryInformation = ({ data }) => (
    <div className="project-information">
      <h4 className="title text-center mb-30">Industry Information</h4>
      <ul className="list-unstyled options">
        <li className="d-flex align-items-start rounded-20 gap-4 section-bg">
          <h5 className="flex-shrink-0 label">Industry:</h5>
          <h6>{data.industry}</h6>
        </li>
        <li className="d-flex align-items-start rounded-20 gap-4 section-bg">
          <h5 className="flex-shrink-0 label">Solution:</h5>
          <h6>{data.solution}</h6>
        </li>
        <li className="d-flex align-items-start rounded-20 gap-4 section-bg">
          <h5 className="flex-shrink-0 label">Modules:</h5>
          <h6>{data.modules.join(", ")}</h6>
        </li>
        <li className="d-flex align-items-start rounded-20 gap-4 section-bg">
          <h5 className="flex-shrink-0 label">Result:</h5>
          <h6>{data.result.join(", ")}</h6>
        </li>
      </ul>
    </div>
  );

export default IndustryInformation;
  
