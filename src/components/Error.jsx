import React from "react";
import { errorDefaultText } from "../constants/homePageConstants";

export default function Error({ message }) {
  return <p>{errorDefaultText + " " + message}</p>;
}
