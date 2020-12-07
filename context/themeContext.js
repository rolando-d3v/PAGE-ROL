import { useEffect, createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ContextThemeProvider = (props) => {

  const [toggle, setToggle] = useState(false)


  const cambioDark = () => {
    if (localStorage.theme === undefined) {
      localStorage.setItem("theme", "dark");
      document.querySelector("html").classList.add("dark");
      setToggle(true)
    } else {
      let htmlx = document.querySelector("html").classList;
      if (localStorage.theme == "dark") {
        htmlx.remove("dark");
        localStorage.setItem("theme", "ligth");
        htmlx.add("ligth");
        setToggle(false)
      } else if (localStorage.theme == "ligth") {
        htmlx.remove("ligth");
        localStorage.setItem("theme", "dark");
        htmlx.add("dark");
        setToggle(true)
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
      setToggle(true)
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        cambioDark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ContextThemeProvider;

export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
