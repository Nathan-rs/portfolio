const THEME_KEY = "theme"

export function initTheme(defaultTheme) {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : defaultTheme;

    document.documentElement.dataset.theme = theme;

    return theme;
}

export function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.dataset.theme;

    const newTheme = currentTheme === 'dark' ? 'ligth' : 'dark';

    html.dataset.theme = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);

    return newTheme;
}