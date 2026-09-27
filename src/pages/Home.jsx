import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  BookOpen,
  Brain,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDollarSign,
  GraduationCap,
  History,
  Laptop2,
  LibraryBig,
  Microscope,
  Sprout,
} from 'lucide-react'
import logo from '../assets/unibac-logo.png'
import graduates from '../assets/diplomes.jpg'
import classImg from '../assets/cours-amphi.webp'
import teacher from '../assets/enseignant.webp'
import sport from '../assets/sport.webp'
import rector from '../assets/recteur-officiel.png'
import Reveal from '../components/Reveal'
import { programs, values } from '../data/content'

const iconMap = {
  theology: BookOpen,
  economics: ChartNoAxesCombined,
  monetary: CircleDollarSign,
  mis: Laptop2,
  history: History,
  agronomy: Sprout,
  psychology: Brain,
  faith: BookOpen,
  excellence: GraduationCap,
  work: BriefcaseBusiness,
}

const heroSlides = [
  { image: graduates, tag: { fr: 'COMMUNAUTÉ & RÉUSSITE', en: 'COMMUNITY & SUCCESS', kg: 'BANTU & KUNUNGA' }, title: { fr: 'Former avec foi. Servir avec excellence.', en: 'Educate with faith. Serve with excellence.', kg: 'Longa na lukwikilu. Sadila na excellence.' } },
  { image: classImg, tag: { fr: 'ENSEIGNEMENT', en: 'TEACHING', kg: 'MALONGI' }, title: { fr: 'Apprendre pour transformer.', en: 'Learn to transform.', kg: 'Longuka sambu na kusoba.' } },
  { image: teacher, tag: { fr: 'TRANSMISSION', en: 'KNOWLEDGE', kg: 'KUPESA MAYELE' }, title: { fr: 'Le savoir au service de la société.', en: 'Knowledge in service of society.', kg: 'Mayele sambu na kusadila bantu.' } },
]

