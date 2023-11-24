import * as React from "react";
import {
  Button,
  Stack,
  Typography,
  Paper,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Send } from "@mui/icons-material";

interface SystemPushMessageContentProps {
  messageInfo: { title: string; image: string }[];
  titles: string[];
}

const SystemPushMessageContent = ({
  messageInfo,
  titles,
}: SystemPushMessageContentProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        padding: 2,
        overflow: "auto",
      }}
    >
      {messageInfo.map((item, index) => {
        return (
          <Stack
            key={index}
            sx={{
              width: "50%",

              minWidth: "400px",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                minHeight: "880px",
                padding: 3,
              }}
            >
              <Typography component="h3" variant="h5">
                {`${item.title} App Push Message 전송`}
              </Typography>
              <Typography
                sx={{
                  fontSize: "4em",
                  textAlign: "center",
                  padding: "40px 0 40px 0",
                }}
              >
                {item.image}
              </Typography>
              <Stack spacing={1}>
                <InputLabel htmlFor="user-number" sx={{ color: "#000000" }}>
                  Device token
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                />
                {!index && (
                  <>
                    <InputLabel
                      htmlFor="title-select"
                      sx={{ color: "#000000" }}
                    >
                      Titles
                    </InputLabel>
                    <Select defaultValue={0} id="title-select">
                      {titles.map((item, index) => (
                        <MenuItem key={index} value={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </>
                )}
                <InputLabel htmlFor="user-number" sx={{ color: "#000000" }}>
                  Title
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="제목을 직접 입력해주세요."
                />
                <InputLabel htmlFor="user-number" sx={{ color: "#000000" }}>
                  Body
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="내용을 직접 입력해주세요."
                />

                <InputLabel htmlFor="content" sx={{ color: "#000000" }}>
                  Data
                </InputLabel>
                <TextField
                  id="content"
                  multiline
                  rows={4}
                  placeholder="데이터를 직접 입력해주세요. (json format)"
                />
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  fontSize: "20px",
                  padding: "50px 0 20px 0",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  data example
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Send />}
                  sx={{
                    width: "110px",
                    fontSize: "17px",
                  }}
                >
                  send
                </Button>
              </Stack>
            </Paper>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default SystemPushMessageContent;
