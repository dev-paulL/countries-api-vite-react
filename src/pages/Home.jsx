import Searchbar from "../components/homepage/Searchbar";
import SelectRegion from "../components/homepage/SelectRegion";
import CountryCard from "../components/homepage/CountryCard";
import { useState, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import CountriesContext from "../context/CountriesContext";
import { filterString } from "../utils/filterString";
import Loading from "../components/Loading";

export default function Home() {
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("default");
  const { isDarkMode } = useContext(ThemeContext);
  const { countries, loading, error } = useContext(CountriesContext);

  const handleRegionChange = (region) => {
    setSelectedRegion(region.target.value);
  };

  const handleTextChange = (text) => {
    setSearchCountry(text.target.value);
  };

  const displayContent = useMemo(() => {
    return countries.filter(
      (country) =>
        (selectedRegion === "default" || filterString(country.region).includes(filterString(selectedRegion))) && filterString(country.name).includes(filterString(searchCountry))
    );
  }, [countries, selectedRegion, searchCountry]);

  return (
    <main
      className={`min-h-screen min-w-full p-10 ${
        isDarkMode ? "bg-veryDarkBlueDarkModeBackground text-white" : "bg-veryLightGrayLightModeBackground text-veryDarkBlueLightModeText"
      }`}
    >
      <div className="min-w-full flex justify-between align-center flex-wrap">
        <Searchbar isDarkMode={isDarkMode} onChange={handleTextChange} value={searchCountry} />
        <SelectRegion isDarkMode={isDarkMode} onChange={handleRegionChange} value={selectedRegion} />
      </div>

      {loading && <Loading />}
      {error && <Error />}

      {!loading && !error && (
        <section className={`min-w-full gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center mx-auto`}>
          {displayContent.map((country) => (
            /* Sometimes we dont have flags but flag, and either one or two images paths. I needed to do a bit of filtering here too */
            <Link to={filterString(country.name)} key={`${country.name + country.capital}`}>
              <CountryCard
                img={country.flags ? country.flags.svg || country.flag : country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                isDarkMode={isDarkMode}
              />
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
