import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/unibac-logo.png'
import ThemeToggle from './ThemeToggle'
import LanguageSwitch from './LanguageSwitch'
import NineDots from './NineDots'
import { nav } from '../data/content'

export default function Header({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const homeLabel = lang === 'fr' ? 'Accueil' : lang === 'en' ? 'Home' : 'Luyantiku'
  const contactLabel = lang === 'fr' ? 'Nous contacter' : lang === 'en' ? 'Contact us' : 'Solola na beto'

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-shell">
        <NavLink className="brand" to="/" aria-label="UNIBAC - Accueil">
          <img src={logo} alt="Logo UNIBAC" />
          <em className="mobile-brand-title">UNIBAC</em>
          <span>
            <strong>UNIBAC</strong>
            <small>Université Baptiste au Congo</small>
          </span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <NavLink className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`} to="/" end>{homeLabel}</NavLink>
          {nav.map((item) => (
            <NavLink
              key={item.id}
              className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}
              to={item.path}
            >
              {item[lang] || item.fr}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <LanguageSwitch lang={lang} setLang={setLang} />
          <NavLink className="header-contact" to="/contact">{contactLabel}</NavLink>
          <NineDots open={drawerOpen} setOpen={setDrawerOpen} lang={lang} />
        </div>
      </div>
    </header>
  )
}
