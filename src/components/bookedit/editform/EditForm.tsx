import { Formik, Form } from "formik";
import { TextField, FormControl, Grid } from "@mui/material";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import formStyle from "./style";
import SaveButton from "../savebutton/SaveButton";
import BackButton from "../backbutton/BackButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  muiButton,
  muiOutlinedInput,
  muiButtonback,
} from "../../../theme/theme";

import { RichTextEditor } from "@mantine/rte";

const EditForm = (props: any) => {
  const pageStyle = formStyle();
  const navigate = useNavigate();

  const handleContentChange: any = (e: any, setFieldValue: any) => {
    setFieldValue("content", e);
  };
  const dispatch = useDispatch();
  const ebookStore: any = useSelector((ebookData) => {
    return ebookData;
  });
  return (
    <Formik
      initialValues={{
        title: props[0]?.title ?? "",
        content: props[0]?.content ?? "",
        id: props[0]?.id ?? Math.floor(Math.random() * 100000),
      }}
      enableReinitialize={true}
      onSubmit={(values: any) => {
        if (!props[0]?.title || !props[0]?.content) {
          dispatch({
            type: "Submit",
            payload: values,
          });

          const oldInfo = JSON.parse(localStorage.getItem("data") || "{}");

          console.log(oldInfo?.length, "hello");
          if (oldInfo?.length === undefined) {
            localStorage.setItem("data", JSON.stringify([values]));
          } else {
            const clean = [...oldInfo, values];
            localStorage.setItem("data", JSON.stringify(clean));
          }

          navigate("/");
        } else {
          const oldInfo = JSON.parse(localStorage.getItem("data") || "[]");
          const filterObj = oldInfo.filter((ele: any) => ele.id !== values.id);

          const extractedArray: any = [...filterObj, values];
          localStorage.setItem("data", JSON.stringify(extractedArray));

          dispatch({
            type: "Edit",
            payload: values,
          });

          navigate("/");
        }
      }}
    >
      {}
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
      }) => (
        <Form>
          <Grid item xs={12} className={pageStyle.titleField}>
            <FormControl fullWidth>
              <ThemeProvider theme={muiOutlinedInput}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="title"
                  onChange={handleChange}
                  value={values?.title}
                  placeholder="Page Title"
                />
              </ThemeProvider>
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
            </FormControl>
          </Grid>
          <Grid
            item
            xl={12}
            md={12}
            sm={12}
            xs={12}
            className={pageStyle.titleField}
          >
            <FormControl fullWidth>
              <div className={pageStyle.editor}>
                <RichTextEditor
                  value={values?.content}
                  onChange={(e: any) => handleContentChange(e, setFieldValue)}
                  className={pageStyle.editor}
                />
              </div>
            </FormControl>
          </Grid>

          <Grid
            item
            xl={12}
            md={12}
            sm={12}
            xs={12}
            className={pageStyle.buttonGrid}
          >
            <ThemeProvider theme={muiButton}>
              <SaveButton />
            </ThemeProvider>

            <Link to="/" className={pageStyle.linkStyle}>
              <ThemeProvider theme={muiButtonback}>
                <BackButton />
              </ThemeProvider>
            </Link>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
