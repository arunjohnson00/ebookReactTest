import { IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { BiEdit } from "react-icons/bi";

const EditButton = ({onClick}:any) => {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton size="large" onClick={onClick}>
        <BiEdit fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

export default EditButton;
