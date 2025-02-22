import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      <div className="toggle-icon">{theme === "light" ? "🌞" : "🌙"}</div>
    </button>
  );
};

export default ThemeToggle;
