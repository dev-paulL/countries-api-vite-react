import React from "react";
import CountryDetailsItem from "./CountryDetailsItem";
import { Link } from "react-router-dom";
import { getBorderCountryName } from "../../utils/getBorderCountryName";
import { filterString } from "../../utils/filterString";

export default function CountryDetailsFullContent({ country, countries }) {
  return (
    <ul className="w-full flex flex-col gap-2 lg:grid lg:grid-cols-2 leading-relaxed">
      <h2 className="font-bold text-2xl pb-4  lg:row-start-1">{country.name}</h2>
      <div className="lg:col-start-1 lg:row-start-2">
        <CountryDetailsItem category="Native Name:" content={country.nativeName} />
        <CountryDetailsItem category="Population:" content={country.population} />
        <CountryDetailsItem category="Region:" content={country.region} />
        <CountryDetailsItem category="Sub Region:" content={country.subregion} />
        <CountryDetailsItem category="Capital:" content={country.capital} />
      </div>
      <div className="lg:col-start-2 lg:row-start-2 lg:justify-self-start mt-8 lg:mt-0">
        <CountryDetailsItem category="Top Level Domain:" content={country.topLevelDomain} />
        <CountryDetailsItem category="Currencies:" content={country.currencies?.map((currency) => currency.name).join(", ")} />
        <CountryDetailsItem category="Languages:" content={country.languages?.map((language) => language.name).join(", ")} />
      </div>

      <div className="lg:col-start-1 lg:row-start-3 lg:col-span-2">
        <h3 className="text-xl font-bold mt-8">Border Countries:</h3>
        <ul className="flex flex-row flex-wrap">
          {country.borders?.length > 0 ? (
            country.borders.map((border) => (
              <Link key={border} to={`/${filterString(getBorderCountryName(border, countries))}`}>
                <li className="border-2 p-2 m-1">{getBorderCountryName(border, countries)}</li>
              </Link>
            ))
          ) : (
            <li>No border countries</li>
          )}
        </ul>
      </div>
    </ul>
  );
}
