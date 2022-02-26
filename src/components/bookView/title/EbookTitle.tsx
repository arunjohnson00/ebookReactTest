import { Typography } from "@mui/material";
import ebookTitleStyle from "./stye";
import { useSelector, useDispatch } from "react-redux";

const EbookTitle = ({title}:any) => {
  const titleStyle = ebookTitleStyle();


  return (
         <Typography
              className={titleStyle.ebookTitle}
              variant="h3"
              component="h2"
             >
              {title}
            </Typography>
        
 
  );
};

export default EbookTitle;
