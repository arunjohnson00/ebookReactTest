import { Box, Typography, MenuItem, FormControl, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import tabStyle from "../style";

const SelectTab = () => {


  const ebookStore: any = useSelector((ebookData) => {
    return ebookData;
  });

  const dispatch = useDispatch();
  const pageStyle=tabStyle();
  return (
    <Box>
      <Typography className={pageStyle.chooseTitles}>Choose Titles</Typography>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={pageStyle.selectMenu}
          value=""
          onChange={(e) => {
            dispatch({
              type: "tabChange",
              id: e.target.value,
            });
          }}
        >
          <MenuItem value="" selected>
            <em>Select Ebook</em>
          </MenuItem>

          {ebookStore?.data[0]?.map((ebookData: any, index: number) => {
            return (
              <MenuItem value={ebookData.id} key={index}>
                {ebookData.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTab;
