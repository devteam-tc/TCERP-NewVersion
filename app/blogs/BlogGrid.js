import Link from "next/link";
import Image from "next/image";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import PageHeader from "../../components/layout/PageHeader";
import data from '../../data/blog2.json';
import  "./BlogGrid.scss";
import { BsArrowRight } from "react-icons/bs";

const BlogGrid = () => {
  return (
    <>
      <Header />
      <PageHeader title="Blogs" description="Discover Expert ERP Tips & Insights for Growth" />
      <section className="newsSection section-padding section-bg">
        <div className="leftShape">
          <Image src="/assets/img/news/left-shape.png" alt="img" width={100} height={300} />
        </div>
       
        <div className="container">
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="blogBox">
                  <div className="imageAnime">
                    <Image src={item.img} alt="img" width={416} height={315} />
                  </div>
                  <div className="heading1">
                    <div className="authorArea">
                      <a href="#" className="date">
                        <Image src="/images/blog/author.svg" alt="img" width={20} height={20} /> Alex Roy
                      </a>
                      <a href="#" className="date">
                        <Image src="/images/blog/date.svg" alt="img" width={20} height={20} /> 8 December 2024
                      </a>
                    </div>
                    <h5><Link href="/blogs-details">{item.title}</Link></h5>
                    <div className="space20"></div>
                    <Link className="themeBtn1" href="/blogs-details">
                      Read More <span><BsArrowRight /></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogGrid;