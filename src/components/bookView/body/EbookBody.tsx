import { Typography } from "@mui/material";
import ebookBodyStyle from "./style";
import { useSelector, useDispatch } from "react-redux";
import DOMPurify from 'dompurify';

const EbookBody = ({content}:any) => {
  const bodyStyle = ebookBodyStyle();

  console.log(content?.blocks?.[0]?.text)

  const createMarkup = (html:any) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
  return (
   <>
            <Typography  className={bodyStyle.ebookBody}>{
            //content?.blocks?.[0]?.text
            }
            </Typography>
            <div className="preview" dangerouslySetInnerHTML={createMarkup(content?.blocks?.[0]?.text)}></div>
   </>
  );
};

export default EbookBody;
