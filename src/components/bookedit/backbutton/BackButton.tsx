import { Button, Stack } from "@mui/material";
import { BsArrowRightSquare } from "react-icons/bs";

const BackButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        type="button"
        variant="contained"
        startIcon={<BsArrowRightSquare />}
      >
        Back To Book
      </Button>
    </Stack>
  );
};

export default BackButton;
