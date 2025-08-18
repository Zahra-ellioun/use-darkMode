const LightDarkMode = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
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
