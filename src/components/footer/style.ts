import { makeStyles } from "@mui/styles";

const footerStyle = makeStyles(() => ({
  footerBox: {
    height: "10vh",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: "#1fb5a0",
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    fontSize:"26px",
    fontWeight:"800"
  },
  footerText: {
   
    fontSize:"26px",
    fontWeight:"800"
  },



}));

export default footerStyle;
