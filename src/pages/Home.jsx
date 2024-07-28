import Searchbar from "../components/Searchbar";
import SelectRegion from "../components/SelectRegion";
import CountryCard from "../components/CountryCard";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";

export default function Home() {
  /* Define states */
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("default");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get("./data.json");
      const data = response.data;
      setCountries(data);
    } catch (error) {
      console.log("Error fetching countries", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  /* Changes the states when user selects a region in the dropdown menu */
  const handleRegionChange = (region) => {
    setSelectedRegion(region.target.value);
  };

  /* When he types in the search bar */
  const handleTextChange = (text) => {
    setSearchCountry(text.target.value);
  };

  /* Less typing for the filter under (puts string to lower case and removes spaces) 👍 */
  const filterString = (str) => str.toLowerCase().replace(/\s/g, "");
  /* const filterString = (str) => str.toLowerCase().replace(/[^\x20-\x7E]/g, ""); */
  /* Defines what countries to show by filtering selectedRegion (if not default) & compares what the user typed to country names in the json file */
  const displayContent = countries.filter(
    (country) =>
      (selectedRegion === "default" ||
        filterString(country.region).includes(filterString(selectedRegion))) &&
      filterString(country.name).includes(filterString(searchCountry))
  );

  return (
    <>
      <main
        className={`min-h-full min-w-full p-10 ${
          isDarkMode
            ? "bg-veryDarkBlueDarkModeBackground text-white"
            : "bg-veryLightGrayLightModeBackground text-veryDarkBlueLightModeText"
        }`}
      >
        <div className="min-w-full flex justify-between align-center flex-wrap">
          <Searchbar
            isDarkMode={isDarkMode}
            onChange={handleTextChange}
            value={searchCountry}
          />
          <SelectRegion
            isDarkMode={isDarkMode}
            onChange={handleRegionChange}
            value={selectedRegion}
          />
        </div>

        <section
          className={`min-w-full gap-x-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-auto justify-items-center `}
        >
          {displayContent.map((country) => (
            /* Custom component, I checked the .json file at the start of this project and sometimes we dont have flags but flag, and either one or two images paths. I needed to do a bit of filtering here too */

            <Link
              to={filterString(country.name)}
              key={`${country.name + country.capital}`}
            >
              <CountryCard
                img={
                  country.flags
                    ? country.flags.svg || country.flag
                    : country.flag
                }
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                isDarkMode={isDarkMode}
              />
            </Link>
          ))}

          {loading && <p>Loading...</p>}
          {error && <p>Something went wrong, please try again...</p>}
        </section>
      </main>
    </>
  );
}
