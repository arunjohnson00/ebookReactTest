import React from "react";
import {ToggleButtonGroup, ToggleButton} from "@mui/material";
import { ThemeProvider} from '@mui/material/styles';
import tabStyle from "../style";
import { useSelector, useDispatch } from "react-redux";
import { toggleButton } from "../../../theme/theme";

const SideTab = () => {
  const style = tabStyle();

  const ebookStore: any = useSelector((ebookData) => {
    return ebookData;
  });

  const dispatch = useDispatch();

 //console.log(ebookStore.tabActive);

 

  return (

<ThemeProvider theme={toggleButton}>
    <ToggleButtonGroup
    orientation="vertical"
    color="info"
    value={ebookStore.tabActive}
    fullWidth
    exclusive
    className={style.tabGroup}
    onChange={(event: React.MouseEvent<HTMLElement>, nextView: string)=>{

        dispatch({
            type: "tabActive",
            tabClick: nextView,
          });

         // console.log( nextView)
    }}
  >
       {ebookStore?.data?.[0]?.map((ebookData: any, index: number) => {
        return (
        <ToggleButton value={ebookData.title} 
                       className={style.tabItem}
                       aria-label="quilt"  
                       key={index}  
                       onClick={() => {
            dispatch({
              type: "tabClick",
              id: ebookData.id,
            });
          // console.log(ebookData.id)
          }}>
       {ebookData.title}
      </ToggleButton>
        );
    })}
    </ToggleButtonGroup>
    </ThemeProvider>
  );
};

export default SideTab;
