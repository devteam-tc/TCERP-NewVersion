import Image from "next/image";
import Link from "next/link";
import { FaUser, FaCalendarAlt, FaTag, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const BlogDetailsContent = () => (
    <><div className="single-news-post">
        <div className="post-featured-thumb">
            <Image src="/images/blog/details-1.jpg" alt="" width={800} height={400} />
        </div>
        <div className="post-content">
            <ul className="post-list d-flex align-items-center">
                <li>
                    <FaUser /> By Admin
                </li>
                <li>
                    <FaCalendarAlt /> 18 Dec, 2024
                </li>
                <li>
                    <FaTag /> Technology
                </li>
            </ul>
            <h3>Choose The Best IT Service Company in the City.</h3>
            <p className="mb-3">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
            </p>
            <p className="mb-3">
                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
            </p>
            <p className="mt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros.
            </p>
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="details-image">
                        <Image src="/images/blog/details-2.jpg" alt="img" width={400} height={250} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="details-image">
                        <Image src="/images/blog/details-3.jpg" alt="img" width={400} height={250} />
                    </div>
                </div>
            </div>
            <div className="hilight-text mt-4">
                <p>
                    Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit amet est vehicula.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z" stroke="#6A47ED"></path>
                    <path d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z" stroke="#6A47ED"></path>
                </svg>
            </div>
            <p className="pt-5">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
            </p>
        </div>
    </div><div className="row tag-share-wrap mt-4 mb-5">
            <div className="col-lg-8 col-12">
                <div className="tagcloud">
                    <span>Tags:</span>
                    <Link href="/blog/blog-details">Security</Link>
                    <Link href="/blog/blog-details">UI/UX Desing</Link>
                    <Link href="/blog/blog-details">Digital</Link>
                </div>
            </div>
            <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                <div className="social-share">
                    <span className="me-3">Share:</span>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
            </div>
        </div></>
);

export default BlogDetailsContent; 