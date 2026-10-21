import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-container container">

        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-status-dot" />
            AVAILABLE FOR SOFTWARE DEVELOPMENT ROLES
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            Building digital
            <span className="hero-title-gradient">
              experiences
            </span>
            that matter.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm <strong>Md. Sakib Al-Hasan</strong>, a Software Developer
            focused on building modern web, backend and mobile
            applications with clean architecture and thoughtful
            user experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#projects"
              className="hero-primary-button"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#contact"
              className="hero-secondary-button"
            >
              Let's connect
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.52, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Software Developer</span>
            <i />
            <span>Full-Stack Developer</span>
            <i />
            <span>Backend Developer</span>
          </motion.div>

        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-glow" />

          <div className="hero-code-card">

            <div className="hero-code-header">
              <div className="hero-code-dots">
                <span />
                <span />
                <span />
              </div>

              <span>developer.js</span>
            </div>

            <div className="hero-code-body">
              <div>
                <span className="code-number">01</span>
                <span className="code-purple">const</span>{' '}
                <span className="code-blue">developer</span>{' '}
                = {'{'}
              </div>

              <div className="code-indent">
                <span className="code-key">name:</span>{' '}
                <span className="code-green">
                  'Sakib Al-Hasan'
                </span>,
              </div>

              <div className="code-indent">
                <span className="code-key">role:</span>{' '}
                <span className="code-green">
                  'Software Developer'
                </span>,
              </div>

              <div className="code-indent">
                <span className="code-key">focus:</span>{' '}
                <span className="code-green">
                  'Full-Stack Development'
                </span>,
              </div>

              <div>
                <span className="code-number">06</span>
                {'}'}
              </div>

              <div className="code-cursor">
                <span />
              </div>
            </div>

          </div>

          <div className="hero-floating-card hero-floating-card-one">
            <span className="floating-card-label">
              CURRENT FOCUS
            </span>
            <strong>Full-Stack Engineering</strong>
          </div>

          <div className="hero-floating-card hero-floating-card-two">
            <span className="floating-card-icon">
              {'</>'}
            </span>
            <div>
              <span className="floating-card-label">
                BUILD
              </span>
              <strong>Web • API • Mobile</strong>
            </div>
          </div>

        </motion.div>

      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </motion.a>

    </section>
  )
}

export default Hero