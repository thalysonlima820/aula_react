import './App.css'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import Users from './components/pages/admin/Users';


function App() {
  const { t } = useTranslation();

  return (
    <>
     {t('hello')}
     <LanguageSwitcher />
     <Users />
    </>
  )
}

export default App
