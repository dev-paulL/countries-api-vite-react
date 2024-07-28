export default function Searchbar({ onChange, value, isDarkMode }) {
  return (
    <div
      className={`flex flex-row items-center ${
        isDarkMode
          ? "bg-darkBlue text-white"
          : "bg-white text-darkGrayLightModeInput"
      }`}
    >
      <svg
        width="1.2rem"
        height="1.2rem"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-4"
      >
        <path
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke="#858585"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        className={`py-3 px-8 rounded-sm text-xs ${
          isDarkMode
            ? "bg-darkBlue text-white"
            : "bg-white text-darkGrayLightModeInput"
        }`}
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
