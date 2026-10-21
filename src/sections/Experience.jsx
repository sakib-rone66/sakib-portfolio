import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Globe2,
  Layers3,
  Server,
  Smartphone,
  Braces,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  const technologies = [
    {
      name: "REACT",
      icon: Code2,
      className: "tech-react",
    },
    {
      name: "JAVASCRIPT",
      icon: Braces,
      className: "tech-javascript",
    },
    {
      name: "NODE.JS",
      icon: Server,
      className: "tech-node",
    },
    {
      name: "EXPRESS.JS",
      icon: Layers3,
      className: "tech-express",
    },
    {
      name: "MONGODB",
      icon: Database,
      className: "tech-mongodb",
    },
    {
      name: "REACT NATIVE",
      icon: Smartphone,
      className: "tech-react-native",
    },
    {
      name: "EXPO",
      icon: Globe2,
      className: "tech-expo",
    },
    {
      name: "REST API",
      icon: Send,
      className: "tech-rest",
    },
  ];

  return (
    <section className="experience-section">
      <div className="container experience-container">
        {/* =========================================
            SECTION LABEL — SCROLL TARGET
        ========================================= */}
        <div id="experience" className="section-anchor">
          <motion.div
            className="experience-top-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="experience-line experience-line-left" />

            <div className="experience-label">EXPERIENCE</div>

            <div className="experience-line experience-line-right" />
          </motion.div>
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <div className="experience-content">
          {/* =========================================
              HEADER
          ========================================= */}
          <motion.div
            className="experience-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
          >
            <div className="experience-heading">
              <h2>
                Building software
                <span>in the real world.</span>
              </h2>
            </div>
          </motion.div>

          {/* =========================================
              CINEMATIC EXPERIENCE VISUAL
          ========================================= */}
          <motion.div
            className="experience-visual"
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.985,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              delay: 0.06,
              ease: "easeOut",
            }}
          >
            <div className="experience-visual-glow" />

            <div className="experience-visual-frame">
              <img
                src={`${import.meta.env.BASE_URL}images/experience-igloo.jpg`}
                alt="Igloo internship experience"
              />

              <div className="experience-visual-overlay" />

              <div className="experience-visual-shine" />

              <div className="experience-visual-index">
                PROFESSIONAL EXPERIENCE
              </div>

              <div className="experience-visual-year">2026</div>
            </div>
          </motion.div>

          {/* =========================================
              EXPERIENCE ENTRY
          ========================================= */}
          <motion.article
            className="experience-item"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            {/* =========================================
                ROLE / COMPANY
            ========================================= */}
            <div className="experience-item-top">
              <div className="experience-role">
                <h3>Software Development Intern</h3>

                <div className="experience-company-row">
                  <span className="experience-company-dot" />

                  <span className="experience-company">
                    Abdul Monem Ltd. · Igloo
                  </span>
                </div>

                <span className="experience-department">
                  MIS · Software Development
                </span>
              </div>

              <div className="experience-meta">
                <span className="experience-status">
                  <i />
                  COMPLETED
                </span>

                <span className="experience-date">JUN 2026 — SEP 2026</span>
              </div>
            </div>

            {/* =========================================
                EXPERIENCE BODY
            ========================================= */}
            <div className="experience-body">
              {/* CONTRIBUTION */}
              <div className="experience-summary">
                <span className="experience-small-label">
                  <span className="experience-small-label-line" />
                  CONTRIBUTION
                  <span className="experience-small-label-line" />
                </span>

                <p>
                  Contributed to the
                  <strong className="experience-project-name">
                    {" "}
                    IGLOO Asset Management System
                  </strong>
                  , a full-stack web and mobile platform designed to manage
                  assets, outlets, users and verification workflows.
                </p>

                <a href="#projects" className="experience-link">
                  View the project
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {/* ENGINEERING DETAILS */}
              <div className="experience-details">
                <div className="experience-detail">
                  <span className="experience-detail-bullet">
                    <i />
                  </span>

                  <p>
                    Developed full-stack features across React, Node.js,
                    Express.js and MongoDB.
                  </p>
                </div>

                <div className="experience-detail">
                  <span className="experience-detail-bullet">
                    <i />
                  </span>

                  <p>
                    Built REST API workflows for assets, outlets, users,
                    verification and approval processes.
                  </p>
                </div>

                <div className="experience-detail">
                  <span className="experience-detail-bullet">
                    <i />
                  </span>

                  <p>
                    Extended the platform into a React Native mobile application
                    for field-oriented operations.
                  </p>
                </div>

                <div className="experience-detail">
                  <span className="experience-detail-bullet">
                    <i />
                  </span>

                  <p>
                    Worked with authentication, permissions, data validation and
                    production deployment workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* =========================================
                TECHNOLOGY STACK
            ========================================= */}
            <div className="experience-stack">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className={`experience-tech ${technology.className}`}
                  >
                    <span className="experience-tech-icon">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>

                    <span className="experience-tech-name">
                      {technology.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.article>
        </div>

        {/* =========================================
            EXPERIENCE → PROJECTS
        ========================================= */}
        <motion.a
          href="#projects"
          className="experience-scroll experience-next-scroll"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          <span>SCROLL TO PROJECTS</span>

          <ArrowDown size={17} />
        </motion.a>
      </div>
    </section>
  );
}

export default Experience;
