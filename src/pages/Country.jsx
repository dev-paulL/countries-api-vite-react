import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";

// I used this a lot, less typing 👍
const filterString = (str) => str.toLowerCase().replace(/\s/g, "");

// Country Page
export default function Country() {
  const { countryName } = useParams(); // Extract countryName from the URL
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  // "borders": ["MNE", "GRC", "MKD", "UNK"],
  // Uses axios to fetch all the countries again to be able to find the border countries full name
  useEffect(() => {
    const fetchAllCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get("./data.json");
        const data = response.data;
        setAllCountries(data);
        // Then store the current country data as a separate state.
        const countryData = data.find(
          (c) => filterString(c.name) === filterString(countryName)
        );
        setCountry(countryData);
      } catch (error) {
        // If something goes wrong with the fetching OR the state setting
        console.error("Error fetching country data", error);
        // Keep track of error in the state
        setError("Something went wrong, please try again...");
      } finally {
        // If everything goes right
        setLoading(false);
      }
    };
    fetchAllCountries();
  }, [countryName]);

  // "borders": ["MNE", "GRC", "MKD", "UNK"],
  // Finds the border countries full names in the data fetched above
  const getBorderCountryName = (borderCode) => {
    const borderCountry = allCountries.find((c) => c.alpha3Code === borderCode);
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
      <Link
        to={"/countries-api-react-vite/"}
        className={`self-start py-1 px-8 border-2 justify-center rounded-lg block w-max ml-8 ${
          isDarkMode ? "bg-darkBlue" : "bg-veryLightGrayLightModeBackground"
        }`}
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
          className={`mr-2 inline-block ${
            isDarkMode ? "fill-white" : "fill-veryDarkBlueDarkModeBackground"
          }`}
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
                    to={`/countries-api-react-vite/${filterString(
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
