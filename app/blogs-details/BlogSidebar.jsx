import './Sidebar.scss';
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { FaCalendarAlt  } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import RecentPost from './RecentPost';

const BlogSidebar = () => {
  return (
    <div className="main-sidebar sticky-style">
    <div className="single-sidebar-widget">
        <div className="wid-title">
            <h4>Search</h4>
        </div>
        <div className="search-widget">
            <form action="#">
                <input type="text" placeholder="Search here" />
                <button type="submit"><BiSearch /></button>
            </form>
        </div>
    </div>
    <div className="single-sidebar-widget">
        <div className="wid-title">
            <h4>All Services</h4>
</div>
        <div className="news-widget-categories">
            <ul>
                <li><Link href="/blog/blog-details">Digital Agency</Link> <span>(7)</span></li>
                <li><Link href="/blog/blog-details">Business</Link> <span>(4)</span></li>
                <li className="active"><Link href="/blog/blog-details">Digital Product</Link> <span>(5)</span></li>
                <li><Link href="/blog/blog-details">Social Marketing</Link> <span>(3)</span></li>
                <li><Link href="/blog/blog-details">System</Link> <span>(6)</span></li>
            </ul>
        </div>
    </div>
   <RecentPost />
</div>
  )
}

export default BlogSidebar
