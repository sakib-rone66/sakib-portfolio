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
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)
    let activeSection = ''
    let isScrolled = false
    let sectionPositions = []
    let documentHeight = document.documentElement.scrollHeight

    const setCurrentSection = (sectionId) => {
      if (activeSection === sectionId) return

      activeSection = sectionId
      setActiveSection(sectionId)
    }

    const updateSectionPositions = () => {
      sectionPositions = sections.map((section) => ({
        id: section.id,
        top: window.scrollY + section.getBoundingClientRect().top,
      }))
      documentHeight = document.documentElement.scrollHeight
    }

    const updateNavbar = () => {
      const nextScrolled = window.scrollY > 40
      if (isScrolled !== nextScrolled) {
        isScrolled = nextScrolled
        setScrolled(nextScrolled)
      }

      const activationLine = window.scrollY + window.innerHeight * 0.35
      const currentSection = sectionPositions.reduce((current, section) => {
        return section.top <= activationLine ? section.id : current
      }, '')
      setCurrentSection(currentSection)

      if (
        window.scrollY + window.innerHeight >=
        documentHeight - 2
      ) {
        setCurrentSection(navLinks[navLinks.length - 1].href.slice(1))
      }
    }

    const updateLayout = () => {
      updateSectionPositions()
      updateNavbar()
    }

    updateSectionPositions()
    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    window.addEventListener('resize', updateLayout)
    window.addEventListener('load', updateLayout, { once: true })
    document.fonts.ready.then(updateLayout)

    return () => {
      window.removeEventListener('scroll', updateNavbar)
      window.removeEventListener('resize', updateLayout)
      window.removeEventListener('load', updateLayout)
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