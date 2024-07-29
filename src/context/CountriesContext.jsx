import { createContext, useEffect, useState } from "react";
import { useFetchAllCountries } from "../hooks/useFetchAllCountries";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const { error, allCountries, loading } = useFetchAllCountries();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(allCountries);
  }, [allCountries]);

  return <CountriesContext.Provider value={{ countries, setCountries, error, loading }}>{children}</CountriesContext.Provider>;
};

export default CountriesContext;
