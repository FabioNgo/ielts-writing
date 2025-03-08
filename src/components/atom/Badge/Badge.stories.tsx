import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Badge } from "./Badge"; // Adjust path as needed
import MailIcon from "@mui/icons-material/Mail";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "large"],
    },
    showZero: { control: "boolean" },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const SmallBadge = Template.bind({});
SmallBadge.args = {
  children: <MailIcon color="action" />,
  badgeContent: 1,
  showZero: true,
  variant: "small",
};

export const LargeBadge = Template.bind({});
LargeBadge.args = {
  children: <MailIcon color="action" />,
  badgeContent: 10,
  showZero: true,
  variant: "large",
};

export const ZeroBadge = Template.bind({});
ZeroBadge.args = {
  children: <MailIcon color="action" />,
  badgeContent: 0,
  showZero: true,
  variant: "large",
};

export const MaxValueBadge = Template.bind({});
MaxValueBadge.args = {
  children: <MailIcon color="action" />,
  badgeContent: 999,
  max: 99,
  showZero: true,
  variant: "large",
};
