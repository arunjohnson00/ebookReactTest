
import { Formik, Form } from "formik";
import { TextField, FormControl, Grid } from "@mui/material";
//import { EditSchema } from "./helper";;
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import formStyle from "./style";
import SaveButton from "../savebutton/SaveButton";
import BackButton from "../backbutton/BackButton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {muiButton,muiOutlinedInput,muiButtonback,} from "../../../theme/theme";
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';




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


  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const  [convertedContent, setConvertedContent] = useState(null);


  const handleEditorChange = (state:any) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML:any = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    

  }



  return (
  
    <Formik
      initialValues={{
        title: props[0]?.title ?? "",
        content: props[0]?.content ?? convertedContent,
        id:props[0]?.id ?? Math.floor(Math.random()*100000)
      }}
      
      // validationSchema={EditSchema}
      enableReinitialize={true}
      onSubmit={(values: any) => {
       
 
if(!props[0]?.title || !props[0]?.content ){


  dispatch({
    type: "Submit",
    payload: values,
  });


  const oldInfo = JSON.parse(localStorage.getItem('data') || '[]');

   
const clean = Array.from(new Set([...oldInfo, values]))

//console.log(clean)

localStorage.setItem(
 'data',
 JSON.stringify(clean)
);
      navigate("/");

}
else{

  const oldInfo = JSON.parse(localStorage.getItem('data') || '[]');
 const filterObj= oldInfo.filter((ele:any)=> ele.id == props[0]?.id)
   
 //var index = oldInfo.findIndex(function(index:any){
  //return index.id === filterObj[0].id;
//})


const extractedArray = oldInfo.map((newArray:any) => newArray.id !== filterObj[0].id ? newArray : values);

//console.log(extractedArray ,"hello")

localStorage.setItem(
  'data',
  JSON.stringify(extractedArray)
 );
       navigate("/");
  }
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
                    editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleEditorChange}
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
