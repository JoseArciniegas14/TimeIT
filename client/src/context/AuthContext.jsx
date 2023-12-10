import { useState, useEffect, createContext } from "react";
import { Auth, User, Web } from "../data";

const authController = new Auth();
const userController = new User();
const webController = new Web();

const GeneralContext = createContext();

function GeneralProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let keyAccess = authController.getAccessKey();
    if (!keyAccess) {
      logout();
      setLoading(false);
      return;
    }
    keyAccess = JSON.parse(keyAccess);
    setUser(keyAccess);
    setLoading(false);
  }, []);

  // ? Auth & User
  const [user, setUser] = useState(null);

  const login = (data) => {
    setUser({ ...data });
    authController.setAccessKey({ ...data });
  };

  const logout = () => {
    setUser(null);
    userController.removeAccessKey("key");
    webController.delteWebAll();
  };

  const updateUser = (data) => {
    setUser({ ...data });
    authController.setAccessKey({ ...data });
  };

  const deleteUser = () => {
    setUser(null);
    userController.removeAccessKey("key");
    webController.delteWebAll();
  };

  const dataAuth = {
    user,
    login,
    logout,
    updateUser,
    deleteUser,
  };

  // ? Web
  const webInitialState = {
    notes: [],
    alarms: [],
    routines: [],
  };
  const btnAsideInitialState = {
    btnNotes: false,
    btnAlarms: false,
    btnRoutines: false,
  };
  const formInititalState = {
    formNotes: false,
    formAlarms: false,
    formRoutiones: false,
  };

  const [webState, setWebState] = useState(() => {
    const localWebState = localStorage.getItem("webState");
    return localWebState ? JSON.parse(localWebState) : webInitialState;
  });
  const [btnAsideState, setBtnAside] = useState(btnAsideInitialState);
  const [formState, setFormState] = useState(formInititalState);

  const updateWebState = (property, action, object) => {
    setWebState((prevState) => {
      const newState = { ...prevState };
      newState[property] = changeValue(action, newState[property], object);
      webController.setWebState(newState);
      return newState;
    });

    const changeValue = (action, array, object) => {
      if (action === "create") {
        return [object, ...array];
      }
      if (action === "update") {
        return array.map((item) =>
          item.id === object.id ? { ...item, ...object } : item
        );
      }
      if (action === "delete") {
        return array.filter((item) => item.id !== object.id);
      }
    };
  };

  const updateBtnAside = (key, value) => {
    setBtnAside((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const updateFormState = (key, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const dataWeb = {
    webState,
    btnAsideState,
    formState,
    updateWebState,
    updateBtnAside,
    updateFormState,
  };

  if (loading) return null;

  return (
    <GeneralContext.Provider value={{ dataAuth, dataWeb }}>
      {children}
    </GeneralContext.Provider>
  );
}

export { GeneralContext, GeneralProvider };
