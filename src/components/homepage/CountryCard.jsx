
export default function CountryCard({ img, name, population, region, capital, isDarkMode }) {
  return (
    <article
      className={`shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] grid col-start-auto my-5 min-w-72 w-72 h-80 rounded-md hover:scale-105 transition ease-in-out delay-150 ${
        isDarkMode ? "bg-darkBlue text-white" : "bg-white text-veryDarkBlueLightModeText"
      }`}
    >
      
        <img
          loading="lazy"
          src={img}
          alt={`${name} flag`}
          className="min-h-48 max-h-48 h-48 object-fill max-w-72 w-72 justify-self-stretch object-center rounded-t-md"
          width="18rem"
          height="12rem"
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
