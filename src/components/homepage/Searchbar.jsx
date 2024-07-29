import SearchIcon from "./SearchIcon";

export default function Searchbar({ onChange, value, isDarkMode }) {
  return (
    <div className={`flex flex-row items-center ${isDarkMode ? "bg-darkBlue text-white" : "bg-white text-darkGrayLightModeInput"}`}>
      <SearchIcon width={"1.2rem"} height={"1.2rem"} className={"ml-4"} stroke={"#858585"} />

      <input
        className={`py-3 px-8 rounded-sm text-xs ${isDarkMode ? "bg-darkBlue text-white" : "bg-white text-darkGrayLightModeInput"}`}
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
        value={value}
        aria-label="Search for a country"
      />
    </div>
  );
}
