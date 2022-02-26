import { Typography } from '@mui/material'
import titleStyle from './style'

const EditTitle = () => {

const pageStyle=titleStyle();    
  return (
<Typography variant="h5" className={pageStyle.pageTitle}>Page Title</Typography>
  )
}

export default EditTitle