import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Languages } from 'lucide-react'

const options = [
  { code: 'fr', short: 'FR', label: 'Français' },
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'kg', short: 'KG', label: 'Kikongo' },
]

export default function LanguageSwitch({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const current = options.find((item) => item.code === lang) || options[0]

  useEffect(() => {
    const close = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [])

  return (
    <div className="language-control" ref={wrapRef}>
      <button className="lang-button" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <Languages size={17} />
        <span className="lang-current">{current.short}</span>
        <ChevronDown className={open ? 'rotated' : ''} size={15} />
      </button>

      <div className={`language-menu ${open ? 'open' : ''}`}>
        {options.map((item) => (
          <button
            key={item.code}
            type="button"
            className={lang === item.code ? 'active' : ''}
            onClick={() => { setLang(item.code); setOpen(false) }}
          >
            <span><strong>{item.short}</strong><small>{item.label}</small></span>
            {lang === item.code && <Check size={16} />}
          </button>
        ))}
      </div>
    </div>
  )
}
