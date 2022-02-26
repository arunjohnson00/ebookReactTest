import { styled } from "@mui/material/styles";

export const SelectMenu = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const TabMenu = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
