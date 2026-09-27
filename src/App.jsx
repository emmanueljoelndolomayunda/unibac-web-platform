import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import GenericPage from './pages/GenericPage'
import { translations } from './data/content'

const pageRoutes = [
  'universite',
  'facultes',
  'admissions',
  'recherche',
  'bibliotheque',
  'actualites',
  'rectorat',
  'ecole-des-femmes',
  'alumni',
  'contact',
]

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('unibac-lang') || 'fr')
  const location = useLocation()
  const t = useMemo(() => translations[lang] || translations.fr, [lang])

  useEffect(() => {
    localStorage.setItem('unibac-lang', lang)
    document.documentElement.lang = lang === 'kg' ? 'kg' : lang
  }, [lang])

  return (
    <div className="app-shell">
      <ScrollManager />
      <Header lang={lang} setLang={setLang} />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home lang={lang} t={t} />} />
            {pageRoutes.map((page) => (
              <Route key={page} path={`/${page}`} element={<GenericPage page={page} lang={lang} t={t} />} />
            ))}
            <Route path="*" element={<Home lang={lang} t={t} />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer lang={lang} t={t} />
    </div>
  )
}
