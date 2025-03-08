import { IThemeOptions } from "@mui/material/styles";
import { createTheme, css, CustomTheme, ThemeOptions } from "@mui/material";
import { FontStyleOptions } from "@mui/material/styles/createTypography";
import {
  argbFromHex,
  Hct,
  hexFromArgb,
} from "@material/material-color-utilities";
import { useMemo, useState } from "react";

const BASED_FONT_SIZE = 14;

function getTonalColor(hct: Hct, tonalLevel: number): string {
  return hexFromArgb(Hct.from(hct.hue, hct.chroma, tonalLevel).toInt());
}

declare module "@mui/material/styles" {
  type IPalette = ThemeOptions["palette"] & {
    primary: {
      main: string;
      container: string;
      fixed: string;
      fixedDim: string;
    };
    secondary: {
      main: string;
      container: string;
      fixed: string;
      fixedDim: string;
    };
    tertiary: {
      main: string;
      container: string;
      fixed: string;
      fixedDim: string;
    };
    onPrimary: {
      main: string;
      container: string;
      fixed: string;
      fixedVariant: string;
    };
    onSecondary: {
      main: string;
      container: string;
      fixed: string;
      fixedVariant: string;
    };
    onTertiary: {
      main: string;
      container: string;
      fixed: string;
      fixedVariant: string;
    };
    error: {
      main: string;
      container: string;
    };
    onError: {
      main: string;
      container: string;
    };
    surface: {
      main: string;
      dim: string;
      bright: string;
      containerLowest: string;
      containerLow: string;
      container: string;
      containerHigh: string;
      containerHighest: string;
    };
    onSurface: {
      main: string;
      variant: string;
    };
    outline: {
      main: string;
      variant: string;
    };
    inverse: {
      surface: string;
      onSurface: string;
      primary: string;
    };
    scrim: string;
    shadow: string;
  };
  type IFontStylesOptions = FontStyleOptions & {
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    fontWeight: number;
  };

  type ITypography = ThemeOptions["typography"] & {
    bodySmall: IFontStylesOptions;
    bodyMedium: IFontStylesOptions;
    bodyLarge: IFontStylesOptions;
    labelSmall: IFontStylesOptions;
    labelMedium: IFontStylesOptions;
    labelLarge: IFontStylesOptions;
    titleSmall: IFontStylesOptions;
    titleMedium: IFontStylesOptions;
    titleLarge: IFontStylesOptions;
    headlineSmall: IFontStylesOptions;
    headlineMedium: IFontStylesOptions;
    headlineLarge: IFontStylesOptions;
    displaySmall: IFontStylesOptions;
    displayMedium: IFontStylesOptions;
    displayLarge: IFontStylesOptions;
  };

  interface IThemeOptions extends ThemeOptions {
    typography?: ITypography;
    palette?: IPalette;
    fonts?: {
      base: string;
      mono: string;
    };
  }

  interface CustomTheme {
    palette: IPalette;
    typography: ITypography;
  }

  export function createTheme(options: IThemeOptions): CustomTheme;
}
const SOURCE_COLOR = Hct.fromInt(argbFromHex("#63A002"));
const PRIMARY_COLOR = Hct.from(SOURCE_COLOR.hue, 48, 60);
const SECONDARY_COLOR = Hct.from(SOURCE_COLOR.hue, 16, 60);
const TERTIARY_COLOR = Hct.from(SOURCE_COLOR.hue + 60, 24, 60);
const ERROR_COLOR = Hct.from(25, 81, 60);
const NEUTRAL_COLOR = Hct.from(SOURCE_COLOR.hue, 4, 60);
const NEUTRAL_VARIANT_COLOR = Hct.from(SOURCE_COLOR.hue, 8, 60);

