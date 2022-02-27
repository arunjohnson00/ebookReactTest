import { Grid } from "@mui/material";
import EditForm from "../../components/bookedit/editform/EditForm";
import EditTitle from "../../components/bookedit/title/EditTitle";
import bookaddStyle from "./style";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Bookadd = () => {
  const pageStyle = bookaddStyle();
  const location: any = useLocation();
  const payload = location.state;
  return (
    <Grid container spacing={2} className={pageStyle.viewContainer}>
      <Grid item xl={12} md={12} sm={12} xs={12}>
        <EditTitle />
        <EditForm {...payload} />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Bookadd;
