import React from "react";

export default function CountryDetailsItem({ category, content}) {
  return (
    <li>
      <span className="font-semibold">{category}</span> {content}
    </li>
  );
}
