import { useNavigate } from 'react-router-dom'
import {
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clock3,
  GraduationCap,
  History,
  Laptop2,
  LibraryBig,
  Microscope,
  Newspaper,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Sprout,
  Target,
  UsersRound,
  Wifi,
} from 'lucide-react'
import rector from '../assets/recteur-officiel.png'
import rectorPortrait from '../assets/recteur-portrait.webp'
import graduates from '../assets/diplomes.jpg'
import classImg from '../assets/cours-amphi.webp'
import teacher from '../assets/enseignant.webp'
import sport from '../assets/sport.webp'
import Reveal from '../components/Reveal'
import { programs } from '../data/content'

const programIcons = {
  theology: BookOpen,
  economics: ChartNoAxesCombined,
  monetary: CircleDollarSign,
  mis: Laptop2,
  history: History,
  agronomy: Sprout,
  psychology: Brain,
}

export default function GenericPage({ page, lang, t }) {
  const navigate = useNavigate()
  const L = (fr, en, kg) => lang === 'fr' ? fr : lang === 'en' ? en : kg

  const configs = {
    universite: { kicker: 'UNIBAC', title: L('Une université enracinée et ouverte sur l’avenir.', 'A rooted university open to the future.', 'Iniversite ya misisa ya ngolo mpe ya tala ntangu ke kwisa.'), text: t.heroText, image: classImg },
    facultes: { kicker: t.facultiesTag, title: t.facultiesTitle, text: L('La plateforme pourra détailler chaque faculté, ses responsables, ses orientations, ses débouchés et ses programmes.', 'The platform can detail each faculty, its leadership, orientation, outcomes and programs.', 'Plateforme lenda songa fakilte yina yonso, bakuluntu na yo, nzila na yo mpe baprogramme na yo.'), image: graduates },
    admissions: { kicker: t.admissionsTag, title: t.admissionsTitle, text: t.admissionsText, image: graduates },
    recherche: { kicker: t.researchTag, title: t.researchTitle, text: t.researchText, image: teacher },
    bibliotheque: { kicker: t.libraryTag, title: t.libraryTitle, text: t.libraryText, image: classImg },
    actualites: { kicker: L('ACTUALITÉS & ÉVÉNEMENTS', 'NEWS & EVENTS', 'BANSANGU & MAKAMBU'), title: L('Toute la vie de l’UNIBAC, au même endroit.', 'All UNIBAC news in one place.', 'Luzingu ya UNIBAC yonso na kisika mosi.'), text: L('Cette page est prête à recevoir annonces, conférences, cérémonies, calendriers, communiqués et événements du campus.', 'This page is ready for announcements, conferences, ceremonies, calendars, notices and campus events.', 'Page yai kele ya kuyamba bansangu, conférences, cérémonies, calendrier mpe makambu ya campus.'), image: sport },
    rectorat: { kicker: t.rectorTag, title: t.rectorTitle, text: t.rectorText, image: rector },
    'ecole-des-femmes': { kicker: t.womenTag, title: t.womenTitle, text: t.womenText, image: teacher },
    alumni: { kicker: 'ALUMNI UNIBAC', title: L('Le lien avec l’UNIBAC continue après le diplôme.', 'Your connection to UNIBAC continues after graduation.', 'Kukangama na UNIBAC ke landa na nima ya diplôme.'), text: L('La future plateforme Alumni pourra intégrer inscription des anciens, associations, opportunités, mentorat, événements et annuaire professionnel.', 'The future Alumni platform can integrate graduate registration, associations, opportunities, mentoring, events and a professional directory.', 'Plateforme Alumni lenda vanda ti inscription ya anciens, associations, mabaku, mentorat, événements mpe annuaire ya kisalu.'), image: graduates },
    contact: { kicker: t.contactTag, title: t.contactTitle, text: t.contactText, image: rectorPortrait },
  }
  const c = configs[page] || configs.universite

  return (
    <main className="inner-page">
      <section className="inner-hero">
        <img src={c.image} alt="UNIBAC" />
        <div className="inner-overlay" />
        <div className="inner-copy"><p className="eyebrow gold-text">{c.kicker}</p><h1>{c.title}</h1><p>{c.text}</p></div>
      </section>

      {page === 'facultes' && <section className="section soft-emblem"><div className="program-grid large">{programs.map((p) => { const Icon = programIcons[p.id] || GraduationCap; return <article key={p.id} className={p.featured ? 'featured' : ''}><span className="program-icon"><Icon size={26} /></span><h3>{p[lang] || p.fr}</h3><p>{p.featured ? L('Faculté historique et fondatrice de l’institution.', 'Historic and founding faculty of the institution.', 'Fakilte ya ntete mpe ya fondasio ya institution.') : L('Programme à structurer avec les informations officielles.', 'Program to be completed with official information.', 'Programme ta fuluka ti bansangu ya officiel.')}</p></article> })}</div></section>}

      {page === 'universite' && <section className="section soft-emblem"><div className="info-grid"><article><History /><h3>{L('Historique', 'History', 'Istware')}</h3><p>{t.originText2}</p></article><article><Target /><h3>{L('Vision', 'Vision', 'Vision')}</h3><p>{L('Devenir une université de référence, reconnue pour la qualité de sa formation, l’excellence académique, la recherche et son engagement au service de la société.', 'To become a reference university known for academic quality, research and service to society.', 'Kukuma iniversite ya mbandu sambu na malongi ya mbote, bansosa mpe kisalu na bantu.')}</p></article><article><Send /><h3>{L('Mission', 'Mission', 'Mission')}</h3><p>{L('Former des femmes et des hommes compétents, responsables et capables de mettre leurs connaissances au service de la communauté.', 'To educate competent and responsible women and men able to place knowledge at the service of the community.', 'Kulonga bankento mpe babakala ya makuki, ya lukanu mpe yina ke sadila bantu ti mayele na bo.')}</p></article></div></section>}

      {page === 'rectorat' && <section className="section soft-emblem"><Reveal className="profile-card"><img src={rectorPortrait} alt={t.rectorName} /><div><p className="eyebrow">{t.rectorTag}</p><h2>{t.rectorName}</h2><h3>{t.rectorRole}</h3><p>{t.rectorText}</p></div></Reveal></section>}

      {page === 'ecole-des-femmes' && <section className="section soft-emblem"><div className="info-grid"><article><History /><h3>{L('Origine', 'Origin', 'Luyantiku')}</h3><p>{t.womenText}</p></article><article><UsersRound /><h3>{L('Objectif', 'Purpose', 'Lukanu')}</h3><p>{L('Renforcer les capacités, l’accompagnement familial, le leadership et le service communautaire.', 'Strengthen capacity, family support, leadership and community service.', 'Kuyedisa makuki, lusadisu ya dibuta, leadership mpe kisalu na bantu.')}</p></article><article><GraduationCap /><h3>{L('Évolution possible', 'Possible evolution', 'Kuyela na ntangu')}</h3><p>{t.womenNote}</p></article></div></section>}

      {page === 'admissions' && <section className="section soft-emblem"><div className="admission-flow"><article><BookOpen /><h3>{t.step1}</h3></article><article><BriefcaseBusiness /><h3>{t.step2}</h3></article><article><GraduationCap /><h3>{t.step3}</h3></article><article><Clock3 /><h3>{t.step4}</h3></article></div></section>}

      {page === 'bibliotheque' && <section className="section soft-emblem"><div className="info-grid"><article><LibraryBig /><h3>{L('Grande bibliothèque', 'Major library', 'Biblioteke ya nene')}</h3><p>{L('Présentation du fonds documentaire, horaires, conditions d’accès et services.', 'Presentation of collections, hours, access conditions and services.', 'Mikanda, bangunga, banzila ya kukota mpe services.')}</p></article><article><BookOpen /><h3>{L('Bibliothèque numérique', 'Digital library', 'Biblioteke numérique')}</h3><p>{L('Catalogue, mémoires, TFC, thèses et ressources électroniques.', 'Catalog, dissertations, theses and electronic resources.', 'Catalogue, mémoires, TFC, thèses mpe ressources électroniques.')}</p></article><article><Wifi /><h3>{L('Campus connecté', 'Connected campus', 'Campus na internet')}</h3><p>{L('Connexion Internet haut débit et services numériques universitaires.', 'High-speed Internet and university digital services.', 'Internet ya ntinu mpe services numériques ya iniversite.')}</p></article></div></section>}

      {page === 'recherche' && <section className="section soft-emblem"><div className="publication-grid"><article><Microscope /><h3>{L('Articles scientifiques', 'Scientific articles', 'Articles scientifiques')}</h3><p>{L('Indexation, auteurs, facultés et téléchargement.', 'Indexing, authors, faculties and download.', 'Indexation, auteurs, bafakilte mpe téléchargement.')}</p></article><article><BookOpen /><h3>{L('Mémoires & TFC', 'Dissertations', 'Mémoires & TFC')}</h3><p>{L('Répertoire académique consultable par année et filière.', 'Academic repository searchable by year and program.', 'Répertoire ya malongi na mvula mpe filière.')}</p></article><article><Newspaper /><h3>{L('Revues', 'Journals', 'Revues')}</h3><p>{L('Espace dédié aux futures revues et publications de l’UNIBAC.', 'Dedicated area for future UNIBAC journals and publications.', 'Kisika sambu na revues mpe publications ya UNIBAC.')}</p></article></div></section>}

      {page === 'actualites' && <section className="section soft-emblem"><div className="news-grid">{[graduates, sport, classImg].map((img, i) => <article key={img}><img src={img} alt="Actualité UNIBAC" /><small>UNIBAC · 0{i + 1}</small><h3>{[L('Cérémonie académique','Academic ceremony','Cérémonie académique'),L('Vie sportive','Campus sports','Sport na campus'),L('Formation & campus','Teaching & campus','Malongi & campus')][i]}</h3><p>{L('Contenu de démonstration à remplacer par les actualités officielles.', 'Demo content to be replaced by official news.', 'Mambu ya demo; bansangu ya officiel ta vingisa yo.')}</p></article>)}</div></section>}

      {page === 'alumni' && <section className="section soft-emblem"><div className="alumni-banner"><div><strong>UNIBAC ALUMNI</strong><h2>{L('Connecter les diplômés, créer des opportunités.', 'Connect graduates, create opportunities.', 'Kukangisa ba diplômés mpe kusala mabaku.')}</h2><p>{L('Annuaire, associations, mentorat, offres, événements et réseau international.', 'Directory, associations, mentoring, opportunities, events and an international network.', 'Annuaire, associations, mentorat, mabaku, événements mpe réseau international.')}</p></div><button className="btn gold">{L('Rejoindre le réseau', 'Join the network', 'Kota na réseau')} ↗</button></div></section>}

      {page === 'contact' && (
        <section className="section soft-emblem">
          <div className="contact-layout">
            <div className="contact-intro-card">
              <p className="eyebrow">{L('CONTACT', 'CONTACT', 'CONTACT')}</p>
              <h2>{L('Restons en contact.', 'Let’s stay in touch.', 'Bika beto landa kusolula.')}</h2>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="contact-detail-icon"><MapPin size={21} /></span>
                  <div>
                    <small>{L('Adresse', 'Address', 'Adresse')}</small>
                    <strong>{t.location}</strong>
                  </div>
                </div>

                <a className="contact-detail-item" href={`tel:${t.phone.replace(/\s/g, '')}`}>
                  <span className="contact-detail-icon"><Phone size={21} /></span>
                  <div>
                    <small>{L('Téléphone', 'Phone', 'Téléphone')}</small>
                    <strong>{t.phone}</strong>
                  </div>
                </a>

                <a className="contact-detail-item" href="mailto:contact@unibac.cd">
                  <span className="contact-detail-icon"><Mail size={21} /></span>
                  <div>
                    <small>E-mail</small>
                    <strong>contact@unibac.cd</strong>
                  </div>
                </a>
              </div>

              <a
                className="contact-whatsapp"
                href={`https://wa.me/${t.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label>{L('Nom complet', 'Full name', 'Nkumbu ya mvimba')}<input /></label>
              <label>{L('Téléphone', 'Phone', 'Téléphone')}<input /></label>
              <label>E-mail<input type="email" /></label>
              <label>{L('Message', 'Message', 'Nsangu')}<textarea rows="6" /></label>
              <button className="btn navy" type="submit">{L('Envoyer la demande', 'Send request', 'Fidisa demande')} →</button>
            </form>
          </div>
        </section>
      )}

      <section className="section back-home"><button className="text-link" onClick={() => navigate('/')}>← {L('Retour à l’accueil', 'Back to home', 'Vutuka na luyantiku')}</button></section>
    </main>
  )
}
