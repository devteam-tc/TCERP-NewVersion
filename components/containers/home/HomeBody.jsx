 'use client';

import Image from 'next/image';
import Link from 'next/link';
import Features from './Features';
const HomeBody = () => (
 
 <div className="banner-center-content">
      <h1 className="banner-title">Powerful Cloud ERP for Manufacturing,<br />Trading & Project-Driven Businesses</h1>
      <p className="banner-subtitle">Simplify operations, gain real-time visibility, and scale confidently with Tech Cloud ERP <br />— a powerful, industry ready cloud ERP designed for real business workflows.</p>
     
      <ul className="banner-subtitle-list"  >
        <li>End-to-end business control </li>
        <li>Industry specific modules</li>
        <li>Secure cloud hosting</li>
        <li>Scalable & customizable</li>
      </ul>
      <Link href="/demo" className="gradient-btn">Get an Industry Specific Demo</Link>
      
        {/* <div className="rocket-visual">
            
            <div className="chart-card chart-top-left">
              <Image src="/images/banner/Chart1.webp" alt="2024 revenue vs expense chart" width={200} height={100} />
            </div>
            <div className="chart-card chart-top-right">
              <Image src="/images/banner/Chart2.webp" alt="2024 rejection reasons trend chart" width={200} height={100} />
            </div>
            <div className="chart-card chart-bottom-left">
              <Image src="/images/banner/Chart3.webp" alt="Employee distribution chart 2024" width={200} height={100} />
            </div>
            <div className="chart-card chart-bottom-right">
              <Image src="/images/banner/Chart4.webp" alt="sales revenue overview chart" width={200} height={100} />
            </div>
            
            <div className="rocket-center">
              <Image 
                className="rocket-desktop"
                src="/images/banner/icons/rocket.webp" 
                alt="Cloud Connected to Servers" 
                width={150} 
                height={100}
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoQABAABUB8JZwAAp1K3W4AA/v6yAAAA"
                sizes="(max-width: 768px) 100vw, 380px"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
              <Image 
                className="rocket-mobile"
                src="/images/banner/icons/mobile-version-01.png" 
                alt="Rocket Mobile" 
                width={600} 
                height={600}
                priority={true}
                sizes="(max-width: 767px) 96vw, (max-width: 992px) 98vw, 560px"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            
            {[1,2,3,4,5,6].map(num => {
              let posClass = `icon-pos-${num}`;
              if (num === 2) posClass = 'icon-pos-5';
              else if (num === 5) posClass = 'icon-pos-2';
              return (
                <div className={`rocket-icon ${posClass}`} key={num}>
                
                </div>
              );
            })}
          </div>   */}
        <div className="banner-cards-container">
            <div className="card-item" 
              onClick={(e) => e.currentTarget.classList.add('clicked')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('clicked')}>
              <Image src="/images/banner/new/pie chart 2.webp" alt="Chart 1" width={200} height={200} />
            </div>
            <div className="card-item" 
              onClick={(e) => e.currentTarget.classList.add('clicked')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('clicked')}>
              <Image src="/images/banner/new/line chart 1.webp" alt="Chart 2" width={200} height={200} />
            </div>
            <div className="card-item" 
              onClick={(e) => e.currentTarget.classList.add('clicked')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('clicked')}>
              <Image src="/images/banner/new/bar chart 1.webp" alt="Chart 3" width={200} height={200} />
            </div>
            <div className="card-item"  
              onClick={(e) => e.currentTarget.classList.add('clicked')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('clicked')}>
              <Image src="/images/banner/new/leaves 1.webp" alt="Chart 4" width={200} height={200} />
            </div>
            <div className="card-item" 
              onClick={(e) => e.currentTarget.classList.add('clicked')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('clicked')}>
              <Image src="/images/banner/new/announcements 1.webp" alt="Chart 4" width={200} height={200} />
            </div>
        </div>
    </div>
    );

export default HomeBody;