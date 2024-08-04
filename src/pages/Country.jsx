import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { getCountryData } from "../utils/getCountryData";
import CountriesContext from "../context/CountriesContext";
import BackButton from "../components/detailspage/BackButton";
import Loading from "../components/Loading";
import CountryNotFound from "../components/detailspage/CountryNotFound";
import CountryDetailsFullContent from "../components/detailspage/CountryDetailsFullContent";
import ErrorPage from "../components/ErrorPage";


// Country Page
export default function Country() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const { countries, loading, error } = useContext(CountriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    setCountry(getCountryData(countries, countryName));
  }, [countryName, countries]);

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;
  if (!country) return <CountryNotFound />;

  return (
    <main>
      <section
        className={`min-h-screen pt-8 ${isDarkMode ? "bg-veryDarkBlueDarkModeBackground text-white" : "bg-veryLightGrayLightModeBackground text-veryDarkBlueLightModeText"}`}
      >
        <BackButton isDarkMode={isDarkMode} />

        <article className={`flex flex-col md:flex-row gap-10 min-h-full items-center p-8`}>
          <img className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md md:w-6/12 lg:w-4/12" src={country.flags?.svg || country.flag} alt={country.name} />
          <CountryDetailsFullContent country={country} countries={countries} />
        </article>
      </section>
    </main>
  );
}
