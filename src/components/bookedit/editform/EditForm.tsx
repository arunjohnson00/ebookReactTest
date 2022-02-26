
import { Formik, Form } from "formik";
import { TextField, FormControl, Grid } from "@mui/material";
//import { EditSchema } from "./helper";
import { EditorState,RawDraftContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import formStyle from "./style";
import SaveButton from "../savebutton/SaveButton";
import BackButton from "../backbutton/BackButton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {muiButton,muiOutlinedInput,muiButtonback,} from "../../../theme/theme";




const EditForm = (props: any) => {
  const pageStyle = formStyle();
  const navigate = useNavigate();

  const ebookStore: any = useSelector((ebookData) => {
    return ebookData;
  });

  const dispatch = useDispatch();

  const onEditorStateChange = (editorState: any, setFieldValue: any) => {
    setFieldValue("content", editorState);

  };

  return (
    <Formik
      initialValues={{
        title: props[0]?.title ?? "",
        content: props[0]?.content ?? EditorState.createEmpty(),
        id:Math.floor(Math.random()*100000)
      }}
      
      // validationSchema={EditSchema}
      enableReinitialize={true}
      onSubmit={(values: any) => {
       
 


    dispatch({
      type: "Submit",
      payload: values,
    });


    const oldInfo = JSON.parse(localStorage.getItem('data') || '[]');

     
  const clean = Array.from(new Set([...oldInfo, values]))

console.log(clean)

localStorage.setItem(
   'data',
   JSON.stringify(clean)
);
        navigate("/");

  }
 

      }
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
        isSubmitting,
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
                <Editor
                  //editorState={values?.content}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onChange={(editorState) =>
                    onEditorStateChange(editorState, setFieldValue)
                  }
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
