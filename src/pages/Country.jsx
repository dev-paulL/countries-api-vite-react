import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { filterString } from "../utils/filterString";
import CountriesContext from "../context/CountriesContext";
import BackButton from "../components/ui/detailspage/BackButton";

// Country Page
export default function Country() {
  const { countryName } = useParams(); // Extract countryName from the URL
  const [ country, setCountry] = useState([]);
  const { countries, loading, error } = useContext(CountriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  const getCountryData = () => {
    return countries.find((c) => filterString(c.name) === filterString(countryName));
  };

  useEffect(() => {
    console.log(country, countryName);
    setCountry(getCountryData);
  }, [countryName]);

  // "borders": ["MNE", "GRC", "MKD", "UNK"],
  // Finds the border countries full names in the data fetched above
  const getBorderCountryName = (borderCode) => {
    const borderCountry = countries.find((c) => c.alpha3Code === borderCode);
    return borderCountry ? borderCountry.name : borderCode;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!country) return <p>Country not found.</p>;

  return (
    <section
      className={`min-h-screen pt-8 ${
        isDarkMode
          ? "bg-veryDarkBlueDarkModeBackground text-white"
          : "bg-veryLightGrayLightModeBackground text-veryDarkBlueLightModeText"
      }`}
    >
      
      <BackButton isDarkMode={isDarkMode} />

      <article
        className={`flex flex-col md:flex-row gap-10 min-h-full items-center p-8`}
      >
        <img
          className="md:w-6/12 lg:w-4/12"
          src={country.flags?.svg || country.flag}
          alt={country.name}
        />

        <ul className="w-full flex flex-col gap-2 lg:grid lg:grid-cols-2 leading-relaxed">
          <h2 className="font-bold text-2xl pb-4  lg:row-start-1">
            {country.name}
          </h2>
          <div className="lg:col-start-1 lg:row-start-2">
            <li>
              <span className="font-semibold">Native Name:</span>{" "}
              {country.nativeName}
            </li>
            <li>
              <span className="font-semibold">Population:</span>{" "}
              {country.population}
            </li>
            <li>
              <span className="font-semibold">Region:</span> {country.region}
            </li>
            <li>
              <span className="font-semibold">Sub Region:</span>{" "}
              {country.subregion}
            </li>
            <li>
              <span className="font-semibold">Capital:</span> {country.capital}
            </li>
          </div>
          <div className="lg:col-start-2 lg:row-start-2 lg:justify-self-start">
            <li className="mt-8 lg:mt-0">
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {country.topLevelDomain}
            </li>
            <li>
              <span className="font-semibold">Currencies:</span>{" "}
              {country.currencies?.map((currency) => currency.name).join(", ")}
            </li>
            <li>
              <span className="font-semibold">Languages:</span>{" "}
              {country.languages?.map((language) => language.name).join(", ")}
            </li>
          </div>

          <div className="lg:col-start-1 lg:row-start-3 lg:col-span-2">
            <h3 className="text-xl font-bold mt-8">Border Countries:</h3>
            <ul className="flex flex-row flex-wrap">
              {country.borders?.length > 0 ? (
                country.borders.map((border) => (
                  <Link
                    key={border}
                    to={`/countries-api-vite-react/${filterString(
                      getBorderCountryName(border)
                    )}`}
                  >
                    <li className="border-2 p-2 m-1">
                      {getBorderCountryName(border)}
                    </li>
                  </Link>
                ))
              ) : (
                <li>No border countries</li>
              )}
            </ul>
          </div>
        </ul>
      </article>
    </section>
  );
}
