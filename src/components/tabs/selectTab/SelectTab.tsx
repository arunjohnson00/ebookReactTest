import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import tabStyle from "../style";
import { ThemeProvider } from "@mui/material/styles";
import { muiTitle } from "../../../theme/theme";

const SelectTab = () => {
  const ebookStore: any = useSelector((ebookData) => {
    return ebookData;
  });

  const [getEbook, setEbook] = useState("");

  const handleChange: any = (event: SelectChangeEvent) => {
    setEbook(event.target.value as string);
    dispatch({
      type: "tabChange",
      id: event.target.value,
    });
  };

  const dispatch = useDispatch();
  const pageStyle = tabStyle();
  return (
    <Box>
      <ThemeProvider theme={muiTitle}>
        <Typography className={pageStyle.chooseTitles}>
          Choose Titles
        </Typography>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" style={{ color: "white" }}>
            Select Title
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className={pageStyle.selectMenu}
            value={getEbook}
            label="Age"
            onChange={handleChange}
          >
            {ebookStore?.data.map((ebookData: any, index: number) => {
              return (
                <MenuItem value={ebookData.id} key={index}>
                  {ebookData.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </ThemeProvider>
    </Box>
  );
};

export default SelectTab;
