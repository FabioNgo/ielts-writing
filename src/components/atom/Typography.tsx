import { FontVariant } from "@/components/atom/token";
import {
  Typography as BaseTypography,
  TypographyProps as BaseTypographyProps,
} from "@mui/material";
import React from "react";

export type TypographyProps = {
  variant: FontVariant;
  text: string;
};

const fontVariantMapping: Record<FontVariant, BaseTypographyProps["variant"]> =
  {
    labelSmall: "overline",
    labelLarge: "button",
    bodySmall: "caption",
    bodyMedium: "body2",
    bodyLarge: "body1",
    titleSmall: "subtitle2",
    titleMedium: "subtitle1",
    titleLarge: "h6",
    headlineSmall: "h5",
    headlineMedium: "h4",
    displaySmall: "h3",
    displayMedium: "h2",
    displayLarge: "h1",
  };

export function Typography({ variant, text }: TypographyProps) {
  return (
    <BaseTypography variant={fontVariantMapping[variant]}>
      {text}
    </BaseTypography>
  );
}
