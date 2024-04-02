/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const ActiveNavContext = createContext();

const ActiveNavProvider = ({ children }) => {
  return (
    <ActiveNavContext.Provider value={useActiveContext()}>
      {children}
    </ActiveNavContext.Provider>
  );
};

ActiveNavProvider.propTypes = {
  children: PropTypes.any,
};

const useActiveContext = () => {
  const selected = window.location.hash;
  const [activeId, setActiveId] = useState(
    selected ? selected.replace("#", "") : "about-me"
  );

  useEffect(() => {
    if (!selected) return;
    document.querySelector(selected).scrollIntoView();
  }, [selected]);

  return { activeId, setActiveId };
};

const useActive = () => {
  const context = useContext(ActiveNavContext);
  if (!context)
    throw new Error("You are using nav context out of nav provider");
  return context;
};

export { ActiveNavProvider, useActive };
