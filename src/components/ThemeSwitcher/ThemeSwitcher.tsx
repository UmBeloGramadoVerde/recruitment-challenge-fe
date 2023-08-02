import { useState, useEffect } from "react";
import { Button } from "@/ui/button";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<"dark" | "light">();

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) =>
      prevDarkMode === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    const prevDarkMode = localStorage.getItem("theme");
    console.debug("prevDarkMode", prevDarkMode);
    if (prevDarkMode === "light" || prevDarkMode === "dark") {
      setDarkMode(prevDarkMode);
    } else {
      setDarkMode("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (darkMode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Button onClick={toggleTheme} className="px-3 py-1" variant="outline">
      {darkMode === "light" ? (
        <div>
          <Image
            width={16}
            height={16}
            src="/images/dark.svg"
            alt="dark mode icon"
          />
        </div>
      ) : (
        <div>
          <Image
            width={16}
            height={16}
            src="/images/light.svg"
            alt="light mode icon"
          />
        </div>
      )}
    </Button>
  );
};

export default ThemeSwitcher;
