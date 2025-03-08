import React from "react";
import { Box, Typography, Paper, styled, List, ListItem } from "@mui/material";
import { useTheme } from "./theme";

const ColorBox = styled(Paper)(({ theme, color }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: color,
  marginBottom: theme.spacing(1),
}));

const Swatch = styled("div")(({ color }) => ({
  width: "30px",
  height: "30px",
  marginRight: "10px",
  borderRadius: "5px",
  backgroundColor: color,
}));

export function ColorPalette() {
  const { theme, setMode, mode } = useTheme();

  const colors = {
    primary: [
      { name: "Primary", value: theme.palette.primary.main },
      { name: "On Primary", value: theme.palette.onPrimary.main },
      { name: "Primary Container", value: theme.palette.primary.container },
      {
        name: "On Primary Container",
        value: theme.palette.onPrimary.container,
      },
      { name: "Primary Fixed", value: theme.palette.primary.fixed },
      { name: "On Primary Fixed", value: theme.palette.onPrimary.fixed },
      { name: "Primary Fixed Dim", value: theme.palette.primary.fixedDim },
      {
        name: "On Primary Fixed Variant",
        value: theme.palette.onPrimary.fixedVariant,
      },
    ],
    secondary: [
      { name: "Secondary", value: theme.palette.secondary.main },
      { name: "On Secondary", value: theme.palette.onSecondary.main },
      { name: "Secondary Container", value: theme.palette.secondary.container },
      {
        name: "On Secondary Container",
        value: theme.palette.onSecondary.container,
      },
      { name: "Secondary Fixed", value: theme.palette.secondary.fixed },
      { name: "On Secondary Fixed", value: theme.palette.onSecondary.fixed },
      { name: "Secondary Fixed Dim", value: theme.palette.secondary.fixedDim },
      {
        name: "On Secondary Fixed Variant",
        value: theme.palette.onSecondary.fixedVariant,
      },
    ],
    tertiary: [
      { name: "Tertiary", value: theme.palette.tertiary.main },
      { name: "On Tertiary", value: theme.palette.onTertiary.main },
      { name: "Tertiary Container", value: theme.palette.tertiary.container },
      {
        name: "On Tertiary Container",
        value: theme.palette.onTertiary.container,
      },
      { name: "Tertiary Fixed", value: theme.palette.tertiary.fixed },
      { name: "On Tertiary Fixed", value: theme.palette.onTertiary.fixed },
      { name: "Tertiary Fixed Dim", value: theme.palette.tertiary.fixedDim },
      {
        name: "On Tertiary Fixed Variant",
        value: theme.palette.onTertiary.fixedVariant,
      },
    ],
    error: [
      { name: "Error", value: theme.palette.error.main },
      { name: "On Error", value: theme.palette.onError.main },
      { name: "Error Container", value: theme.palette.error.container },
      { name: "On Error Container", value: theme.palette.onError.container },
    ],
    surface: [
      { name: "Surface Dim", value: theme.palette.surface.dim },
      { name: "Surface", value: theme.palette.surface.main },
      { name: "Surface Inverse", value: theme.palette.inverse.surface },
      { name: "On Surface Inverse", value: theme.palette.inverse.onSurface },
      { name: "Inverse Primary", value: theme.palette.inverse.primary },
      {
        name: "Surface Container Lowest",
        value: theme.palette.surface.containerLowest,
      },
      {
        name: "Surface Container Low",
        value: theme.palette.surface.containerLow,
      },
      { name: "Surface Container", value: theme.palette.surface.container },
      {
        name: "Surface Container High",
        value: theme.palette.surface.containerHigh,
      },
      {
        name: "Surface Container Highest",
        value: theme.palette.surface.containerHighest,
      },
      { name: "On Surface", value: theme.palette.onSurface.main },
      { name: "On Surface Variant", value: theme.palette.onSurface.variant },
      { name: "Outline Variant", value: theme.palette.outline.variant },
      { name: "Outline", value: theme.palette.outline.main },
      { name: "Scrim", value: theme.palette.scrim },
      { name: "Shadow", value: theme.palette.shadow },
    ],
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ marginBottom: 2, textAlign: "right" }}>
        <Typography
          variant="button"
          onClick={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
          sx={{
            cursor: "pointer",
            padding: 1,
            backgroundColor: mode === "light" ? "grey.200" : "grey.800",
            borderRadius: 1,
            display: "inline-block",
          }}
        >
          Switch to {mode === "light" ? "Dark" : "Light"} Theme
        </Typography>
      </Box>
      {Object.entries(colors).map(([groupName, colorDefinitions]) => (
        <Box key={groupName} sx={{ marginBottom: 2 }}>
          <Typography
            variant="h6"
            sx={{ marginBottom: 1, textTransform: "capitalize" }}
          >
            {groupName}
          </Typography>
          <List>
            {colorDefinitions.map((color) => (
              <ListItem
                key={color.name}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ColorBox
                  color={color.value}
                  elevation={1}
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    marginRight: 2,
                  }}
                >
                  <Swatch color={color.value} />
                </ColorBox>
                <Box>
                  <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    {color.name}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {color.value}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}
