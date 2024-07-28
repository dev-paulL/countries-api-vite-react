export default function SelectRegion({ onChange, value, isDarkMode }) {
  return (
    <select
      className={`mt-4 sm:mt-0 text-sm p-2 rounded-md ${
        isDarkMode
          ? "bg-darkBlue text-white"
          : "bg-white text-veryDarkBlueLightModeText"
      }`}
      name="select-region"
      id="select-region"
      onChange={onChange}
      value={value}
    >
      <option value="default">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
