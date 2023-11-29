import { useState, useEffect, createContext, Children } from "react";

const AuthContext = createContext();

function AuthProvider() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({});
  };
  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={data}>{Children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
