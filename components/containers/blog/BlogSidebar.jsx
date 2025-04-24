import { blogSidebar } from "../../../data/blog"
import { categories } from "../../../data/categories"
import { blogTags } from "../../../data/tags"
import Image from "next/image"
import Link from "next/link"

const BlogSidebar = () => {
  return (
    <aside className="blog-sidebar">
      <div className="blog-widget">
        <div className="section-title-block mb-20">
          <h6 className="section-sub-title position-relative d-inline-block mb-0">Search</h6>
        </div>
        <form action="#">
          <div className="input-group position-relative">
            <input type="email" className="form-control shadow-none" placeholder="Type here..." />
            <button className="position-absolute top-0 end-0 z-3" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
      </div>
      <div className="blog-widget">
        <div className="section-title-block mb-20">
          <h6 className="section-sub-title position-relative d-inline-block mb-0">Category</h6>
        </div>
        <ul className="list-unstyled inner_category">
          {categories.map((category, index) => (
            <li key={index}>
              <Link className="d-flex align-items-center justify-content-between" href="#">
                {category.name} <span className="flex-shrink-0">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="blog-widget">
        <div className="section-title-block mb-20">
          <h6 className="section-sub-title position-relative d-inline-block mb-0">Recent Post</h6>
        </div>
        <div className="recent-blog">
          {
            blogSidebar.map((blog) => (
              <div key={blog.id} className="blog-sm-item d-flex align-items-center">
                <div className="image flex-shrink-0 overflow-hidden">
                  <Link href="/blog-details" className="d-block w-100">
                    <Image priority src={blog.img} alt="blog-sm-img" className="img-fluid w-100" />
                  </Link>
                </div>
                <div className="text">
                  <ul className="blog-meta list-unstyled d-flex flex-wrap">
                    <li><Link href="/blog-details">{blog.category}</Link></li>
                    <li><Link href="/blog-details">Comments ({blog.comments})</Link></li>
                  </ul>
                  <h5 className="blog-title">
                    <Link href="/blog-details">{blog.title}</Link>
                  </h5>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="blog-widget">
        <div className="section-title-block mb-20">
          <h6 className="section-sub-title position-relative d-inline-block mb-0">Tags</h6>
        </div>
        <ul className="list-unstyled tags d-flex align-items-center flex-wrap gap-3">
          {blogTags.map((tag) => (
            <li key={tag.id}><Link href="/blog-details">{tag.name}</Link></li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default BlogSidebar
