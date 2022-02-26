import React from "react";
import { SelectMenu, TabMenu } from "./breakpoint";
import SideTab from "./sideTab/SideTab";
import SelectTab from "./selectTab/SelectTab";
const Tabs = () => {
  return (
    <React.Fragment>
      <TabMenu>
        <SideTab />
      </TabMenu>

      <SelectMenu>
        <SelectTab />
      </SelectMenu>
    </React.Fragment>
  );
};

export default Tabs;
