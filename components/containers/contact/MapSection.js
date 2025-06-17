"use client";
import React, { useState } from "react";
import locations from "../../../data/contact/locations.json";
import "./MapSection.scss";
import Image from "next/image";

const MapSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMapUrl, setActiveMapUrl] = useState("");

  const handleOpenModal = (mapUrl) => {
    setActiveMapUrl(mapUrl); // Use the embed URL directly
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveMapUrl("");
  };

  return (
    <div className="mapsection">
      <h2 className="mapsection__heading">Our Branches</h2>
      <div className="mapsection__container">
        {locations.map((loc, idx) => (
          <div className="mapsection__card" key={idx}>
            <div
              className="mapsection__circle-link"
              onClick={() => handleOpenModal(loc.mapUrl)}
              style={{ cursor: "pointer" }}
              tabIndex={0}
              role="button"
              aria-label={`View map for ${loc.city}`}
              onKeyDown={e => { if (e.key === "Enter") handleOpenModal(loc.mapUrl); }}
            >
              <div className="mapsection__circle">
                <Image
                  src={loc.imageUrl}
                  alt={`${loc.city} location`}
                  className="mapsection__circle-image"
                  width={200}
                  height={200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%"
                  }}
                />
              </div>
            </div>
            <div className="mapsection__city">{loc.city}</div>
            <div className="mapsection__address">{loc.address}</div>
          </div>
        ))}
      </div>

      {modalOpen && activeMapUrl && (
        <div className="mapsection__modal-overlay" onClick={handleCloseModal}>
          <div className="mapsection__modal" onClick={e => e.stopPropagation()}>
            <button className="mapsection__modal-close" onClick={handleCloseModal}>&times;</button>
            <iframe
              src={activeMapUrl}
              title="Google Map"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MapSection;