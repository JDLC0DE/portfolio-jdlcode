export const setInitialTheme = `
    (function() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = window.localStorage.getItem('theme');
        const theme = storedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.classList.add(theme);
    })();
  `
