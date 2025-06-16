"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, Sparkles, Award, Users } from "lucide-react"
import "./_ceo_section.scss"

const ceoData = {
  name: "Mr. Raja Shanmugam",
  role: "Founder & CEO",
  bio: "Mr. Raj, a Mechanical Engineer and certified SAP Production Planning Consultant, brings over 30 years of expertise across sectors like Design, Chemical Processing, Manufacturing, FMCG and IT. Renowned for his dynamic personality and sharp problem-solving skills, he has guided countless professionals and businesses to success. As the Founder and CEO of Tech Cloud ERP, Mr. Raj drives strategic planning, operations and growth, leading the company with vision, dedication and unwavering commitment to excellence.",
  stats: [
    { label: "Years Experience", value: "15+", icon: Award },
    { label: "Companies Built", value: "3", icon: Sparkles },
    { label: "Team Members", value: "200+", icon: Users },
  ],
  social: {
    linkedin: "#",
    twitter: "#",
    email: "alexandra@company.com",
  },
}

export default function CeoComponent() {
  return (
    <section className="ceo-section">
      <div className="ceo-section__container">
        {/* Header */}
        <motion.div
          className="ceo-section__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="ceo-section__badge"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-4 h-4" />
            Leadership Excellence
          </motion.div>
          <motion.h1
            className="ceo-section__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Meet Our Visionary
          </motion.h1>
          <motion.p
            className="ceo-section__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The innovative mind driving our mission to reshape the future
          </motion.p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="ceo-section__card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="ceo-section__content">
            {/* Content Section */}
            <div className="ceo-section__info">
              {/* Name and Role */}
              <motion.div
                className="ceo-section__name-section"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="ceo-section__name">{ceoData.name}</h2>
                <p className="ceo-section__role">{ceoData.role}</p>
              </motion.div>

              {/* Bio */}
              <motion.p
                className="ceo-section__bio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {ceoData.bio}
              </motion.p>

              {/* Stats */}
              {/* <motion.div
                className="ceo-section__stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {ceoData.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="ceo-section__stat"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="ceo-section__stat-icon">
                      <stat.icon />
                    </div>
                    <div className="ceo-section__stat-content">
                      <div className="ceo-section__stat-value">{stat.value}</div>
                      <div className="ceo-section__stat-label">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div> */}

              {/* Social Links */}
              <motion.div
                className="ceo-section__social-links"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {[
                  { icon: Linkedin, href: ceoData.social.linkedin, type: "linkedin" },
                ].map(({ icon: Icon, href, type }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    className="ceo-section__social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.3 + i * 0.1 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
