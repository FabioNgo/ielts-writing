import React from "react";
import { BadgeProps as BaseBadgeProps } from "@mui/material";
import { StyledBadge } from "./Badge.style";

export type BadgeProps = {
  children: BaseBadgeProps["children"];
  badgeContent: BaseBadgeProps["badgeContent"];
  showZero: BaseBadgeProps["showZero"];
  max: BaseBadgeProps["max"];
  variant: "small" | "large";
};

export function Badge({
  max,
  badgeContent,
  showZero,
  children,
  variant,
}: BadgeProps) {
  return (
    <StyledBadge
      badgeContent={badgeContent}
      max={max}
      variant={variant === "small" ? "dot" : "standard"}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      showZero={showZero}
    >
      {children}
    </StyledBadge>
  );
}
