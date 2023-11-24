import React, { useState } from "react";
import {
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
    id: "1",
    name: "cron_send_notification",
    executor: "default",
    trigger:
      "cron[year='*', month='*', day='*', week='*', day_of_week='*', hour='9-17', minute='*/5', second='0']",
    next_run_time: `2023-11-24 16:20:00
    (in 5 minutes)`,
  },
];

const SystemSchedulerContent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#f1f1f1" }}>
              <TableCell>ID</TableCell>
              <TableCell>Function Name</TableCell>
              <TableCell>Executor</TableCell>
              <TableCell>Trigger</TableCell>
              <TableCell>Next Run Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listItems
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.executor}</TableCell>
                  <TableCell>{row.trigger}</TableCell>
                  <TableCell>{row.next_run_time}</TableCell>
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
          rowsPerPageOptions={[5, 15, 25]}
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

export default SystemSchedulerContent;
