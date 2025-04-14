import Image from 'next/image';

const DownloadSection = () => {
  return (
    <section className="download-section alternat-2 pb_120 pt_120">
      <div className="auto-container">
        <div className="inner-container">
        <div className="pattern-layer" style={{ backgroundImage: `url('/images/servicescards/background-download.png')`, }} ></div>


          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h2>
                  The 2024 guide for Optimal Content <span>Management</span>
                </h2>
                <ul className="list-item mb_30">
                  <li>
                    Start by explaining the fundamental concepts of talent
                    acquisition.
                  </li>
                  <li>
                    Provide guidance on crafting clear and compelling job
                    descriptions that accurately reflect.
                  </li>
                  <li>
                    Practical tips for conducting effective interviews, including
                    types of interview questions and formats.
                  </li>
                </ul>
                <button type="button" className="theme-btn btn-one">
                  Download E-book
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <figure className="image">
                  <Image
                    src="/images/servicescards/book-1.png"
                    alt="E-book cover"
                    width={300}
                    height={400}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
