import { useState } from "react";

const LightDarkMode = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className="bg-white text-black dark:bg-black dark:text-white"
      data-theme={theme}
    >
      <div className="w-full h-screen">
        <p className="text-5xl"> HELLO WORLD!</p>
        <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black">
          change theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
