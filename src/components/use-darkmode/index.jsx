import { useEffect, useState } from "react";

const LightDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const themeLocalStorage = localStorage.getItem("theme");
    return themeLocalStorage;
  });

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light " : "dark");
  };
  console.log(theme);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.log(e.massage);
    }
  }, [theme]);

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
