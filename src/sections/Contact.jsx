import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Contact.css'

const revealVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
}

function Contact() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="contact-section">
      <div className="container">

        <div id="contact" className="section-anchor">
          <motion.div
            className="contact-top-label"
            variants={revealVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="contact-top-line contact-top-line-left" />

            <div className="contact-label">
              CONTACT
            </div>

            <div className="contact-top-line contact-top-line-right" />
          </motion.div>
        </div>

        <motion.div
          className="contact-layout"
          variants={staggerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.18 }}
        >

          <motion.div className="contact-heading" variants={revealVariants}>

            <span className="contact-eyebrow">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Have a project
              <span>in mind?</span>
            </h2>

            <p>
              I'm open to software development opportunities,
              full-stack projects and meaningful technical
              collaborations.
            </p>

          </motion.div>

          <div className="contact-card-group">
            <motion.div
              className="contact-content"
              variants={staggerVariants}
            >

              <motion.a
                href="mailto:info.sakib.bluesec@gmail.com"
                className="contact-info-card contact-email"
                variants={revealVariants}
              >
                <div className="contact-icon">
                  <Mail size={19} />
                </div>

                <div className="contact-info-text">
                  <span>EMAIL</span>
                  <strong>info.sakib.bluesec@gmail.com</strong>
                </div>

                <div className="contact-action">
                  <ArrowUpRight size={17} />
                </div>
              </motion.a>

            <motion.div
              className="contact-info-card contact-location"
              variants={revealVariants}
            >
              <div className="contact-icon">
                <MapPin size={19} />
              </div>

              <div className="contact-info-text">
                <span>LOCATION</span>
                <strong>Dhaka, Bangladesh</strong>
              </div>
            </motion.div>

            <motion.div className="contact-socials" variants={staggerVariants}>

              <motion.a
                href="https://github.com/sakib-rone66"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
                variants={revealVariants}
              >
                <span className="contact-social-brand contact-social-brand-github" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .297Z" />
                  </svg>
                </span>
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/r-talukder66/"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
                variants={revealVariants}
              >
                <span className="contact-social-brand" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5.2 8.8v12M5.2 4.2v.1M10.7 20.8v-12h4v1.8a4.1 4.1 0 0 1 3.7-2.1c3.1 0 4.4 2 4.4 5.1v7.2h-4v-6.4c0-1.7-.4-2.9-2.1-2.9-1.9 0-2.1 1.5-2.1 3.1v6.2h-3.9Z" />
                  </svg>
                </span>
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </motion.a>

            </motion.div>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Contact