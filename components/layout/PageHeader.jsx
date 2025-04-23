import PageHeaderImg from '@/public/images/img/page-header-img.svg';
import Image from 'next/image';
import Link from 'next/link';

const PageHeader = ({ title = '', breadcrumbs = [] }) => {
  return (
    <section className="ep-page-header-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ms-auto">
            <div className="bread-crumb text-center">
            <h1 className="page-title">
              {title ? title.replace(/\b\w/g, (char) => char.toUpperCase()) : ''}
            </h1>

              <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-center mt-30">
                {breadcrumbs.length > 0 && breadcrumbs.map((item, index) => (
                  <li key={index} className="d-flex align-items-center">
                    {item.link ? (
                      <Link href={item.link} className="d-flex align-items-center">
                        {item.icon && <item.icon className="me-1" />}
                        {item.label}
                      </Link>
                    ) : (
                      <span className="d-flex align-items-center">
                        {item.icon && <item.icon className="me-1" />}
                        {item.label}
                      </span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <i className="fa-solid fa-chevron-right ms-2 me-2"></i>
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