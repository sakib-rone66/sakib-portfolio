import {
  ArrowDown,
  ArrowUpRight,
  Activity,
  Atom,
  Braces,
  Database,
  Layers3,
  Server,
  Smartphone,
  Sparkles,
  TrainFront,
  Wind,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Projects.css'

const revealVariants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

const projectGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

function Projects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="projects-section">
      <div className="container">

        {/* =========================================================
            PART 1 — PROJECTS INTRODUCTION
        ========================================================== */}

        <motion.div
          id="projects"
          className="projects-top-label"
          variants={revealVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="projects-line projects-line-left" />

          <div className="projects-label">
            PROJECTS
          </div>

          <div className="projects-line projects-line-right" />
        </motion.div>

        <motion.div
          className="projects-header"
          variants={revealVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.08 }}
        >
          <h2>
            Selected work
            <span>built for real-world impact.</span>
          </h2>

        </motion.div>


        {/* =========================================================
            PART 2 — FLAGSHIP PROJECT
        ========================================================== */}

        <div className="featured-project-part">

          <motion.article
            className="featured-project"
            variants={revealVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: 0.08 }}
          >

            <div className="featured-project-visual">

              <div className="featured-project-glow" />

              <div className="featured-project-window-wrap">

                <motion.div
                  className="featured-project-part-label"
                  variants={revealVariants}
                  initial={shouldReduceMotion ? false : 'hidden'}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Sparkles aria-hidden="true" />

                  <div>
                    <span>FLAGSHIP PROJECT</span>
                    <strong>WEB + MOBILE</strong>
                  </div>
                </motion.div>

                <div className="featured-project-window">

                  <div className="project-window-header">
                    <div className="project-window-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <span>IGLOO ASSET MANAGEMENT SYSTEM</span>
                  </div>

                  <div className="project-window-image">
                    <img
                      src={`${import.meta.env.BASE_URL}images/igloo-AMS.jpg`}
                      alt="IGLOO Asset Management System"
                    />

                    <div className="project-window-image-overlay" />
                  </div>

                </div>
              </div>

            </div>


            <div className="featured-project-content">

              <span className="featured-project-number">
                FEATURED
              </span>

              <h3>
                IGLOO Asset
                <span>Management System</span>
              </h3>

              <p className="featured-project-description">
                A full-stack web and mobile platform built to centralize
                asset management, outlet operations, organizational users,
                verification requests and approval workflows.
              </p>

              <div className="featured-project-highlights">

                <div>
                  <span>PLATFORM</span>
                  <strong>Web + Android</strong>
                </div>

                <div>
                  <span>BACKEND</span>
                  <strong>Node.js + MongoDB</strong>
                </div>

                <div>
                  <span>MOBILE</span>
                  <strong>React Native + Expo</strong>
                </div>

              </div>

              <div className="project-tags">

                <span>
                  <Atom aria-hidden="true" />
                  REACT
                </span>

                <span>
                  <Server aria-hidden="true" />
                  NODE.JS
                </span>

                <span>
                  <Layers3 aria-hidden="true" />
                  EXPRESS.JS
                </span>

                <span>
                  <Database aria-hidden="true" />
                  MONGODB
                </span>

                <span>
                  <Smartphone aria-hidden="true" />
                  REACT NATIVE
                </span>

                <span>
                  <Braces aria-hidden="true" />
                  REST API
                </span>

              </div>

              <a
                href="https://github.com/sakib-rone66/Igloo-Asset-Management-System"
                target="_blank"
                rel="noreferrer"
                className="featured-project-link"
              >
                View project
                <ArrowUpRight size={16} />
              </a>

            </div>

          </motion.article>


          {/* SCROLL TO MORE PROJECTS */}

          <a
            href="#more-projects"
            className="projects-scroll"
            aria-label="Scroll to more projects"
          >
            <span>SCROLL TO MORE PROJECTS</span>

            <span className="projects-scroll-arrow">
              <ArrowDown size={17} aria-hidden="true" />
            </span>
          </a>

        </div>


        {/* =========================================================
            PART 3 — MORE PROJECTS
        ========================================================== */}

        <div id="more-projects" className="more-projects-section">

          <motion.div
            className="more-projects-heading"
            variants={revealVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >

            <span className="more-projects-label">
              MORE PROJECTS
            </span>

            <div className="more-projects-heading-line" />

          </motion.div>


          <motion.div
            className="projects-grid"
            variants={projectGridVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {/* ENERGY METER */}

            <motion.article className="project-card" variants={revealVariants}>

              <div className="project-card-top">

                <span
                  className="project-card-mark"
                  aria-hidden="true"
                >
                  <Activity aria-hidden="true" />
                </span>

                <a
                  className="project-card-link"
                  href="https://github.com/sakib-rone66/Energy-Meter-Monitoring-System"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Energy Meter Monitoring System on GitHub"
                >
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>

              </div>

              <div className="project-card-icon">
                IoT
              </div>

              <h3>
                IoT-Based Energy
                <span>Meter Monitoring System</span>
              </h3>

              <p>
                An IoT monitoring solution designed to collect,
                process and visualize electrical energy data
                in real time.
              </p>

              <div className="project-card-tags">
                <span>ESP32</span>
                <span>IoT</span>
                <span>Monitoring</span>
              </div>

            </motion.article>


            {/* RAILBONDHU */}

            <motion.article className="project-card" variants={revealVariants}>

              <div className="project-card-top">

                <span
                  className="project-card-mark"
                  aria-hidden="true"
                >
                  <TrainFront aria-hidden="true" />
                </span>

                <a
                  className="project-card-link"
                  href="https://github.com/sakib-rone66/RailBondhu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View RailBondhu on GitHub"
                >
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>

              </div>

              <div className="project-card-icon">
                RAIL
              </div>

              <h3>
                RailBondhu
                <span>Railway Information Platform</span>
              </h3>

              <p>
                A practical railway-focused web platform designed
                to provide useful travel and train information
                through a simple user experience.
              </p>

              <div className="project-card-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
              </div>

            </motion.article>


            {/* AIR QUALITY */}

            <motion.article className="project-card" variants={revealVariants}>

              <div className="project-card-top">

                <span
                  className="project-card-mark"
                  aria-hidden="true"
                >
                  <Wind aria-hidden="true" />
                </span>

                <a
                  className="project-card-link"
                  href="https://github.com/sakib-rone66/Real-Time-Air-Quality-Monitoring-System"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Real-Time Air Quality Monitoring System on GitHub"
                >
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>

              </div>

              <div className="project-card-icon">
                AIR
              </div>

              <h3>
                Real-Time Air Quality
                <span>Monitoring System</span>
              </h3>

              <p>
                An IoT-based environmental monitoring system
                combining sensor data, connected hardware and
                real-time air quality visualization.
              </p>

              <div className="project-card-tags">
                <span>ESP32</span>
                <span>BLYNK</span>
                <span>ML</span>
              </div>

            </motion.article>

          </motion.div>

        </div>

        {/* SCROLL TO SKILLS */}
        <motion.a
          href="#skills"
          className="experience-scroll projects-next-scroll"
          aria-label="Scroll to skills"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          <span>SCROLL TO SKILLS</span>

          <ArrowDown size={17} aria-hidden="true" />
        </motion.a>

      </div>
    </section>
  )
}

export default Projects