import { makeStyles } from "@mui/styles";

const tabStyle = makeStyles(() => ({
  tabGroup: {
    height:'100vh',
    dispaly:'flex',
    color:'white'
    
    
  },

  tabItem:{
    borderRadius:"8px",
    marginBottom:'10px',
    
  },
   
   chooseTitles:{
   fontWeight:"800px",
   color:"#1fb5a0",
   padding:'20px'
  },

  selectMenu:{
   border:"4px solid #1fb5a0",
   background:"#cdc6c6"

  }
}));

export default tabStyle;
