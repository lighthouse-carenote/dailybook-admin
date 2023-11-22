import * as React from "react";
import {
  Button,
  Stack,
  Typography,
  Paper,
  TextField,
  InputLabel,
} from "@mui/material";
import { Delete, Send } from "@mui/icons-material";

const messageInfo = [
  { image: "💬", type: "sms" },
  { image: "✉️", type: "lms" },
];

const SystemMessagingContent = () => {
  return (
    <Paper elevation={3}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          padding: 2,
          overflow: "auto",
        }}
      >
        {messageInfo.map((item) => {
          return (
            <Stack
              key={item.type}
              sx={{
                width: "50%",
                minWidth: "400px",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                }}
              >
                <Typography component="h3" variant="h5">
                  {`${item.type.toUpperCase()} 발송`}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "4em",
                    textAlign: "center",
                    padding: "50px 0 50px 0",
                  }}
                >
                  {item.image}
                </Typography>
                <Stack spacing={1}>
                  <InputLabel htmlFor="user-number" sx={{ color: "#000000" }}>
                    <b>수신자 번호</b>
                  </InputLabel>
                  <TextField id="outlined-basic" variant="outlined" />
                  <InputLabel htmlFor="content" sx={{ color: "#000000" }}>
                    <b>내용</b>
                  </InputLabel>
                  <TextField
                    id="content"
                    multiline
                    rows={4}
                    placeholder="내용을 입력하세요."
                  />

                  <Typography
                    sx={{
                      padding: "10px 0 50px 0",
                      textAlign: "end",
                    }}
                  >
                    {`${item.type} - 0자 입력`}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    fontSize: "20px",
                    padding: "10px 0 10px 0",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<Delete />}
                    color="error"
                    sx={{
                      width: "100px",
                      fontSize: "17px",
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Send />}
                    sx={{
                      width: "100px",
                      fontSize: "17px",
                    }}
                  >
                    발송
                  </Button>
                </Stack>
              </Paper>
            </Stack>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default SystemMessagingContent;
