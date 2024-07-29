export default function CountryCard({
  img,
  name,
  population,
  region,
  capital,
  isDarkMode,
}) {
  return (
    <article
      className={`grid col-start-auto my-5 min-w-48 rounded-md ${
        isDarkMode
          ? "bg-darkBlue text-white"
          : "bg-white text-veryDarkBlueLightModeText"
      }`}
    >
      <img
        src={img}
        alt={`${name} flag`}
        className="min-h-48 max-h-48 object-fill min-w-64 max-w-64 justify-self-stretch object-center rounded-t-md"
      />

      <div className="pt-2 pb-4 px-4">
        <h2 className="text-l font-bold my-2">{name}</h2>
        <p className="text-xs">
          <span className="font-semibold pr-1">Population:</span>
          {population}
        </p>
        <p className="text-xs">
          <span className="font-semibold pr-1">Region:</span>
          {region}
        </p>
        <p className="text-xs">
          <span className="font-semibold pr-1">Capital:</span>
          {capital}
        </p>
      </div>
    </article>
  );
}
