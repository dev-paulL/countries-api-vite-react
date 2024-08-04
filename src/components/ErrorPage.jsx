import React from "react";
import { errorDefaultText } from "../constants/homePageConstants";

export default function ErrorPage({ message }) {
  return <p>{errorDefaultText + " " + message}</p>;
}
