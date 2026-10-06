import { useTranslation } from 'react-i18next'

export default function App() {
  const { t, i18n } = useTranslation()
  const setLang = (lng: string) => i18n.changeLanguage(lng)
  return (
    <div className="min-h-screen bg-bg text-white p-4">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setLang('ar')}>AR</button>
        <button onClick={() => setLang('fr')}>FR</button>
        <button onClick={() => setLang('en')}>EN</button>
      </div>
      <h1 className="text-3xl text-primary font-display">{t('title')}</h1>
    </div>
  )
}
