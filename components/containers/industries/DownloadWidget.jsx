import Image from "next/image";

const DownloadWidget = ({ bgShape, image, title, spanTitle, buttonText }) => (
  <div className="download-widget mt-5 mb-5">
    <div
      className="shape"
      style={{
        backgroundImage: `url(${bgShape})`,
      }}
    ></div>
    <div className="inner-box">
      <figure className="image-box">
        <Image
          src={image || ""}
          alt={`${title} ${spanTitle} preview`}
          width={200}
          height={300}
        />
      </figure>
      <h4>
        {title}
        <span>{spanTitle}</span>
      </h4>
      <button type="button" className="theme-btn btn-one">
        {buttonText}
      </button>
    </div>
  </div>
);

export default DownloadWidget;
  
