// App.jsx
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Login from './components/Login';
import Acessar from './components/Acessar';
import Dados from './components/Dados';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

//i18n
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {

  const { t } = useTranslation();

  return (
    <AuthProvider>
      <LanguageSwitcher />
      <h1>{t('ola')}</h1>
      <ul>
        <li><Link to="/">{t('home')}</Link></li>
        <li><Link to="/login">{t('Login')}</Link></li>
        <li><Link to="/dados">{t('Dados')}</Link></li>
        <li><Link to="/acessar">{t('telaPrivada')}</Link></li>
      </ul>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/acessar' element={<PrivateRoute><Acessar /></PrivateRoute>} />
        <Route path='/dados' element={<Dados />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
