
import { Button, Stack }from '@mui/material';
import { BiSave } from "react-icons/bi";

const SaveButton = () => {
  return (
    
    <Stack direction="row" spacing={2}>
    <Button type="submit" variant="contained" startIcon={<BiSave/>} >
     Save Page
    </Button>
 
  </Stack>
  )
}

export default SaveButton