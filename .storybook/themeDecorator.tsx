// themeDecorator.tsx
import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { myTheme } from "../src/theme/theme";

export const withThemeProvider: Decorator = (Story, context) => (
  <ThemeProvider theme={myTheme}>
    <Story {...context} />
  </ThemeProvider>
);
