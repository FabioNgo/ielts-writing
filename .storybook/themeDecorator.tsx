// themeDecorator.tsx
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "../src/theme/theme";

export const withThemeProvider: Decorator = (Story, context) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
