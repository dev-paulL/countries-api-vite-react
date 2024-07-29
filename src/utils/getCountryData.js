import { filterString } from "./filterString";

export const getCountryData = (countries, countryName) => {
  return countries.find((c) => filterString(c.name) === filterString(countryName));
};
