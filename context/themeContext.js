import { useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

const ContextThemeProvider = (props) => {
  const cambioDark = () => {
    console.log(localStorage.theme);

    if (localStorage.theme === undefined) {
      localStorage.setItem("theme", "dark");
      document.querySelector("html").classList.add("dark");
    } else {
      let htmlx = document.querySelector("html").classList;
      if (localStorage.theme == "dark") {
        htmlx.remove("dark");
        localStorage.setItem("theme", "ligth");
        htmlx.add("ligth");
      } else if (localStorage.theme == "ligth") {
        htmlx.remove("ligth");
        localStorage.setItem("theme", "dark");
        htmlx.add("dark");
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
      console.log(" es dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        cambioDark,
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
