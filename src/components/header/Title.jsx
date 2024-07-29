import React from "react";
import { appTitleText } from "../../constants/homePageConstants";

export default function Title() {
  return <h1 className="lg:text-xl md:text-sm text-xs sm:text-xs font-extrabold">{appTitleText}</h1>;
}
