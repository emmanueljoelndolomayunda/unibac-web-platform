import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import logo from '../assets/unibac-logo.png'
import SocialIcon from './SocialIcon'

export default function Footer({ lang, t }) {
  const L = (fr, en, kg) => lang === 'fr' ? fr : lang === 'en' ? en : kg
  const whatsapp = `https://wa.me/${t.phone.replace(/\D/g, '')}`

  const socials = [
    { name: 'facebook', label: 'Facebook', href: '#' },
    { name: 'instagram', label: 'Instagram', href: '#' },
    { name: 'linkedin', label: 'LinkedIn', href: '#' },
    { name: 'youtube', label: 'YouTube', href: '#' },
    { name: 'whatsapp', label: 'WhatsApp', href: whatsapp },
  ]

  return (
    <footer className="site-footer">
      <div className="footer-topline" />

      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-lockup">
            <img src={logo} alt="UNIBAC" />
            <div><strong>UNIBAC</strong><span>Université Baptiste au Congo</span></div>
          </div>
          <p>{t.footerAbout}</p>
          <div className="footer-motto">FIDES EXCELLENS ET LABOR</div>
        </div>

        <div className="footer-column">
          <h4>{L('Université', 'University', 'Iniversite')}</h4>
          <Link to="/universite">{L('À propos', 'About', 'Mambu ya UNIBAC')}</Link>
          <Link to="/rectorat">{L('Rectorat', 'Rectorate', 'Rektorat')}</Link>
          <Link to="/facultes">{L('Facultés', 'Faculties', 'Bafakilte')}</Link>
          <Link to="/ecole-des-femmes">{L('École des Femmes', "Women's School", 'Nzo-nkanda ya bankento')}</Link>
        </div>

        <div className="footer-column">
          <h4>{L('Ressources', 'Resources', 'Bima ya lusadisu')}</h4>
          <Link to="/bibliotheque">{L('Bibliothèque', 'Library', 'Biblioteke')}</Link>
          <Link to="/recherche">{L('Recherche', 'Research', 'Bansosa')}</Link>
          <Link to="/actualites">{L('Actualités', 'News', 'Bansangu')}</Link>
          <Link to="/alumni">Alumni</Link>
        </div>

        <div className="footer-contact">
          <h4>{L('Contact', 'Contact', 'Kusolola')}</h4>
          <p><MapPin size={18} /> <span>{t.location}</span></p>
          <a href={`tel:${t.phone.replace(/\s/g, '')}`}><Phone size={18} /><span>{t.phone}</span></a>
          <a href="mailto:contact@unibac.cd"><Mail size={18} /><span>contact@unibac.cd</span></a>
          <a className="footer-whatsapp" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={16} /></a>
        </div>
      </div>

      <div className="footer-social-zone">
        <div>
          <small>{L('RESTONS CONNECTÉS', 'STAY CONNECTED', 'Beto bika pene-pene')}</small>
          <strong>{L('Suivez la vie universitaire.', 'Follow university life.', 'Landila luzingu ya iniversite.')}</strong>
        </div>
        <div className="social-buttons">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href === '#' ? undefined : '_blank'}
              rel={social.href === '#' ? undefined : 'noreferrer'}
              aria-label={social.label}
              title={social.href === '#' ? `${social.label} — lien officiel à ajouter` : social.label}
              onClick={social.href === '#' ? (e) => e.preventDefault() : undefined}
            >
              <SocialIcon name={social.name} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 UNIBAC. {L('Tous droits réservés.', 'All rights reserved.', 'Banswa yonso me bumbama.')}</span>
        <span className="footer-credit">Conception &amp; développement · <strong>RLSys Business</strong></span>
      </div>
    </footer>
  )
}
