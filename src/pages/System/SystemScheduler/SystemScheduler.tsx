import React from "react";
import { Stack, Paper, Typography } from "@mui/material";
import { SystemSchedulerContent } from "~/components/System/SystemScheduler";

const SystemScheduler = () => {
  return (
    <div>
      <Paper elevation={3}>
        <Stack
          spacing={2}
          sx={{
            padding: 3,
          }}
        >
          <Typography variant="h5">시스템 스케쥴러 Uptime</Typography>
          <Typography
            sx={{
              fontSize: "15px",
            }}
          >
            2023-09-20 16:20:13 - 2 months ago
          </Typography>
        </Stack>
      </Paper>
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
            minWidth: "1100px",
          }}
        >
          <Typography variant="h5">시스템 스케쥴러 관리</Typography>
          <SystemSchedulerContent />
        </Stack>
      </Paper>
    </div>
  );
};

export default SystemScheduler;
