import Image from "next/image";
import './CustomSection.scss';

const CustomSection = ({
    subtitle = "Customizations & Analysis",
    title = "Manage your Team's Easily Communication.",
    content = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even",
    boximg1 = "/assets/images/icon/wcuIcon2_1.svg",
    boxtitle1 = "Easy Collaboration",
    boxcontent1 = "There are many variations of passages of Lorem Ipsum available, but the majority have",
    boximg2 = "/assets/images/icon/wcuIcon2_2.svg",
    boxtitle2 = "Innovative Solutions",
    boxcontent2 = "There are many variations of passages of Lorem Ipsum available, but the majority have",
    img1 = "/assets/images/wcu/wcuThumb2_1.png",
    img2 = "/assets/images/wcu/wcuThumb2_2.png",
    img3 = "/assets/images/wcu/wcuThumb2_3.png"
}) => {
    return (
        <section className="wcu-section">
            <div className="wcu-container-wrapper style2">
                <div className="container">
                    <div className="wcu-wrapper style2 section-padding fix">
                        <div className="row gy-5 gx-60 d-flex align-items-center">
                            {/* Left Image Section */}
                            <div className="col-xl-6">
                                <div className="wcu-thumb">
                                    <div className="main-thumb img-custom-anim-right wow fadeInUp" data-wow-delay=".4s">
                                        <Image 
                                            src={img1} 
                                            alt="main image" 
                                            width={500} 
                                            height={365}
                                            priority
                                        />
                                    </div>
                                    <div className="thumb2 float-bob-y">
                                        <Image 
                                            src={img2} 
                                            alt="floating image 1" 
                                            width={215} 
                                            height={206}
                                        />
                                    </div>
                                    <div className="thumb3 float-bob-x">
                                        <Image 
                                            src={img3} 
                                            alt="floating image 2" 
                                            width={208} 
                                            height={206}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Content Section */}
                            <div className="col-xl-6">
                                <div className="wcu-content">
                                    <div className="section-title">
                                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                            {subtitle}
                                            <Image 
                                                src="/assets/images/icon/fireIcon.svg" 
                                                alt="fire icon" 
                                                width={16} 
                                                height={17}
                                            />
                                        </div>
                                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                                            {title}
                                        </h2>
                                        <p className="text1 wow fadeInUp" data-wow-delay=".6s">
                                            {content}
                                        </p>
                                    </div>
                                    <div className="fancy-box style3 mb-20 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="icon">
                                            <Image 
                                                src={boximg1} 
                                                alt={boxtitle1} 
                                                width={70} 
                                                height={70}
                                            />
                                        </div>
                                        <div className="content">
                                            <h4>{boxtitle1}</h4>
                                            <p className="text">{boxcontent1}</p>
                                        </div>
                                    </div>
                                    <div className="fancy-box style3 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="icon">
                                            <Image 
                                                src={boximg2} 
                                                alt={boxtitle2} 
                                                width={70} 
                                                height={70}
                                            />
                                        </div>
                                        <div className="content">
                                            <h4>{boxtitle2}</h4>
                                            <p className="text">{boxcontent2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomSection;



            <CustomSection
          
            subtitle="Customizations & Analysis" 
            title="Manage your Team's Easily Communication." 
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even" 
            boximg1="/assets/images/icon/wcuIcon2_1.svg" 
            boxtitle1="Easy Collaboration" 
            boxcontent1="There are many variations of passages of Lorem Ipsum available, but the majority have" 
            boximg2="/assets/images/icon/wcuIcon2_2.svg" 
            boxtitle2="Innovative Solutions" 
            boxcontent2="There are many variations of passages of Lorem Ipsum available, but the majority have" 
            ></CustomSection> 