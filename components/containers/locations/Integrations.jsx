'use client';

const locations = [
   
  { name: 'Hyderabad', x: 50, y: 50 },
  { name: 'Chennai', x: 53, y: 65 },
  { name: 'Indore', x: 40, y: 50 },
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
        Tech Cloud ERP serves key business hubs like Ahmedabad, Chennai, Hyderabad, Coimbatore and Indore through our dedicated ERP partner branches. Recognized as the best ERP software in India, we deliver reliable cloud-based ERP software in India tailored to the needs of manufacturers, traders and service providers. Whether you're looking for ERP solutions near you or advanced manufacturing ERP software in India, Tech Cloud ERP is your trusted partner in business transformation.
        </p>
        <a href="#" className="button">Learn More</a>
      </div>
    </section>
  );
}
