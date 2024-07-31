import SearchIcon from "./SearchIcon";

export default function Searchbar({ onChange, value, isDarkMode }) {
  return (
    <div className={`flex shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex-row rounded-sm items-center ${isDarkMode ? "bg-darkBlue text-white" : "bg-white text-darkGrayLightModeInput"}`}>
      <SearchIcon width={"1.2rem"} height={"1.2rem"} className={"ml-4"} stroke={"#858585"} />

      <input
        className={`py-4 px-10 rounded-sm text-sm ${isDarkMode ? "bg-darkBlue text-white" : "bg-white text-darkGrayLightModeInput"}`}
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
        value={value}
        aria-label="Search for a country"
      />
    </div>
  );
}
