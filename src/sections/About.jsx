import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './About.css'

function About() {
  return (
    <section className="about-section">

      {/* =========================================
          ABOUT — PART 1
      ========================================= */}
      <div className="about-part about-part-one">
        <div className="container about-part-container">

          {/* ABOUT LABEL — SCROLL TARGET */}
          <div id="about" className="section-anchor">
            <motion.div
              className="about-top"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="about-line about-line-left" />

              <div className="about-label">
                ABOUT
              </div>

              <div className="about-line about-line-right" />
            </motion.div>
          </div>


          {/* ABOUT CONTENT */}
          <div className="about-main">

            {/* PORTRAIT */}
            <motion.div
              className="about-portrait"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <div className="about-portrait-frame">

                <div className="about-portrait-glow" />

                <img
                  src="/images/sakib-portrait-2.jpg"
                  alt="Md. Sakib Al-Hasan"
                />

                <div className="about-portrait-overlay" />

                <div className="about-portrait-tag">
                  SOFTWARE DEVELOPER
                </div>

              </div>
            </motion.div>


            {/* ABOUT TEXT */}
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: 'easeOut',
              }}
            >

              <div className="about-heading">
                <h2>
                  I build software
                  <span>with purpose.</span>
                </h2>
              </div>

              <div className="about-copy">

                <p className="about-lead">
                  I'm <strong>Md. Sakib Al-Hasan</strong>, a Software
                  Developer focused on building modern web, backend
                  and mobile applications.
                </p>

                <p>
                  I enjoy turning real-world requirements into practical
                  software through clean architecture, thoughtful
                  interfaces and reliable backend systems.
                </p>

                <p>
                  My approach is simple: understand the problem, build
                  the right solution and keep the experience clear for
                  the people who use it.
                </p>

                <a
                  href="#experience"
                  className="about-link"
                >
                  Explore my experience
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </motion.div>

          </div>


          {/* PART 1 → PROFILE */}
          <motion.a
            href="#about-details"
            className="about-scroll about-more-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span>MORE ABOUT ME</span>
            <span className="projects-scroll-arrow">
              <ArrowDown size={17} aria-hidden="true" />
            </span>
          </motion.a>

        </div>
      </div>


      {/* =========================================
          PROFILE — PART 2
      ========================================= */}
      <div
        className="about-part about-part-two"
      >
        <div className="container about-part-container">

          {/* PROFILE LABEL */}
          <div id="about-details" className="section-anchor">
            <motion.div
              className="about-top"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="about-line about-line-left" />

              <div className="about-label">
                PROFILE
              </div>

              <div className="about-line about-line-right" />
            </motion.div>
          </div>


          {/* PROFILE CONTENT */}
          <div className="about-part-two-content">

            <motion.div
              className="about-details"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >

              <div className="about-detail">
                <span>FOCUS</span>
                <strong>Full-Stack Development</strong>
              </div>

              <div className="about-detail">
                <span>ENGINEERING</span>
                <strong>Web · Backend · Mobile</strong>
              </div>

              <div className="about-detail">
                <span>EDUCATION</span>
                <strong>
                  Daffodil International University · [Graduated: 2025]
                </strong>
              </div>

              <div className="about-detail">
                <span>BASED IN</span>
                <strong>Dhaka, Bangladesh</strong>
              </div>

            </motion.div>


            {/* =====================================
                PERSONAL STATEMENT
            ===================================== */}
            <motion.div
              className="about-statement"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >

              <p>
                Building useful software is not only about writing code.
                It's about understanding the problem, designing the
                right solution and creating something people can
                actually rely on.
              </p>

              <span className="about-statement-author">
                <span className="about-author-mark" />
                <span className="about-author-name">
                  Sakib Al-Hasan
                </span>
              </span>

            </motion.div>

          </div>


          {/* PROFILE → EXPERIENCE */}
          <motion.a
            href="#experience"
            className="about-experience-scroll"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
          >
            <span>SCROLL TO EXPERIENCE</span>

            <span className="about-experience-scroll-arrow">
              <ArrowDown size={17} aria-hidden="true" />
            </span>
          </motion.a>

        </div>
      </div>

    </section>
  )
}

export default About