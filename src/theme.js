const THEME_KEY = "theme"

export function initTheme(defaultTheme) {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : defaultTheme;

    applyTheme(theme);

    return theme;
}

export function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);

    updateThemeIcon(theme);
}

export function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.dataset.theme;

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
}

function updateThemeIcon(theme) {
    const button = document.querySelector("#theme-toggle");
    const icon = document.querySelector("#theme-icon");

    if (!button || !icon) return;

    const isDark = theme === "dark";

    button.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");

    icon.innerHTML = isDark
        ? `
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
        `
        : `
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6.5 6.5 0 0 0 8.268 8.268c.344-.215.825-.003.803.401"></path>
        `;
}