export const lightPalette: NonNullable<IThemeOptions["palette"]> = {
  primary: {
    main: getTonalColor(PRIMARY_COLOR, 40),
    container: getTonalColor(PRIMARY_COLOR, 90),
    fixed: getTonalColor(PRIMARY_COLOR, 90),
    fixedDim: getTonalColor(PRIMARY_COLOR, 80),
  },
  secondary: {
    main: getTonalColor(SECONDARY_COLOR, 40),
    container: getTonalColor(SECONDARY_COLOR, 90),
    fixed: getTonalColor(SECONDARY_COLOR, 90),
    fixedDim: getTonalColor(SECONDARY_COLOR, 80),
  },
  tertiary: {
    main: getTonalColor(TERTIARY_COLOR, 40),
    container: getTonalColor(TERTIARY_COLOR, 90),
    fixed: getTonalColor(TERTIARY_COLOR, 90),
    fixedDim: getTonalColor(TERTIARY_COLOR, 80),
  },
  onPrimary: {
    main: getTonalColor(PRIMARY_COLOR, 100),
    container: getTonalColor(PRIMARY_COLOR, 30),
    fixed: getTonalColor(PRIMARY_COLOR, 10),
    fixedVariant: getTonalColor(PRIMARY_COLOR, 30),
  },
  onSecondary: {
    main: getTonalColor(SECONDARY_COLOR, 100),
    container: getTonalColor(SECONDARY_COLOR, 30),
    fixed: getTonalColor(SECONDARY_COLOR, 10),
    fixedVariant: getTonalColor(SECONDARY_COLOR, 30),
  },
  onTertiary: {
    main: getTonalColor(TERTIARY_COLOR, 100),
    container: getTonalColor(TERTIARY_COLOR, 30),
    fixed: getTonalColor(TERTIARY_COLOR, 10),
    fixedVariant: getTonalColor(TERTIARY_COLOR, 30),
  },
  error: {
    main: getTonalColor(ERROR_COLOR, 40),
    container: getTonalColor(ERROR_COLOR, 90),
  },
  onError: {
    main: getTonalColor(ERROR_COLOR, 100),
    container: getTonalColor(ERROR_COLOR, 30),
  },
  surface: {
    main: getTonalColor(NEUTRAL_COLOR, 98),
    dim: getTonalColor(NEUTRAL_COLOR, 87),
    container: getTonalColor(NEUTRAL_COLOR, 94),
    bright: getTonalColor(NEUTRAL_COLOR, 98),
    containerLowest: getTonalColor(NEUTRAL_COLOR, 100),
    containerLow: getTonalColor(NEUTRAL_COLOR, 96),
    containerHigh: getTonalColor(NEUTRAL_COLOR, 92),
    containerHighest: getTonalColor(NEUTRAL_COLOR, 90),
  },
  onSurface: {
    main: getTonalColor(NEUTRAL_COLOR, 10),
    variant: getTonalColor(NEUTRAL_VARIANT_COLOR, 30),
  },
  outline: {
    main: getTonalColor(NEUTRAL_VARIANT_COLOR, 50),
    variant: getTonalColor(NEUTRAL_VARIANT_COLOR, 80),
  },
  inverse: {
    surface: getTonalColor(NEUTRAL_COLOR, 20),
    onSurface: getTonalColor(NEUTRAL_VARIANT_COLOR, 95),
    primary: getTonalColor(PRIMARY_COLOR, 80),
  },
  scrim: getTonalColor(NEUTRAL_COLOR, 0),
  shadow: getTonalColor(NEUTRAL_COLOR, 0),
};

export const darkPalette: NonNullable<IThemeOptions["palette"]> = {
  primary: {
    main: getTonalColor(PRIMARY_COLOR, 80),
    container: getTonalColor(PRIMARY_COLOR, 30),
    fixed: getTonalColor(PRIMARY_COLOR, 90),
    fixedDim: getTonalColor(PRIMARY_COLOR, 80),
  },
  secondary: {
    main: getTonalColor(SECONDARY_COLOR, 80),
    container: getTonalColor(SECONDARY_COLOR, 30),
    fixed: getTonalColor(SECONDARY_COLOR, 90),
    fixedDim: getTonalColor(SECONDARY_COLOR, 80),
  },
  tertiary: {
    main: getTonalColor(TERTIARY_COLOR, 80),
    container: getTonalColor(TERTIARY_COLOR, 30),
    fixed: getTonalColor(TERTIARY_COLOR, 90),
    fixedDim: getTonalColor(TERTIARY_COLOR, 80),
  },
  onPrimary: {
    main: getTonalColor(PRIMARY_COLOR, 20),
    container: getTonalColor(PRIMARY_COLOR, 90),
    fixed: getTonalColor(PRIMARY_COLOR, 10),
    fixedVariant: getTonalColor(PRIMARY_COLOR, 30),
  },
  onSecondary: {
    main: getTonalColor(SECONDARY_COLOR, 20),
    container: getTonalColor(SECONDARY_COLOR, 90),
    fixed: getTonalColor(SECONDARY_COLOR, 10),
    fixedVariant: getTonalColor(SECONDARY_COLOR, 30),
  },
  onTertiary: {
    main: getTonalColor(TERTIARY_COLOR, 20),
    container: getTonalColor(TERTIARY_COLOR, 90),
    fixed: getTonalColor(TERTIARY_COLOR, 10),
    fixedVariant: getTonalColor(TERTIARY_COLOR, 30),
  },
  error: {
    main: getTonalColor(ERROR_COLOR, 80),
    container: getTonalColor(ERROR_COLOR, 30),
  },
  onError: {
    main: getTonalColor(ERROR_COLOR, 20),
    container: getTonalColor(ERROR_COLOR, 90),
  },
  surface: {
    main: getTonalColor(NEUTRAL_COLOR, 6),
    dim: getTonalColor(NEUTRAL_COLOR, 6),
    container: getTonalColor(NEUTRAL_COLOR, 12),
    bright: getTonalColor(NEUTRAL_COLOR, 24),
    containerLowest: getTonalColor(NEUTRAL_COLOR, 4),
    containerLow: getTonalColor(NEUTRAL_COLOR, 10),
    containerHigh: getTonalColor(NEUTRAL_COLOR, 17),
    containerHighest: getTonalColor(NEUTRAL_COLOR, 22),
  },
  onSurface: {
    main: getTonalColor(NEUTRAL_COLOR, 90),
    variant: getTonalColor(NEUTRAL_VARIANT_COLOR, 80),
  },
  outline: {
    main: getTonalColor(NEUTRAL_VARIANT_COLOR, 60),
    variant: getTonalColor(NEUTRAL_VARIANT_COLOR, 30),
  },
  inverse: {
    surface: getTonalColor(NEUTRAL_COLOR, 90),
    onSurface: getTonalColor(NEUTRAL_VARIANT_COLOR, 20),
    primary: getTonalColor(PRIMARY_COLOR, 40),
  },
  scrim: getTonalColor(NEUTRAL_COLOR, 0),
  shadow: getTonalColor(NEUTRAL_COLOR, 0),
};

