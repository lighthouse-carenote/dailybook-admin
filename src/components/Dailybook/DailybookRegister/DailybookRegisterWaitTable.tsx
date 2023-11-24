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
  id: number,
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

const rows = Array.from({ length: 22 }, (_, idx) =>
  createData(
    idx + 1,
    `2023-11-11 16:14:40`,
    false,
    true,
    "아무개",
    `123${idx + 1}`,
    "복지 시설",
    "제주 아무개 장애인 시설",
    "경기도 성남시 분당구 황새울로 360번길 21, 8층",
    "fileurl",
    "fileurl"
  )
);

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

        <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
          <Table
            sx={{ minWidth: 1600, overflow: "auto" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {[
                  "ID",
                  "요청 일시",
                  "승인",
                  "거절",
                  "사용자 이름",
                  "시설 번호",
                  "시설 유형",
                  "시설 이름",
                  "시설 주소",
                  "첨부 파일",
                  "첨부 보기",
                ].map((item) => (
                  <TableCell key={item} align="center">
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {[
                    row.id,
                    row.date,
                    row.approve,
                    row.reject,
                    row.userName,
                    row.serial,
                    row.kind,
                    row.name,
                    row.address,
                    row.file,
                    row.viewFile,
                  ].map((item, idx) => (
                    <TableCell key={idx} align="center">
                      {item}
                    </TableCell>
                  ))}
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
