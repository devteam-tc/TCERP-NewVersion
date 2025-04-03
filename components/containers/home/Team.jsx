"use client";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import SectionTitle from "../SectionTitle";
import { teams } from '@/data/team';
import Link from 'next/link';
import { gsap } from 'gsap';

const Team = () => {
  const [activeTeam, setActiveTeam] = useState(
    teams.find((team) => team.isActive) ? teams.find((team) => team.isActive).name : teams[0].name
  );

  const teamItemsRef = useRef([]);
  const hoverImagesRef = useRef([]);

  useEffect(() => {
    // Function to move the service image on mouse move
    const ServiceImageMove = (event, item) => {
      const contentBox = item.getBoundingClientRect();
      const dx = (event.clientX - contentBox.x - contentBox.width / 1) / 3;
      const dy = (event.clientY - contentBox.y - contentBox.height / 1) / 10;

      hoverImagesRef.current.forEach((img) => {
        gsap.to(img, {
          x: dx,
          y: dy,
        });
      });
    };

    // Add hover effect only for screens larger than 768px
    if (window.innerWidth > 767) {
      teamItemsRef.current.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
          ServiceImageMove(event, item);
        });

        item.addEventListener("mouseleave", () => {
          hoverImagesRef.current.forEach((img) => {
            gsap.to(img, {
              x: 0,
              y: 0
            });
          });
        });
      });

      // Add active team class on hover
      teamItemsRef.current.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          teamItemsRef.current.forEach((el) => el.classList.remove('active-team'));
          item.classList.add('active-team');
        });
      });
    }
  }, []);

  const handleMouseEnter = (teamName) => {
    setActiveTeam(teamName);
  };

  return (
    <section className="ep-team-section py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <SectionTitle subTitle="Creative Members" title="Technology that Moves You Forward" extraClass="text-center" />
          </div>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="100"
          className="row">
          {teams.map((team) => (
            <div
              key={team.id}
              className={`team-item rounded-20 position-relative ${activeTeam === team.name ? "active-team" : ""}`}
              ref={(el) => (teamItemsRef.current[team.id] = el)}
              onMouseEnter={() => handleMouseEnter(team.name)}
            >
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 align-self-center">
                  <div className="team-name-info">
                    <h4 className="name">{team.name}</h4>
                    <p>{team.description}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 align-self-center">
                  <div className="social-icon-box">
                    <ul className="list-unstyled">
                      {Object.entries(team.socialLinks).map(([key, link]) => (
                        <li key={key}>
                          <Link href={link} className="d-inline-flex justify-content-center align-items-center">
                            <i className={`fab fa-${key}`}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-1 align-self-center">
                  <div className="hover-image position-absolute overflow-hidden rounded-20" ref={(el) => (hoverImagesRef.current[team.id] = el)}>
                    <div className="team-image">
                      <Image
                        src={team.image}
                        alt={team.name}
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="all-members text-center">
          <Link href="/contact" className="theme-btn theme-btn-border position-relative d-inline-flex align-items-center">
            Contact Us
            <span className="arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4443_62)">
                  <path
                    d="M13.4317 12.5381C13.4967 12.4215 13.535 12.2898 13.5367 12.1506L13.5733 7.95396C13.5758 7.60896 13.2992 7.32646 12.9483 7.32312C12.6058 7.32312 12.3258 7.59896 12.3233 7.94229L12.2975 10.8665L7.48917 6.05813C7.245 5.81396 6.84917 5.81396 6.605 6.05813C6.36083 6.30229 6.36083 6.69812 6.605 6.94229L11.4158 11.7531L8.59083 11.7831C8.245 11.7873 7.96833 12.0698 7.9725 12.4148C7.97583 12.7581 8.255 13.0331 8.60417 13.0331C8.60417 13.0331 12.6783 12.989 12.685 12.989C12.9967 12.9856 13.2842 12.8023 13.4325 12.539L13.4317 12.5381Z"
                    fill="white" />
                  <path
                    d="M9.99984 19.2219C9.29484 19.2219 8.59818 19.2094 7.91151 19.1853C4.06734 19.0503 0.949844 15.9328 0.81401 12.0869C0.789844 11.3994 0.777344 10.7036 0.777344 9.99859C0.777344 9.29359 0.789844 8.59776 0.81401 7.91026C0.949844 4.06609 4.06734 0.948594 7.91151 0.813594C9.28651 0.76526 10.7148 0.76526 12.0882 0.813594C15.9323 0.948594 19.0498 4.06609 19.1857 7.91193C19.2098 8.59859 19.2223 9.29526 19.2223 10.0003C19.2223 10.7053 19.2098 11.4011 19.1857 12.0886C19.0498 15.9336 15.9323 19.0511 12.0882 19.1869C11.4015 19.2111 10.7048 19.2236 9.99984 19.2236V19.2219ZM9.99984 2.02609C9.31068 2.02609 8.62818 2.03859 7.95568 2.06276C4.76401 2.17443 2.17568 4.76276 2.06318 7.95443C2.03984 8.62776 2.02734 9.30859 2.02734 9.99859C2.02734 10.6886 2.03984 11.3703 2.06318 12.0428C2.17568 15.2344 4.76401 17.8228 7.95568 17.9343C8.62818 17.9584 9.31068 17.9709 9.99984 17.9709C10.688 17.9709 11.3705 17.9584 12.043 17.9343C15.2347 17.8228 17.823 15.2344 17.9355 12.0428C17.9597 11.3703 17.9722 10.6886 17.9722 9.99859C17.9722 9.30859 17.9597 8.62776 17.9355 7.95443C17.823 4.76276 15.2347 2.17443 12.043 2.06276C11.3705 2.03859 10.688 2.02609 9.99984 2.02609Z"
                    fill="white" />
                </g>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
