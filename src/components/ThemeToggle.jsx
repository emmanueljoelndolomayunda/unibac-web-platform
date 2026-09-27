import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function getInitialTheme() {
  const saved = localStorage.getItem('unibac-theme')
  return saved === 'dark' ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('unibac-theme', theme)
  }, [theme])

  const dark = theme === 'dark'

  return (
    <button
      className="icon-button"
      type="button"
      aria-label={dark ? 'Activer le mode jour' : 'Activer le mode nuit'}
      title={dark ? 'Mode jour' : 'Mode nuit'}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
    >
      {dark ? <Sun size={19} strokeWidth={2.2} /> : <Moon size={19} strokeWidth={2.2} />}
    </button>
  )
}
