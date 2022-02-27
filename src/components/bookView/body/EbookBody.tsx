import { Typography } from "@mui/material";
import ebookBodyStyle from "./style";

import DOMPurify from "dompurify";

const EbookBody = ({ content }: any) => {
  const bodyStyle = ebookBodyStyle();

  const createMarkup = (html: any) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      <Typography className={bodyStyle.ebookBody}></Typography>
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(content)}
      ></div>
    </>
  );
};

export default EbookBody;
