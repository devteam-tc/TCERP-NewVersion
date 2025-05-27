import CustomSection from '../components/containers/modules/CustomSection';

const AboutPage = () => {
    return (
        <div className="about-page">
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
                img1="/assets/images/wcu/wcuThumb2_1.png"
                img2="/assets/images/wcu/wcuThumb2_2.png"
                img3="/assets/images/wcu/wcuThumb2_3.png"
            />
        </div>
    );
};

export default AboutPage; 