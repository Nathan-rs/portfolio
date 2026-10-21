const THEME_KEY = "theme"

export function initTheme(defaultTheme) {
    const theme = localStorage.getItem(THEME_KEY) ?? defaultTheme

    document.documentElement.dataset.theme = theme
}

export function toggleTheme() {
    const html = document.documentElement
    const theme = html.dataset.theme

    const newTheme = theme === 'dark' ? 'ligth' : 'dark'

    html.dataset.theme = newTheme
    localStorage.setItem(THEME_KEY, newTheme)
}