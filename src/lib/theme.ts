export const THEME_KEY = "mirbyte-theme";
export type Theme = "modern" | "tkinter";

export function getTheme(): Theme {
	return document.documentElement.dataset.theme === "tkinter" ? "tkinter" : "modern";
}

export function setTheme(theme: Theme) {
	document.documentElement.dataset.theme = theme;
	localStorage.setItem(THEME_KEY, theme);
	document.body.classList.remove("has-custom-cursor");
	window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

export function isTkinter(): boolean {
	return getTheme() === "tkinter";
}
