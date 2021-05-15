import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useDarkMode = () => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const isDarkMode = isMounted && theme === "dark";

    const switchDarkMode = () => isMounted &&
        setTheme(theme === "light" ? "dark" : "light");

    return { isDarkMode, switchDarkMode };
};

export default useDarkMode;