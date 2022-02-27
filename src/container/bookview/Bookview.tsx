import { Box, Grid } from "@mui/material";
import bookviewStyle from "./style";
import Tabs from "../../components/tabs/Tabs";
import AddButton from "../../components/bookView/addnew/AddButton";
import EbookTitle from "../../components/bookView/title/EbookTitle";
import EditButton from "../../components/bookView/edit/EditButton";
import EbookBody from "../../components/bookView/body/EbookBody";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { iconButton, muiButton } from "../../theme/theme";
import Footer from "../../components/footer/Footer";




const Bookview = () => {
  const pageStyle = bookviewStyle();


  const ebookStore: any = useSelector((ebookData) => {
    return ebookData;
  });

  

 




  
     
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tileEbook = ebookStore?.data[0]?.filter(
    (ebookData: any) => ebookData.id === ebookStore.tabChange
  );
 console.log(tileEbook);

  const handleEdit = () => {
    navigate("/edit", { state: tileEbook });
  };

  return (
    <>
      <Grid container spacing={2} className={pageStyle.viewContainer}>
        <Grid
          item
          xl={2}
          md={3}
          sm={12}
          xs={12}
          className={pageStyle.sidebarOuter}
        >
          <Box className={pageStyle.sidebarContainer}>
            <Tabs />
          </Box>
        </Grid>
        {ebookStore?.data?.[0]
          .filter((ebookData: any, index:number) => ebookData.id === ebookStore.tabChange)
          .map((ebookTitle: any, index: number) => {
           // console.log(ebookTitle);
            return (
              <Grid
                item
                xl={10}
                md={9}
                sm={12}
                xs={12}
                className={pageStyle.mainOuter}
                key={index}
              >
                <Box className={pageStyle.mainContainer}>
                  <Grid item xs={12} className={pageStyle.titleContainer}>
                    <EbookTitle {...ebookTitle} />

                    <ThemeProvider theme={iconButton}>
                      <EditButton onClick={handleEdit} />
                    </ThemeProvider>
                  </Grid>

                  <Grid item xs={12} className={pageStyle.bodyContainer}>
                    <EbookBody {...ebookTitle} />
                  </Grid>

                  <Grid item xs={12} className={pageStyle.buttonContainer}>
                    <Link to="/add" className={pageStyle.navLink}>
                      <ThemeProvider theme={muiButton}>
                        <AddButton />
                      </ThemeProvider>
                    </Link>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
           <Footer />
      </Grid>

     
    </>
  );
};

export default Bookview;
