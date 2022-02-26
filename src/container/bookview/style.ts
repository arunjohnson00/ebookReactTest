import { makeStyles } from "@mui/styles";

const bookviewStyle = makeStyles(() => ({
  viewContainer: {
    display: "flex",
    bgcolor: "background.paper",
    borderRadius: 1,
    height: "100vh",
    paddingTop: "5px",
  },

  sidebarOuter: {
    backgroundColor: "#1fb5a0",
  },

  sidebarContainer: {
    backgroundColor: "rgb(0 0 0 / 95%)",
    height: "100%",
    borderRight: "1px dashed rgba(145, 158, 171, 0.24)",
    color:'white'
  },

  mainOuter: {
    backgroundColor:'#020908',
    paddingLeft:'0px'
    
  },

  mainContainer: {
    backgroundColor: "none",
    height: "100vh",
    paddingTop: "20px",
    marginLeft:'20px',
    marginRight:'20px',
    marginTop:'50px'
  },

  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "10px",
    alignItems: "center",
    background: '#020908',
    paddingBottom:'30px',
  },

  bodyContainer:{
    background:'lightgrey',
    height: '47vh',
    padding:'20px',
    marginBottom:'50px',
    boxShadow:'#1fb5a061 5px 5px 28px',
   // borderRadius:'50px 0px 50px 0px',
 },

  buttonContainer: {
    display: "flex",
    justifyContent: "right",
    alignContent: "center",
    paddingTop: "10px",
    marginTop: "20px",
  },

  navLink:{
    textDecoration:'none'
  }
}));

export default bookviewStyle;
