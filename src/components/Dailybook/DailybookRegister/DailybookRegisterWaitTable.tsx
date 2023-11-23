import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function createData(
  id: string,
  date: string,
  approve: boolean,
  reject: boolean,
  userName: string,
  serial: string,
  kind: string,
  name: string,
  address: string,
  file: string,
  viewFile: string
) {
  return {
    id,
    date,
    approve,
    reject,
    userName,
    serial,
    kind,
    name,
    address,
    file,
    viewFile,
  };
}

const rows = [
  createData(
    "123",
    "2023-01-01",
    false,
    true,
    "아무개",
    "123",
    "복지 시설",
    "제주 아무개 장애인 시설",
    "경기도 성남시 분당구 황새울로 360번길 21, 8층",
    "fileurl",
    "fileurl"
  ),
  createData(
    "345",
    "2023-01-01",
    false,
    true,
    "아무개",
    "123",
    "복지 시설",
    "제주 아무개 장애인 시설",
    "경기도 성남시 분당구 황새울로 360번길 21, 8층",
    "fileurl",
    "fileurl"
  ),
  createData(
    "346",
    "2023-01-01",
    false,
    true,
    "아무개",
    "123",
    "복지 시설",
    "제주 아무개 장애인 시설",
    "경기도 성남시 분당구 황새울로 360번길 21, 8층",
    "fileurl",
    "fileurl"
  ),
  createData(
    "347",
    "2023-01-01",
    false,
    true,
    "아무개",
    "123",
    "복지 시설",
    "제주 아무개 장애인 시설",
    "경기도 성남시 분당구 황새울로 360번길 21, 8층",
    "fileurl",
    "fileurl"
  ),
  createData(
    "556",
    "2023-01-01",
    false,
    true,
    "아무개",
    "123",
    "복지 시설",
    "제주 아무개 장애인 시설",
    "경기도 성남시 분당구 황새울로 360번길 21, 8층",
    "fileurl",
    "fileurl"
  ),
];

const DailybookRegisterWaitTable = () => {
  return (
    <Paper elevation={3}>
      <Stack
        spacing={2}
        sx={{
          padding: 2,
          overflow: "auto",
        }}
      >
        <Typography component="h3" variant="h5">
          시설장 요청 리스트 - 대기중
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">요청 일시</TableCell>
                <TableCell align="center">승인</TableCell>
                <TableCell align="center">거절</TableCell>
                <TableCell align="center">사용자 이름</TableCell>
                <TableCell align="center">시설 번호</TableCell>
                <TableCell align="center">시설 유형</TableCell>
                <TableCell align="center">시설 이름</TableCell>
                <TableCell align="center">시설 주소</TableCell>
                <TableCell align="center">첨부 파일</TableCell>
                <TableCell align="center">첨부 보기</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.approve}</TableCell>
                  <TableCell align="center">{row.reject}</TableCell>
                  <TableCell align="center">{row.userName}</TableCell>
                  <TableCell align="center">{row.serial}</TableCell>
                  <TableCell align="center">{row.kind}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{row.file}</TableCell>
                  <TableCell align="center">{row.viewFile}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  );
};

export default DailybookRegisterWaitTable;
