import React from "react";
import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FiPlus } from "react-icons/fi";

const AddButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="text" color="info" endIcon={<FiPlus />}>
        Add New Page
      </Button>
    </Stack>
  );
};

export default AddButton;
