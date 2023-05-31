import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "@/contexts/ThemeContext";
import style from "./ThemeSelect.module.css";

export const ThemeSelect: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${style["theme-select"]} transition`}>
      <button
        className={`${style["theme-select__button"]} transition`}
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <>
            <FontAwesomeIcon icon={faMoon} />
            Dark Mode
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faSun} />
            Light Mode
          </>
        )}
      </button>
    </div>
  );
};
