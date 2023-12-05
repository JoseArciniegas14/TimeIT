import { useState, useEffect, createContext } from "react";
import { Auth } from "../data/Auth";

const authController = new Auth();
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "Jesus Home" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const keyAccess = authController.getAccessKey();
      if (!keyAccess) {
        logout();
        setLoading(false);
        return;
      }
      setLoading(false);
    })();
  }, []);

  const login = async (data) => {
    setUser({ ...data });
  };

  const logout = () => {
    setUser(null);
    authController.removeAccessKey("key");
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
