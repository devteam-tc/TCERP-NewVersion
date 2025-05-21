'use client';

import Image from 'next/image';
import Link from 'next/link';

const Banner = () => (
  <section className="banner-hero">
    <div className="banner-bg-clouds"></div>
    <div className="banner-center-content">
      <h1 className="banner-title">Cloud - Based<br />ERP Software Solutions</h1>
      <p className="banner-subtitle">
        Empower your business with Tech Cloud ERP a scalable cloud-based ERP software that streamlines operations, boosts productivity and fuels growth.
      </p>
      <p className='mb-5' style={{  color: '#ef5226' , fontWeight: '600' , textTransform: 'uppercase'}} >We don't just sell software, we tailor it to your business.</p>
      <Link href="/demo" className="banner-demo-btn">Book a Demo</Link>
      <div className="rocket-visual">
        {/* Chart Cards */}
        <div className="chart-card chart-top-left">
          <Image src="/images/banner/Chart1.webp" alt="Chart 1" width={200} height={100} />
        </div>
        <div className="chart-card chart-top-right">
          <Image src="/images/banner/Chart2.webp" alt="Chart 2" width={200} height={100} />
        </div>
        <div className="chart-card chart-bottom-left">
          <Image src="/images/banner/Chart3.webp" alt="Chart 3" width={200} height={100} />
        </div>
        <div className="chart-card chart-bottom-right">
          <Image src="/images/banner/Chart4.webp" alt="Chart 4" width={200} height={100} />
        </div>
        {/* Rocket */}
        <div className="rocket-center">
          <Image 
            src="/images/banner/icons/rocketfire.webp" 
            alt="Rocket" 
            width={380} 
            height={250}
            priority={true}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoQABAABUB8JZwAAp1K3W4AA/v6yAAAA"
            sizes="(max-width: 768px) 100vw, 380px"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        {/* Floating Icons */}
        {[1,2,3,4,5,6].map(num => {
          let posClass = `icon-pos-${num}`;
          if (num === 2) posClass = 'icon-pos-5';
          else if (num === 5) posClass = 'icon-pos-2';
          return (
            <div className={`rocket-icon ${posClass}`} key={num}>
              <Image src={`/images/banner/icons/icon${num}.png`} alt={`Icon ${num}`} width={70} height={70} />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Banner;
