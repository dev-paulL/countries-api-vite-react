// "borders": ["MNE", "GRC", "MKD", "UNK"],
// Finds the border countries full names
export const getBorderCountryName = (borderCode, countries) => {
  const borderCountry = countries.find((c) => c.alpha3Code === borderCode);
  return borderCountry ? borderCountry.name : borderCode;
};
