import { useEffect } from 'react'
import Background from './components/ui/Background.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Resume from './sections/Resume.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  useEffect(() => {
    if (
      window.matchMedia(
        '(max-width: 850px), (pointer: coarse) and (hover: none)',
      ).matches
    ) {
      return
    }

    let cancelled = false
    let alignmentTimer

    const alignHashTarget = (hash) => {
      if (cancelled || window.location.hash !== hash) return

      const target = document.getElementById(hash.slice(1))
      if (!target) return

      const scrollMargin = Number.parseFloat(
        window.getComputedStyle(target).scrollMarginTop,
      ) || 0
      const top = window.scrollY + target.getBoundingClientRect().top - scrollMargin
      const previousScrollBehavior = document.documentElement.style.scrollBehavior

      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, top)
      window.requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior
      })
    }

    const scheduleAlignment = (hash, delay = 1200) => {
      window.clearTimeout(alignmentTimer)
      alignmentTimer = window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => alignHashTarget(hash))
        })
      }, delay)
    }

    const alignAfterFontsLoad = (hash, delay = 1200) => {
      document.fonts.ready.then(() => {
        if (cancelled || window.location.hash !== hash) return
        scheduleAlignment(hash, delay)
      })
    }

    const onHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const immediateAlignmentHashes = new Set(['#projects', '#contact'])
        const delay = immediateAlignmentHashes.has(hash) ? 0 : 1200
        alignAfterFontsLoad(hash, delay)
      }
    }
    const onLoad = () => {
      const hash = window.location.hash
      if (!hash) return

      const animatedLabels = new Set([
        '#experience',
        '#projects',
        '#skills',
        '#contact',
      ])
      alignAfterFontsLoad(hash, animatedLabels.has(hash) ? 0 : 1200)
    }

    window.addEventListener('hashchange', onHashChange)
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })

    return () => {
      cancelled = true
      window.clearTimeout(alignmentTimer)
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <div className="app">
      <Background />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <div className="contact-footer-shell">
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App