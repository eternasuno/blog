import { useTheme } from "next-themes";
import useMounted from "./useMounted";

const useDarkMode = () => {
    const { theme, systemTheme, setTheme } = useTheme();
    const { isMounted } = useMounted();

    const isDarkMode = isMounted && theme === "dark" || theme === "system" && systemTheme === "dark";

    const switchDarkMode = () => isMounted &&
        setTheme(theme === "light" ? "dark" : "light");

    return { isDarkMode, switchDarkMode };
};

export default useDarkMode;