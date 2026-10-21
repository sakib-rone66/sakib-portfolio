import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './About.css'

const aboutPanelVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

const aboutRevealVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function About() {
  return (
    <section className="about-section">

      {/* =========================================
          ABOUT — PART 1
      ========================================= */}
      <motion.div
        className="about-part about-part-one"
        variants={aboutPanelVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <div className="container about-part-container">

          {/* ABOUT LABEL — SCROLL TARGET */}
          <div id="about" className="section-anchor">
            <motion.div
              className="about-top"
              variants={aboutRevealVariants}
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
              variants={aboutRevealVariants}
            >
              <div className="about-portrait-frame">

                <div className="about-portrait-glow" />

                <img
                  src={`${import.meta.env.BASE_URL}images/sakib-portrait-04.jpg`}
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
              variants={aboutRevealVariants}
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
            variants={aboutRevealVariants}
          >
            <span>MORE ABOUT ME</span>
            <span className="projects-scroll-arrow">
              <ArrowDown size={17} aria-hidden="true" />
            </span>
          </motion.a>

        </div>
      </motion.div>


      {/* =========================================
          PROFILE — PART 2
      ========================================= */}
      <motion.div
        className="about-part about-part-two"
        variants={aboutPanelVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <div className="container about-part-container">

          {/* PROFILE LABEL */}
          <div id="about-details" className="section-anchor">
            <motion.div
              className="about-top"
              variants={aboutRevealVariants}
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
              variants={aboutRevealVariants}
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
              variants={aboutRevealVariants}
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
            variants={aboutRevealVariants}
          >
            <span>SCROLL TO EXPERIENCE</span>

            <span className="about-experience-scroll-arrow">
              <ArrowDown size={17} aria-hidden="true" />
            </span>
          </motion.a>

        </div>
      </motion.div>

    </section>
  )
}

export default About