import Image from 'next/image';

export default function IndustryBanner({ banner, title }) {
  return (
    <div className="project-banner-image position-relative mb-4 mb-lg-0 mt-4">
      <div className="zoom-out overflow-hidden" style={{ width: '100%', aspectRatio: '2/1' }}>
        <Image
          priority
          src={banner}
          width={1200}
          height={600}
          alt={`Industry banner showcasing ${title}`}
          className="img-fluid custom-banner-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius :'5px !important',
            transform :'none !important'
          }}
        />
      </div>
    </div>
  );
}
