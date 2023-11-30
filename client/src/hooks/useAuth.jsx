import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (data) => {
    setUser({});
  };

  const logout = () => {
    setUser(null);
  };

  return { user, setUser, login, logout };
};

export { useAuth };
