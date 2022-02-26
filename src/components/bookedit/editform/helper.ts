
import * as Yup from 'yup';


export const EditSchema = Yup.object().shape({
     
    ebookTitle: Yup.string()
      .min(2, 'Title Too Short')
      .max(50, 'Title Too Long!')
      .required('Please Fill Title'),

    ebookBody: Yup.string()
      .min(2, 'Description Too Short!')
      .max(500, ' Description Too Long!')
      .required('Required')
    
  });

  