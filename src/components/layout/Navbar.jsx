import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navbarRef = useRef(null)

  useEffect(() => {
    const updateNavbar = () => {
      setScrolled(window.scrollY > 40)

      const activationLine = window.innerHeight * 0.35
      const sections = navLinks
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean)

      const currentSection = sections.reduce((current, section) => {
        return section.getBoundingClientRect().top <= activationLine
          ? section.id
          : current
      }, '')

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        setActiveSection(navLinks[navLinks.length - 1].href.slice(1))
      } else {
        setActiveSection(currentSection)
      }
    }

    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    window.addEventListener('resize', updateNavbar)

    return () => {
      window.removeEventListener('scroll', updateNavbar)
      window.removeEventListener('resize', updateNavbar)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeMenuOnOutsideClick = (event) => {
      if (
        window.matchMedia('(max-width: 760px)').matches &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeMenuOnOutsideClick)

    return () => {
      document.removeEventListener('pointerdown', closeMenuOnOutsideClick)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header
      ref={navbarRef}
      className={`navbar-shell ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <nav className="navbar container">

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span>SAKIB-RONE</span>
          <i>.</i>
        </a>

        <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={activeSection === link.href.slice(1) ? 'navbar-link-active' : ''}
              aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">

          <a
            href={`${import.meta.env.BASE_URL}documents/CV.pdf`}
            className="navbar-cv"
            download="Md-Sakib-Al-Hasan-CV.pdf"
          >
            <span>Download CV</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="navbar-menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>

      </nav>
    </header>
  )
}

export default Navbar