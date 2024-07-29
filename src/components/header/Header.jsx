import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import DarkModeButton from "./DarkModeButton";
import Title from "./Title";

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`max-w-full flex justify-between items-center py-5 px-5 ${isDarkMode ? "bg-darkBlue text-white" : "bg-white text-veryDarkBlueLightModeText"} `}>
      <Title />
      <DarkModeButton isDarkMode={isDarkMode} onClick={toggleTheme} />
    </header>
  );
}
