import { Badge, styled } from "@mui/material";
import { getTypoStyle, theme } from "../../../theme/theme";
export const StyledBadge = styled(Badge)`
  & .MuiBadge-dot {
    width: 6px;
    height: 6px;
    min-width: 6px;
  }
  & .MuiBadge-standard {
    min-width: 16px;
    height: 16px;
    background-color: ${theme.palette.error.main};
    padding: 0 4px;
    color: ${theme.palette.onError.main};
    ${getTypoStyle("labelSmall")}
  }
`;
