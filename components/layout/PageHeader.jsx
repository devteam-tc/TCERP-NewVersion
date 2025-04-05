import PageHeaderImg from '@/public/images/img/page-header-img.svg';
import Image from 'next/image';
import Link from 'next/link';

const PageHeader = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="ep-page-header-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="header-img">
              <Image priority src={PageHeaderImg} alt="page-header-img" />
            </div>
          </div>
          <div className="col-md-8 ms-auto">
            <div className="bread-crumb text-end">
            <h1 className="page-title">
              {title.replace(/\b\w/g, (char) => char.toUpperCase())}
            </h1>

              <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-end mt-30">
                {breadcrumbs.length > 0 && breadcrumbs.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <Link href={item.link}>{item.label}</Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <i className="fa-solid fa-chevron-right"></i>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
