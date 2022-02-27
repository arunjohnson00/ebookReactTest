import { makeStyles } from "@mui/styles";

const formStyle = makeStyles(() => ({
  titleField: {
    paddingBottom: "30px",
    backgroundColor: "none",
  },
  editor: {
    border: "1px solid gray",
    minHeight: "40vh",
    margin: "20px",
    backgroundColor: "white",
    color: "black",
    padding: "20px",
  },

  buttonGrid: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "12vh",
  },

  linkStyle: {
    textDecoration: "none",
  },
}));

export default formStyle;
