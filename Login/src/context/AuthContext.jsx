// AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const savedUserData = localStorage.getItem('login');
    return savedUserData ? JSON.parse(savedUserData) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('login', JSON.stringify(userData))
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem('login')
    }, 100000);
  }, [])

  const logout = () => {
    setUser(null);
    localStorage.removeItem('login')
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
