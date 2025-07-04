import Image from "next/image";
import Link from "next/link";
import './Sidebar.scss';
import { FaCalendarAlt } from "react-icons/fa";
 
const RecentPost = () => {
  return (
    <>
      <div className="single-sidebar-widget">
        <div className="wid-title">
            <h3>Recent Post</h3>
        </div>
        <div className="recent-post-area">
            <div className="recent-items">
                <div className="recent-thumb">
                    <Image src="/images/blog/pp3.jpg" alt="img" width={60} height={60} />
                </div>
                <div className="recent-content">
                    <ul>
                        <li>
                            <FaCalendarAlt /> 14 Feb, 2024
                        </li>
                    </ul>
                    <h6>
                        <Link href="/blog/blog-details">
                            Which Yoga Hybrid is Right <br/> for Your?
                        </Link>
                    </h6>
                </div>
            </div>
            <div className="recent-items">
                <div className="recent-thumb">
                    <Image src="/images/blog/pp3.jpg" alt="img" width={60} height={60} />
                </div>
                <div className="recent-content">
                    <ul className='listed-menu'>
                        <li>
                            <FaCalendarAlt /> 12 Mar, 2024
                        </li>
                    </ul>
                    <h6>
                        <Link href="/blog/blog-details">
                            Keep Your Business Safe <br/> Ensure High Availability
                        </Link>
                    </h6>
                </div>
            </div>
            <div className="recent-items">
                <div className="recent-thumb">
                    <Image src="/images/blog/pp3.jpg" alt="img" width={60} height={60} />
                </div>
                <div className="recent-content">
                    <ul>
                        <li>
                            <FaCalendarAlt /> 23 Feb, 2024
                        </li>
                    </ul>
                    <h6>
                        <Link href="/blog/blog-details">
                            Tackling the Changes of <br/> Retell Industry
                        </Link>
                    </h6>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default RecentPost;
