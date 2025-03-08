import { Meta, StoryFn } from "@storybook/react";
import { ColorPalette } from "./ColorPalette"; // Assuming the component is in ColorPalette.tsx
import React from "react";

export default {
  title: "Design System/Color Palette",
  component: ColorPalette,
  argTypes: {
    // Add argTypes if needed for customization
  },
} as Meta;

const Template: StoryFn<typeof ColorPalette> = (args) => (
  <ColorPalette {...args} />
);

export const Default = Template.bind({});
Default.args = {}; // No extra args needed for the default view

export const WithCustomTheme = Template.bind({});
WithCustomTheme.args = {
  // Add custom theme properties here if needed for testing theme variations.  For example:
  // theme: {palette: {primary: {main: '#FF0000'}}}
};
