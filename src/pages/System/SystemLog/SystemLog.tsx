import React from "react";
import { Stack, Paper, Typography } from "@mui/material";
import { SystemLogContent } from "~/components/System/SystemLog";

const SystemLog = () => {
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
          minWidth: "1300px",
        }}
      >
        <Typography variant="h5">시스템 HTTP Log 관리</Typography>
        <Typography
          sx={{
            fontSize: "15px",
          }}
        >
          사용자별 통계는 시스템 운영자에게 문의하시기 바랍니다.
        </Typography>
        <SystemLogContent />
      </Stack>
    </Paper>
  );
};

export default SystemLog;
