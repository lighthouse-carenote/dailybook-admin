import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Chip, Stack, Typography } from "@mui/material";

interface Column {
  id:
    | "id"
    | "date"
    | "approveDate"
    | "userName"
    | "approve"
    | "rejectReason"
    | "serial"
    | "kind"
    | "name"
    | "address"
    | "file"
    | "viewFile";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "date", label: "요청 일시", minWidth: 150, align: "center" },
  {
    id: "approveDate",
    label: "승인 일시",
    minWidth: 150,
    align: "center",
  },
  {
    id: "userName",
    label: "사용자 이름",
    minWidth: 120,
    align: "center",
  },
  {
    id: "approve",
    label: "승인 여부",
    minWidth: 80,
    align: "center",
  },
  {
    id: "rejectReason",
    label: "거절 사유",
    minWidth: 100,
    align: "left",
  },
  {
    id: "serial",
    label: "시설 번호",
    minWidth: 100,
    align: "center",
  },
  {
    id: "kind",
    label: "시설 유형",
    minWidth: 100,
    align: "center",
  },
  {
    id: "name",
    label: "시설 이름",
    minWidth: 120,
    align: "left",
  },
  {
    id: "address",
    label: "시설 주소",
    minWidth: 120,
    align: "center",
  },
  {
    id: "file",
    label: "첨부 파일",
    minWidth: 40,
    align: "center",
  },
  {
    id: "viewFile",
    label: "첨부 보기",
    minWidth: 100,
    align: "center",
  },
];

interface Data {
  id: number;
  date: string;
  approveDate: string;
  userName: string;
  approve: boolean;
  rejectReason: string | null;
  serial: number;
  kind: string | null;
  name: string;
  address: string | null;
  file: string | null;
  viewFile: string | null;
}

function createData(
  id: number,
  date: string,
  approveDate: string,
  userName: string,
  approve: boolean,
  rejectReason: string | null,
  serial: number,
  kind: string | null,
  name: string,
  address: string | null,
  file: string | null,
  viewFile: string | null
): Data {
  return {
    id,
    date,
    approveDate,
    userName,
    approve,
    rejectReason,
    serial,
    kind,
    name,
    address,
    file,
    viewFile,
  };
}

const rows = Array.from({ length: 64 }, (_, idx) =>
  createData(
    idx + 1,
    "2023-11-21 16:14:40",
    "2023-11-21 16:14:40",
    `하상주간보호센터 ${idx + 1}`,
    true,
    null,
    55082090 + idx,
    null,
    `하상주간보호센터 ${idx + 1}`,
    null,
    null,
    null
  )
);

const DailybookRegisterAllTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={3} sx={{ mt: 2 }}>
      <Stack
        spacing={2}
        sx={{
          padding: 2,
          overflow: "auto",
        }}
      >
        <Typography component="h3" variant="h5">
          시설장 요청 리스트 - 전체
        </Typography>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="center"
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "approve" ? (
                                <Chip
                                  color="primary"
                                  size="small"
                                  label={
                                    value
                                      ? "approve".toUpperCase()
                                      : "rejected".toUpperCase()
                                  }
                                />
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Stack>
    </Paper>
  );
};

export default DailybookRegisterAllTable;
