import type { NextComponentType, NextPageContext } from "next";
import { createContext } from "react";

const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => null,
});

export default ThemeContext;
