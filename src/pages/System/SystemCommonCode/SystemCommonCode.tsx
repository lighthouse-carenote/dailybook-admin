import React from "react";
import { Stack, Paper, Typography } from "@mui/material";
import { SystemCommonCodeContent } from "~/components/System/SystemCommonCodeContent";

const SystemCommonCode = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        margin: "20px 0 20px 0",
        overflow: "auto",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          padding: 3,
          minWidth: "1130px",
        }}
      >
        <Typography variant="h5">시스템 공통코드 관리</Typography>
        <SystemCommonCodeContent />
      </Stack>
    </Paper>
  );
};

export default SystemCommonCode;
