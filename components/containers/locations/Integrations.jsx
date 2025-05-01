'use client';

const locations = [
  { name: 'Ahmedabad', x: 35, y: 45 },
  { name: 'Kerala', x: 45, y: 75 },
  { name: 'Hyderabad', x: 50, y: 50 },
  { name: 'Chennai', x: 53, y: 65 },
  { name: 'Indore', x: 40, y: 50 },
];

export default function Integration() {
  return (
    <section className="integration-section">
      <div className="map-container">
        <div className="india-map">
          <img src="/images/india-map2.jpg" alt="India Map" className="map-image" />
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
          We have established our presence in key cities across India, bringing our services closer to you.
          From Ahmedabad to Chennai, our network spans the length and breadth of the country.
        </p>
        <a href="#" className="button">Learn More</a>
      </div>
    </section>
  );
}