const createCustomTheme = (mode: "dark" | "light") => {
  return createTheme({
    fonts: {
      base: "Roboto",
      mono: "Roboto Mono",
    },
    palette: mode === "light" ? lightPalette : darkPalette,
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: BASED_FONT_SIZE,
      bodySmall: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        fontWeight: 400,
      },
      caption: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        fontWeight: 400,
      },
      bodyMedium: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: 400,
      },
      body2: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: 400,
      },
      bodyLarge: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontWeight: 400,
      },
      body1: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontWeight: 400,
      },
      labelSmall: {
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
        fontWeight: 500,
      },
      overline: {
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
        fontWeight: 500,
      },
      labelMedium: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
        fontWeight: 400,
      },
      labelLarge: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: 500,
      },
      button: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: 500,
      },
      titleSmall: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: 500,
      },
      titleMedium: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        fontWeight: 500,
      },
      titleLarge: {
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
        fontWeight: 400,
      },
      h6: {
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
        fontWeight: 400,
      },
      headlineSmall: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 400,
      },
      h5: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 400,
      },
      headlineMedium: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: 400,
      },
      h4: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: 400,
      },
      headlineLarge: {
        fontSize: 32,
        lineHeight: 40,
        fontWeight: 400,
      },
      displaySmall: {
        fontSize: 36,
        lineHeight: 44,
        fontWeight: 400,
      },
      h3: {
        fontSize: 36,
        lineHeight: 44,
        fontWeight: 400,
      },
      displayMedium: {
        fontSize: 45,
        lineHeight: 52,
        fontWeight: 400,
      },
      h2: {
        fontSize: 45,
        lineHeight: 52,
        fontWeight: 400,
      },
      displayLarge: {
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
        fontWeight: 400,
      },
      h1: {
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
        fontWeight: 400,
      },
    },
    spacing: 8, // Default spacing unit in rem
    shape: {
      borderRadius: 4,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 840,
        lg: 1200,
        xl: 1600,
      },
    },
  });
};

export const lightTheme = createCustomTheme("light");
export const darkTheme = createCustomTheme("dark");
export const defaultTheme = createTheme();
let theme: CustomTheme = lightTheme;
export { theme };
export function useTheme() {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const newTheme = useMemo(() => {
    const customTheme = createCustomTheme(mode);
    theme = customTheme;
    return customTheme;
  }, [mode]);
  return {
    theme: newTheme,
    setMode,
    mode,
  };
}

export function getTypoStyle(typo: keyof CustomTheme["typography"]) {
  const { typography } = theme;
  const style = typography[typo];
  return css`
    font-size: ${style.fontSize}px;
    font-weight: ${style.fontWeight};
    line-height: ${style.lineHeight};
    letter-spacing: ${style.letterSpacing}px;
  `;
}
