import Lottie from "lottie-react";
import React, { useContext } from "react";
import animation_error from "../../../public/animation_error.json";
import ThemeContext from "../../context/ThemeContext";
import BackButton from "./BackButton";

export default function CountryNotFound() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main
      className={`min-h-svh items-center flex flex-col max-w-full p-10 ${
        isDarkMode ? `bg-veryDarkBlueDarkModeBackground text-white` : "bg-veryLightGrayLightModeBackground text-darkBlue"
      }`}
    >
      <BackButton isDarkMode={isDarkMode} />
      <Lottie animationData={animation_error} className="max-w-96 mt-10" />
      <p className="text-2xl mt-2 font-bold text-center">Sorry, we couldn't find this country 😟</p>
    </main>
  );
}
