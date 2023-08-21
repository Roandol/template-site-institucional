function listenerButtonTheme() {
    const buttonToggle = document.getElementById("themeToggle");
    const imgToggle = buttonToggle.children[0];

    buttonToggle.addEventListener("click", toggleTheme)

    function toggleTheme() {
        let isDarkMode = window.__theme === "dark";
        let modeSelected = isDarkMode ? "light" : "dark";

        toggleImg(modeSelected);
        window.__setPreferredTheme(modeSelected);
    }

    function toggleImg(mode) {
        imgToggle.src = `images/${mode}-mode.png`;
    }
}

export default listenerButtonTheme;