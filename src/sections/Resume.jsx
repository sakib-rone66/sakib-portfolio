import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  FileText,
} from 'lucide-react'
import { motion } from 'framer-motion'
import './Resume.css'

function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-ambient resume-ambient-left" />
      <div className="resume-ambient resume-ambient-right" />

      <div className="container resume-container">

        {/* =========================================
            SECTION LABEL
        ========================================== */}

        <div id="resume" className="section-anchor">
          <motion.div
            className="resume-top-label"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="resume-top-line resume-top-line-left" />

            <div className="resume-label">
              RESUME
            </div>

            <div className="resume-top-line resume-top-line-right" />
          </motion.div>
        </div>


        {/* =========================================
            MAIN RESUME CONTENT
        ========================================== */}

        <div className="resume-layout">

          {/* =========================================
              PORTRAIT
          ========================================== */}

          <motion.div
            className="resume-portrait"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="resume-portrait-glow" />

            <div className="resume-portrait-frame">

              <img
                src="/images/sakib-portrait.jpg"
                alt="Md. Sakib Al-Hasan"
              />

              <div className="resume-portrait-overlay" />

              <div className="resume-portrait-shine" />

            </div>
          </motion.div>


          {/* =========================================
              CAREER PROFILE
          ========================================== */}

          <motion.div
            className="resume-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              delay: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="resume-eyebrow">
              CAREER PROFILE
            </span>

            <h2>
              A closer look at
              <span>my experience.</span>
            </h2>

            <p>
              Explore my professional background, technical skills,
              education and selected project experience through my
              professional CV.
            </p>

            <div className="resume-profile-meta">

              <div>
                <span>FOCUS</span>
                <strong>Software Development</strong>
              </div>

              <div>
                <span>EXPERIENCE</span>
                <strong>Web · Backend · Mobile</strong>
              </div>

            </div>
          </motion.div>


          {/* =========================================
              CV CARD
          ========================================== */}

          <motion.div
            className="resume-card"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.24,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div className="resume-card-top">

              <div className="resume-card-icon">
                <FileText
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span className="resume-card-status">
                <i />
                AVAILABLE
              </span>

            </div>


            <div className="resume-card-content">

              <span>
                CURRICULUM VITAE
              </span>

              <h3>
                Md. Sakib Al-Hasan
              </h3>

              <p>
                Software Developer · Full-Stack Developer ·
                Backend Developer
              </p>

            </div>


            <div className="resume-document-info">

              <div>
                <span>FORMAT</span>
                <strong>PDF</strong>
              </div>

              <div>
                <span>PROFILE</span>
                <strong>Professional CV</strong>
              </div>

            </div>


            <div className="resume-card-actions">

              <a
                href="/documents/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-view-button"
                aria-label="Open CV in a new browser tab"
              >
                <span className="resume-action-label">View CV</span>

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                />
              </a>

              <a
                href="/documents/CV.pdf"
                download="Md-Sakib-Al-Hasan-CV.pdf"
                className="resume-download-button"
              >
                <span className="resume-action-label">Download</span>

                <ArrowDownToLine
                  size={16}
                  aria-hidden="true"
                />
              </a>

            </div>

          </motion.div>

        </div>

        <motion.a
          href="#contact"
          className="projects-scroll"
          aria-label="Scroll to contact"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          <span>SCROLL TO CONTACT</span>

          <span className="projects-scroll-arrow">
            <ArrowDown size={17} aria-hidden="true" />
          </span>
        </motion.a>

      </div>
    </section>
  )
}

export default Resume