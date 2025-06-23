'use client';

const locations = [
   
  { name: 'Hyderabad', x: 50, y: 50 },
  { name: 'Chennai', x: 53, y: 65 },
  { name: 'Coimbatore', x: 45, y: 70 },
];

export default function Integration() {
  return (
    <section className="integration-section">
      <div className="map-container">
        <div className="india-map">
          <img src="/images/india-map2.png" alt="India Map" className="map-image" />
          {locations.map((location, index) => (
            <div
              key={index}
              className="location-marker"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
              }}
            >
              <div className="marker-dot"></div>
              <div className="marker-label">{location.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-area">
        <h2>Our Presence Across India</h2>
        <p>
        Tech Cloud ERP supports growing businesses across major cities like Hyderabad, Chennai and Coimbatore through our dedicated partner network. We provide reliable, cloud-based ERP solutions designed for manufacturers, traders and service providers. Whether you're looking to streamline operations or boost productivity, Tech Cloud ERP is here to help drive your business forward.
        </p>
        <a href="#" className="button">Learn More</a>
      </div>
    </section>
  );
}
