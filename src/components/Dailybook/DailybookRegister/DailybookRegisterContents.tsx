import { Box } from "@mui/material";
import React from "react";
import DailybookRegisterWaitTable from "./DailybookRegisterWaitTable";
import DailybookRegisterAllTable from "./DailybookRegisterAllTable";

const DailybookRegisterContents = () => {
  return (
    <Box>
      <DailybookRegisterWaitTable />
      <DailybookRegisterAllTable />
    </Box>
  );
};

export default DailybookRegisterContents;
