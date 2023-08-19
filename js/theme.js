import listenerButtonTheme from "./listenerButtonTheme.js";

function initTheme() {
    let preferredTheme;

    function setTheme(newTheme) {
        window.__theme = newTheme;
        preferredTheme = newTheme;
        document.body.className = newTheme;
    }

    preferredTheme = localStorage.getItem('theme');
    window.__setPreferredTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
    setTheme(preferredTheme || 'dark');

    listenerButtonTheme();
}

export default initTheme;