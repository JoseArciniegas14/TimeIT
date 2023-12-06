import { useState, useEffect, createContext } from "react";
import { Auth } from "../data/Auth";

const authController = new Auth();
const AuthContext = createContext();

const userPrueba = {
  _id: 1231235,
  name: "Jesus Home",
  age: 18,
  country: "Colombia",
  city: "Garzon",
  email: "jesus1404@example.com",
  phone: 3228173630,
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(userPrueba);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const keyAccess = authController.getAccessKey();
      // if (!keyAccess) {
      //   logout();
      //   setLoading(false);
      //   return;
      // }
      setLoading(false);
    })();
  }, []);

  const login = (data) => {
    setUser({ ...data });
    authController.setAccessKey({ id: data._id, name: data.name });
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
