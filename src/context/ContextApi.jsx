import { createContext, useContext, useEffect, useState, useRef } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { autoLogin } from "../Utility/Autologin.js";

import { fetchTransactions } from "../Utility/fetchTransactions.js";

export const CentralState = createContext();

export const CentralstateProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [show, setShow] = useState(false);

  const toggle = () => {
    show ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    !user?._id && autoLoginUser();
  }, [user]);

  const autoLoginUser = async () => {
    const fetchUser = await autoLogin();
    console.log("auto login cALLED");
    if (fetchUser?._id) {
      setUser(fetchUser);
      updateTransaction();
    }
  };

  const updateTransaction = async () => {
    const { result } = await fetchTransactions();
    setTransactions(result);
  };
  const value = {
    user,
    setUser,
    toggle,
    show,

    transactions,
    setTransactions,
  };
  return (
    <CentralState.Provider value={value}>{children}</CentralState.Provider>
  );
};
export const userdata = () => {
  return useContext(CentralState);
};
