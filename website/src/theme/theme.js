import { createContext } from "react";

export const themes = {
    light: {
      color: "#00E9E1",
    },
    dark: {
      color: "#191970",
    },
    status: true
  };

export const ThemeContext = createContext(themes);
  