import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

const useAuth = () => {
  const { user, login, logout, updateUser, deleteUser } =
    useContext(GeneralContext).dataAuth;

  return { user, login, logout, updateUser, deleteUser };
};

const useWeb = () => {
  const {
    webState,
    btnAsideState,
    formState,
    updateWebState,
    updateBtnAside,
    updateFormState,
  } = useContext(GeneralContext).dataWeb;

  return {
    webState,
    btnAsideState,
    formState,
    updateWebState,
    updateBtnAside,
    updateFormState,
  };
};

export { useAuth, useWeb };
