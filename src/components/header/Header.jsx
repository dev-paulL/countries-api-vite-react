import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import DarkModeButton from './DarkModeButton'

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`max-w-full flex justify-between items-center py-5 px-5 ${
        isDarkMode
          ? "bg-darkBlue text-white"
          : "bg-white text-veryDarkBlueLightModeText"
      } `}
    >
      <h1 className="lg:text-xl md:text-sm text-xs sm:text-xs font-extrabold">
        Where in the world?
      </h1>

      <DarkModeButton isDarkMode={isDarkMode} onClick={toggleTheme} />
    </header>
  );
}
