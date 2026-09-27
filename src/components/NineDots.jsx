import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  BookOpenCheck,
  Building2,
  GraduationCap,
  LibraryBig,
  Microscope,
  Newspaper,
  School,
  UsersRound,
  X,
  MessageCircleMore,
} from 'lucide-react'
import { quickLinks } from '../data/content'
import logo from '../assets/unibac-logo.png'

const iconMap = {
  admissions: GraduationCap,
  facultes: Building2,
  bibliotheque: LibraryBig,
  recherche: Microscope,
  'ecole-des-femmes': School,
  rectorat: BookOpenCheck,
  actualites: Newspaper,
  alumni: UsersRound,
  contact: MessageCircleMore,
}

export default function NineDots({ open, setOpen, lang }) {
  useEffect(() => {
    document.body.classList.toggle('drawer-open', open)
    return () => document.body.classList.remove('drawer-open')
  }, [open])

  const title = lang === 'fr' ? 'Accès rapides' : lang === 'en' ? 'Quick access' : 'Banzila ya nswalu'
  const mottoText = lang === 'fr' ? 'Foi · Excellence · Travail' : lang === 'en' ? 'Faith · Excellence · Work' : 'Lukwikilu · Excellence · Kisalu'

  return (
    <>
      <button className="nine-dots" type="button" onClick={() => setOpen(true)} aria-label={title} aria-expanded={open}>
        {Array.from({ length: 9 }).map((_, index) => <i key={index} />)}
      </button>

      <div className={`drawer-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`portal-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <div className="drawer-brand">
            <img src={logo} alt="Logo UNIBAC" />
            <div>
              <small>UNIBAC</small>
              <strong>{title}</strong>
            </div>
          </div>
          <button className="drawer-close" onClick={() => setOpen(false)} type="button" aria-label="Fermer">
            <X size={21} />
          </button>
        </div>

        <div className="drawer-scroll">
          <div className="quick-grid">
            {quickLinks.map((item) => {
              const Icon = iconMap[item.id] || Building2
              return (
                <NavLink key={item.id} to={item.path} onClick={() => setOpen(false)}>
                  <span className="quick-icon"><Icon size={23} strokeWidth={1.9} /></span>
                  <strong>{item.label[lang] || item.label.fr}</strong>
                  <span className="quick-arrow">↗</span>
                </NavLink>
              )
            })}
          </div>

          <div className="drawer-quote">
            <small>{lang === 'fr' ? 'NOTRE DEVISE' : lang === 'en' ? 'OUR MOTTO' : 'MOTTO NA BETO'}</small>
            <strong>FIDES EXCELLENS ET LABOR</strong>
            <p>{mottoText}</p>
          </div>
        </div>
      </aside>
    </>
  )
}
