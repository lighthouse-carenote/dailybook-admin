import React from "react";
import Menu from "../Menu";
import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
      }}
    >
      <Menu />
      <Box
        sx={{
          width: "calc(100vw - 300px)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
