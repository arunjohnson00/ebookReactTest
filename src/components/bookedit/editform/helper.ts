import * as Yup from "yup";

export const EditSchema = Yup.object().shape({
  ebookTitle: Yup.string()
    .min(2, "Title Too Short")
    .max(50, "Title Too Long!")
    .required("No Title Found"),

  ebookBody: Yup.string()
    .min(3, "Description Too Short!")
    .max(700, " Description Too Long!")
    .required("No Content Found"),
});
