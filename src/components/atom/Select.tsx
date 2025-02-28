import { MenuItem, Select as MUISelect } from "@mui/material";
import React from "react";

export type SelectProps = {
  label: string;
  items: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
  value: string;
  fullWidth?: boolean;
  id: string;
};

export function Select({
  items,
  label,
  onChange,
  value,
  fullWidth,
  id,
}: SelectProps) {
  return (
    <MUISelect
      label={label}
      value={value}
      fullWidth={fullWidth}
      onChange={(event) => onChange(event.target.value)}
    >
      {items.map((item) => (
        <MenuItem key={`${id}-${item.value}`} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </MUISelect>
  );
}
