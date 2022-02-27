import { Grid, Typography, IconButton, Stack } from "@mui/material";
import footerStyle from "./style";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CatchingPokemonOutlinedIcon from "@mui/icons-material/CatchingPokemonOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { iconButtonFooter } from "../../theme/theme";
import { ThemeProvider } from "@mui/material/styles";

const Footer = () => {
  const pageStyle = footerStyle();

  return (
    <ThemeProvider theme={iconButtonFooter}>
      <Grid
        item
        xl={12}
        md={12}
        sm={12}
        xs={12}
        className={pageStyle.footerBox}
      >
        <Typography className={pageStyle.footerText} style={{color:'white'}}>
          {" "}
          © Copyright. Arun Johnson
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton color="primary">
            <FacebookOutlinedIcon />
          </IconButton>
          <IconButton color="primary">
            <AlternateEmailOutlinedIcon />
          </IconButton>
          <IconButton color="primary">
            <CatchingPokemonOutlinedIcon />
          </IconButton>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
};

export default Footer;
