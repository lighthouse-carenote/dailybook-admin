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
    name: "AUTH_DEREG_GURD_TYPES",
    key: "001",
    value: "나에게 맞는 시설을 추천해주지 않아요",
    created: `2022-01-01 00:00:00 (2 years ago)`,
    updated: `2022-01-01 00:00:00 (2 years ago)`,
  },
];

const SystemCommonCodeContent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleGoToLastPage = () => {
    const lastPage = Math.ceil(listItems.length / rowsPerPage) - 1;
    setPage(lastPage);
  };

  return (
    <>
      <Typography
        sx={{
          padding: "15px 0 0 0",
          color: "#2196f3",
          fontSize: "15px",
        }}
      >
        {`${listItems.length}개 항목이 검색됨`}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#f1f1f1" }}>
              <TableCell>ID</TableCell>
              <TableCell>코드 이름</TableCell>
              <TableCell>코드 키</TableCell>
              <TableCell>코드 값</TableCell>
              <TableCell>생성 일시</TableCell>
              <TableCell>수정 일시</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell
                sx={{
                  padding: "5px 15px 10px 15px",
                }}
              >
                <TextField
                  id="standard-basic"
                  variant="standard"
                  placeholder="코드 이름을 입력하세요."
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
                  placeholder="코드 키를 입력하세요."
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
                  placeholder="코드 값을 입력하세요."
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            {listItems
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.key}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.created}</TableCell>
                  <TableCell>{row.updated}</TableCell>
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
          rowsPerPageOptions={[15, 25]}
          component="div"
          count={listItems.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
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
    </>
  );
};

export default SystemCommonCodeContent;
