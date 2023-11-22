import React, { useState } from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  Stack,
  Button,
  TextField,
} from "@mui/material";

const listItems = [
  {
    id: "1234",
    timestamp: "2023-09-25 10:45:06",
    message_type: "SMS",
    message_to: ["01054758210"],
    message_contents:
      "요청하신 계정 삭제가 완료되었습니다. 조치에 예정보다 시간이 오래걸리게 되어 죄송합니다.",
  },
];

const SystemMessagingHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleGoToLastPage = () => {
    const lastPage = Math.ceil(listItems.length / rowsPerPage) - 1;
    setPage(lastPage);
  };

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
          minWidth: "1060px",
        }}
      >
        <Typography variant="h5">발송 이력</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ background: "#f1f1f1" }}>
                <TableCell>ID</TableCell>
                <TableCell>발송 일시</TableCell>
                <TableCell>발송 유형</TableCell>
                <TableCell>수신번호</TableCell>
                <TableCell>텍스트 내용</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell
                  sx={{
                    padding: "5px 15px 10px 15px",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    placeholder="번호를 입력하세요."
                  />
                </TableCell>
                <TableCell
                  sx={{
                    padding: "5px 15px 10px 15px",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    placeholder="내용을 입력하세요."
                  />
                </TableCell>
              </TableRow>
              {listItems
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.timestamp}</TableCell>
                    <TableCell>{row.message_type}</TableCell>
                    <TableCell>{row.message_to}</TableCell>
                    <TableCell>{row.message_contents}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          direction="row"
          justifyContent="end"
          alignItems="center"
          sx={{
            width: "100%",
          }}
        >
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={listItems.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Button
            variant="contained"
            onClick={handleGoToLastPage}
            sx={{
              height: "30px",
            }}
          >
            Last
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SystemMessagingHistory;
