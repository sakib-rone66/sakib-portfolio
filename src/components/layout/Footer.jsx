import { ArrowUpRight, Code2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Footer.css'

const footerRevealVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

const footerItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function Footer() {
  const currentYear = new Date().getFullYear()
  const shouldReduceMotion = useReducedMotion()

  return (
    <footer className="footer">

      <div className="container">

        <motion.div
          className="footer-bottom"
          variants={footerRevealVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.75 }}
        >

          <motion.a
            href="#home"
            className="footer-logo"
            variants={footerItemVariants}
          >
            <span className="footer-logo-mark" aria-hidden="true">
              <Code2 size={15} strokeWidth={2} />
            </span>
            <span className="footer-logo-name">
              SAKIB-RONE<span>.</span>
            </span>
          </motion.a>

          <motion.span
            className="footer-copyright"
            variants={footerItemVariants}
          >
            © {currentYear} Md. Sakib Al-Hasan
          </motion.span>

          <motion.div className="footer-links" variants={footerRevealVariants}>

            <motion.a
              href="https://github.com/sakib-rone66"
              target="_blank"
              rel="noreferrer"
              variants={footerItemVariants}
            >
              GitHub
              <ArrowUpRight size={12} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/r-talukder66/"
              target="_blank"
              rel="noreferrer"
              variants={footerItemVariants}
            >
              LinkedIn
              <ArrowUpRight size={12} />
            </motion.a>

          </motion.div>

        </motion.div>

      </div>

    </footer>
  )
}

export default Footer