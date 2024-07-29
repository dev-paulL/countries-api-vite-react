import React from "react";
import { Link } from "react-router-dom";

export default function BackButton({ isDarkMode }) {
  return (
    <Link
      to={"/countries-api-vite-react/"}
      className={`self-start py-1 px-8 border-2 justify-center rounded-lg block w-max ml-8 ${isDarkMode ? "bg-darkBlue" : "bg-veryLightGrayLightModeBackground"}`}
    >
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1rem"
        height="1rem"
        viewBox="0 0 400.004 400.004"
        xmlSpace="preserve"
        className={`mr-2 inline-block ${isDarkMode ? "fill-white" : "fill-veryDarkBlueDarkModeBackground"}`}
      >
        <g>
          <path
            d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
		c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
		c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
		C400.004,190.438,392.251,182.686,382.688,182.686z"
          />
        </g>
      </svg>
      Back
    </Link>
  );
}