export default function Home({ lang, t }) {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const slide = useMemo(() => heroSlides[index], [index])
  const L = (fr, en, kg) => lang === 'fr' ? fr : lang === 'en' ? en : kg

  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % heroSlides.length), 6500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section className="hero">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt="UNIBAC"
            className="hero-image active"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.11 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.1 }, scale: { duration: 7, ease: 'linear' } }}
          />
        </AnimatePresence>
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="hero-kicker">{t.heroKicker}</motion.div>
          <motion.div key={`tag-${index}`} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55 }} className="hero-slide-tag">{slide.tag[lang] || slide.tag.fr}</motion.div>
          <motion.h1 key={`title-${index}`} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>{slide.title[lang] || slide.title.fr}</motion.h1>
          <motion.p key={`text-${index}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12 }}>{t.heroText}</motion.p>
          <div className="hero-buttons">
            <button className="btn gold" onClick={() => navigate('/universite')}>{t.heroPrimary} ↗</button>
            <button className="btn ghost" onClick={() => navigate('/admissions')}>{t.heroSecondary} →</button>
          </div>
        </div>

        <div className="hero-mark"><img src={logo} alt="" /></div>
      </section>

      <section className="section heritage soft-emblem">
        <div className="section-grid two">
          <Reveal><p className="eyebrow">{t.originTag}</p><h2>{t.originTitle}</h2><p>{t.originText1}</p><p>{t.originText2}</p></Reveal>
          <Reveal delay={.1} className="timeline-card"><div><strong>{t.timelineOld}</strong><span>{t.timelineOldText}</span></div><i /><div><strong>{t.timelineNow}</strong><span>{t.timelineNowText}</span></div></Reveal>
        </div>
      </section>

      <section className="section theology-section soft-emblem">
        <div className="theology-grid">
          <Reveal className="feature-card theology-card"><span>{t.theologyTag}</span><h2>{t.theologyTitle}</h2><p>{t.theologyText}</p><button onClick={() => navigate('/facultes')}>{L('Découvrir la faculté', 'Explore the faculty', 'Tala fakilte')} ↗</button></Reveal>
          <Reveal delay={.08} className="feature-card women-card"><span>{t.womenTag}</span><h2>{t.womenTitle}</h2><p>{t.womenText}</p><small>{t.womenNote}</small><button onClick={() => navigate('/ecole-des-femmes')}>{L("Découvrir l'École des Femmes", "Explore the Women's School", 'Tala Nzo-nkanda ya Bankento')} ↗</button></Reveal>
        </div>
      </section>

      <section className="section rector-preview dark-section soft-emblem">
        <div className="rector-grid">
          <Reveal className="rector-image"><img src={rector} alt={t.rectorName} /></Reveal>
          <Reveal delay={.1}><p className="eyebrow gold-text">{t.rectorTag}</p><h2>{t.rectorTitle}</h2><h3>{t.rectorName}</h3><p className="muted-on-dark">{t.rectorRole}</p><p>{t.rectorText}</p><button className="btn gold" onClick={() => navigate('/rectorat')}>{L('Découvrir le Rectorat', 'Discover the Rectorate', 'Tala Rektorat')} ↗</button></Reveal>
        </div>
      </section>

      <section className="section programs-section soft-emblem">
        <div className="section-heading"><div><p className="eyebrow">{t.facultiesTag}</p><h2>{t.facultiesTitle}</h2></div><button className="text-link" onClick={() => navigate('/facultes')}>{L('Voir tous les programmes', 'View all programs', 'Tala baprogramme yonso')} →</button></div>
        <div className="program-grid">
          {programs.map((p) => {
            const Icon = iconMap[p.id] || GraduationCap
            return <button key={p.id} onClick={() => navigate('/facultes')} className={p.featured ? 'featured' : ''}><span className="program-icon"><Icon size={24} /></span><strong>{p[lang] || p.fr}</strong><i>↗</i></button>
          })}
        </div>
      </section>

      <section className="section library-preview soft-emblem">
        <div className="split-visual">
          <Reveal className="visual-panel"><img src={classImg} alt="Bibliothèque et campus numérique" /><div className="visual-label">UNIBAC · DIGITAL CAMPUS</div></Reveal>
          <Reveal delay={.1}><p className="eyebrow">{t.libraryTag}</p><h2>{t.libraryTitle}</h2><p>{t.libraryText}</p><div className="stat-row"><div><LibraryBig size={22} /><strong>{L('Bibliothèque', 'Library', 'Biblioteke')}</strong><span>{L('Importante collection universitaire', 'Major university collection', 'Mikanda mingi ya iniversite')}</span></div><div><Laptop2 size={22} /><strong>Internet</strong><span>{L('Connexion haut débit', 'High-speed connectivity', 'Internet ya ntinu')}</span></div></div><button className="btn navy" onClick={() => navigate('/bibliotheque')}>{L('Explorer les ressources', 'Explore resources', 'Tala bima ya lusadisu')} ↗</button></Reveal>
        </div>
      </section>

      <section className="section research-preview dark-section soft-emblem">
        <div className="research-grid">
          <Reveal><p className="eyebrow gold-text">{t.researchTag}</p><h2>{t.researchTitle}</h2><p>{t.researchText}</p><button className="btn gold" onClick={() => navigate('/recherche')}>{L('Voir la recherche', 'View research', 'Tala bansosa')} ↗</button></Reveal>
          <Reveal delay={.1} className="research-stack"><article><Microscope /><strong>{L('Articles & revues', 'Articles & journals', 'Articles & revues')}</strong></article><article><BookOpen /><strong>{L('Mémoires & TFC', 'Dissertations', 'Mémoires & TFC')}</strong></article><article><GraduationCap /><strong>{L('Thèses & projets', 'Theses & projects', 'Thèses & projets')}</strong></article></Reveal>
        </div>
      </section>

      <section className="section campus-life soft-emblem"><div className="section-heading"><div><p className="eyebrow">{t.lifeTag}</p><h2>{t.lifeTitle}</h2></div></div><div className="life-grid"><img src={sport} alt="Vie universitaire" /><img src={graduates} alt="Diplômés UNIBAC" /><img src={teacher} alt="Enseignement UNIBAC" /></div></section>

      <section className="section admissions-preview dark-section soft-emblem"><div className="admissions-card"><div><p className="eyebrow gold-text">{t.admissionsTag}</p><h2>{t.admissionsTitle}</h2><p>{t.admissionsText}</p></div><div className="admission-steps"><span>{t.step1}</span><span>{t.step2}</span><span>{t.step3}</span><span>{t.step4}</span></div><button className="btn gold" onClick={() => navigate('/admissions')}>{L('Préparer mon inscription', 'Prepare my application', 'Yidika inscription na mono')} ↗</button></div></section>

      <section className="section values soft-emblem"><div><p className="eyebrow">UNIBAC</p><h2>{t.motto}</h2></div><div className="value-row">{values.map((v) => { const Icon = iconMap[v.id]; return <span key={v.id}><Icon size={18} />{v[lang] || v.fr}</span> })}</div></section>
    </>
  )
}
