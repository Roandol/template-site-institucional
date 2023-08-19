function listenerButtonTheme() {
    const buttonToggle = document.getElementById("themeToggle");

    buttonToggle.addEventListener("click", toggleTheme)

    function toggleTheme() {
        let isDarkMode = window.__theme === "dark";

        window.__setPreferredTheme(isDarkMode ? "light" : "dark");
    }
}

export default listenerButtonTheme;