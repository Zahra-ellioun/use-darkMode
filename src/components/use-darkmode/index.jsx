import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light " : "dark");
  };

  return (
    <div
      data-mode={theme}
      className=" bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="w-full h-screen">
        <p className="text-5xl"> HELLO WORLD!</p>
        <button
          onClick={handleDarkMode}
          className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black"
        >
          change theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
