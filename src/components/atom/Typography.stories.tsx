import { Meta, StoryFn } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";
import React from "react";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: [
        "labelSmall",
        "labelLarge",
        "bodySmall",
        "bodyMedium",
        "bodyLarge",
        "titleSmall",
        "titleMedium",
        "titleLarge",
        "headlineSmall",
        "headlineMedium",
        "displaySmall",
        "displayMedium",
        "displayLarge",
      ],
      control: { type: "select" },
    },
  },
} as Meta<TypographyProps>;

type StoryProps = TypographyProps & {
  text: string;
};

const Template: StoryFn<StoryProps> = (args) => <Typography {...args} />;

export const LabelSmall = Template.bind({});
LabelSmall.args = {
  variant: "labelSmall",
  text: "Label Small",
};

export const LabelLarge = Template.bind({});
LabelLarge.args = {
  variant: "labelLarge",
  text: "Label Large",
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: "bodySmall",
  text: "Body Small",
};

export const BodyMedium = Template.bind({});
BodyMedium.args = {
  variant: "bodyMedium",
  text: "Body Medium",
};

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  variant: "bodyLarge",
  text: "Body Large",
};

export const TitleSmall = Template.bind({});
TitleSmall.args = {
  variant: "titleSmall",
  text: "Title Small",
};

export const TitleMedium = Template.bind({});
TitleMedium.args = {
  variant: "titleMedium",
  text: "Title Medium",
};

export const TitleLarge = Template.bind({});
TitleLarge.args = {
  variant: "titleLarge",
  text: "Title Large",
};

export const HeadlineSmall = Template.bind({});
HeadlineSmall.args = {
  variant: "headlineSmall",
  text: "Headline Small",
};

export const HeadlineMedium = Template.bind({});
HeadlineMedium.args = {
  variant: "headlineMedium",
  text: "Headline Medium",
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  variant: "displaySmall",
  text: "Display Small",
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
  variant: "displayMedium",
  text: "Display Medium",
};

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  variant: "displayLarge",
  text: "Display Large",
};
