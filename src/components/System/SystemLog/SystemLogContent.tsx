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
} from "@mui/material";

const listItems = [
  {
    id: "847592",
    username: "devadmin",
    accepted: "2023-11-24 16:05:00",
    method: "GET",
    path: `/system/log/api/`,
    query_string: `pageIndex=1&pageSize...`,
    responded: "",
    status: "",
    timediff: "4",
    remote_addr: "1.237.195.205",
    user_agent: "Mozilla/5.0 (Macinto...",
  },
];

const SystemLogContent = () => {
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
          padding: "30px 0 0 0",
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
              <TableCell>User Name</TableCell>
              <TableCell>Accepted</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Path</TableCell>
              <TableCell>Query String</TableCell>
              <TableCell>Responded</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ms</TableCell>
              <TableCell>Remote Addr</TableCell>
              <TableCell>User Agent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listItems
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.accepted}</TableCell>
                  <TableCell>{row.method}</TableCell>
                  <TableCell>{row.path}</TableCell>
                  <TableCell>{row.query_string}</TableCell>
                  <TableCell>{row.responded}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.timediff}</TableCell>
                  <TableCell>{row.remote_addr}</TableCell>
                  <TableCell>{row.user_agent}</TableCell>
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

export default SystemLogContent;
