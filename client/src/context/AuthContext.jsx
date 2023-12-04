import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
