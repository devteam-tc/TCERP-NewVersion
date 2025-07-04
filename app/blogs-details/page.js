import Link from "next/link";
import Image from "next/image";
import { FaUser, FaCalendarAlt, FaTag, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import BlogSidebar from "./BlogSidebar";
import './BlogDetails.scss';
import BlogDetailsContent from './BlogDetailsContent';
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import Footer from "../../components/layout/footer/Footer";


const BlogDetails = () => {
    return (
        <><Header />
    <PageHeader />
        <section className="news-details-section section-padding">
            <div className="container">
                <div className="news-details-wrapper">
                    <div className="row g-4">
                        <div className="col-12 col-lg-8">
                            <div className="news-post-details">

                                <BlogDetailsContent />

                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
            </>
    );
};

export default BlogDetails;