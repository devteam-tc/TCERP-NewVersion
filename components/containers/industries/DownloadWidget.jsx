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
          width={300}
          height={300}
        />
      </figure>
      <h4 style={{
        textAlign: "left"
      }}>
        {title}
        <span style={{color: "var(--bs-primary-500)", fontSize: "16px", fontWeight: "600"}}>{spanTitle}</span>
      </h4>
      <button 
        type="button"
        style={{
          background: "linear-gradient(45deg, var(--bs-primary-500), var(--bs-primary-700))",
          color: "white",
          border: "none",
          padding: "10px 40px",
          borderRadius: "50px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          fontWeight: "500"
        }}
        onMouseOver={(e) => e.target.style.opacity = "0.9"}
        onMouseOut={(e) => e.target.style.opacity = "1"}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default DownloadWidget;
  
