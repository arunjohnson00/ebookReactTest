import { Typography } from "@mui/material";
import ebookBodyStyle from "./style";
import { useSelector, useDispatch } from "react-redux";

const EbookBody = ({content}:any) => {
  const bodyStyle = ebookBodyStyle();

  console.log(content?.blocks?.[0]?.text)

  return (
   
            <Typography  className={bodyStyle.ebookBody}>

              {content?.blocks?.[0]?.text}

            </Typography>
   
  );
};

export default EbookBody;
