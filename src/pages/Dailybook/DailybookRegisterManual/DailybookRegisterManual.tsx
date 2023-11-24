import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const RELATION = [
  "배우자",
  "아들",
  "딸",
  "사위",
  "며느리",
  "손자",
  "손녀",
  "아버지",
  "어머니",
  "할머니",
  "할아버지",
  "기타",
];

const DailybookRegisterManual = () => {
  return (
    <Paper elevation={3}>
      <Stack
        spacing={2}
        sx={{
          padding: 2,
          overflow: "auto",
          alignItems: "center",
        }}
      >
        <Typography component="h3" variant="h5">
          데일리북 보호자 수기 가입
        </Typography>
        <Paper elevation={3}>
          <Stack
            spacing={2}
            sx={{
              padding: 2,
              alignItems: "center",
            }}
          >
            <Typography
              component="p"
              variant="subtitle1"
              sx={{ textAlign: "center" }}
            >
              모든 항목은 정확히 입력해 주시기 바랍니다. <br />
              전화번호 인증없이 보호자를 지정된 시설에 승인상태로 가입시킵니다.
              <br />
              초기 비밀번호는 개발실로 문의주시기 바랍니다.
            </Typography>

            <Paper elevation={3}>
              <Stack
                spacing={2}
                sx={{
                  width: 500,
                  margin: 2,
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ textAlign: "left", pb: 1 }}
                  >
                    대상 요양 시설을 선택해주세요.
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      대상 요양 시설
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={center}
                      label="대상 요양 시설"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"요양시설1"}>요양시설 1</MenuItem>
                      <MenuItem value={"요양시설2"}>요양시설 2</MenuItem>
                      <MenuItem value={"요양시설3"}>요양시설 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ textAlign: "left", pb: 1 }}
                  >
                    수급자 이름을 입력해주세요.
                  </Typography>
                  <FormControl fullWidth>
                    <TextField id="recipient-name" placeholder="홍길동" />
                  </FormControl>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ textAlign: "left", pb: 1 }}
                  >
                    수급자 성별을 선택해주세요.
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      수급자 성별
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={center}
                      label="수급자 성별"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"남"}>남</MenuItem>
                      <MenuItem value={"여"}>여</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ textAlign: "left", pb: 1 }}
                  >
                    수급자 생년월일을 입력해주세요.
                  </Typography>
                  <FormControl fullWidth>
                    <TextField id="recipient-birth" placeholder="19900101" />
                  </FormControl>
                </Box>
              </Stack>
            </Paper>

            <Paper elevation={3}>
              <Stack
                spacing={2}
                sx={{
                  width: 500,
                  margin: 2,
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ textAlign: "left", pb: 1 }}
                  >
                    보호자 이름을 입력해주세요.
                  </Typography>
                  <FormControl fullWidth>
                    <TextField id="guardian-name" placeholder="홍길동" />
                  </FormControl>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ textAlign: "left", pb: 1 }}
                  >
                    보호자 전화번호를 입력해주세요.
                  </Typography>
                  <FormControl fullWidth>
                    <TextField id="guardian-phone" placeholder="01000000000" />
                  </FormControl>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ textAlign: "left", pb: 1 }}
                  >
                    보호자의 수급자와의 관계를 선택해주세요.
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      보호자의 수급자와의 관계
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={center}
                      label="보호자의 수급자와의 관계"
                      // onChange={handleChange}
                    >
                      {RELATION.map((item, idx) => (
                        <MenuItem key={idx} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ textAlign: "left", pb: 1 }}
                  >
                    이벤트, 마케팅 정보 수신 동의 여부를 선택해주세요.
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      보호자의 정보 수신 동의
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={center}
                      label="보호자의 정보 수신 동의"
                      // onChange={handleChange}
                    >
                      {["동의", "미동의"].map((item, idx) => (
                        <MenuItem key={idx} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
            </Paper>
            <Button variant="contained" size="large" fullWidth>
              등록
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default DailybookRegisterManual;
