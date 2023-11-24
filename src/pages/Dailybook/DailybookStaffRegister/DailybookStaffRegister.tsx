import {
  Paper,
  Stack,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  TablePagination,
  Box,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";

interface Column {
  id:
    | "id"
    | "centerId"
    | "centerName"
    | "adminName"
    | "centerTel"
    | "employeeName"
    | "employeePhone"
    | "approve"
    | "rejectReason"
    | "createdAt"
    | "editedAt"
    | "label"
    | "minWidth"
    | "align";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "centerId", label: "센터 ID", minWidth: 50, align: "center" },
  {
    id: "centerName",
    label: "대상 시설 명",
    minWidth: 150,
    align: "center",
  },
  {
    id: "adminName",
    label: "시설장 명",
    minWidth: 120,
    align: "center",
  },
  {
    id: "centerTel",
    label: "시설장 전화번호",
    minWidth: 80,
    align: "center",
  },
  {
    id: "employeeName",
    label: "시설직원 명",
    minWidth: 100,
    align: "left",
  },
  {
    id: "employeePhone",
    label: "시설직원 전화번호",
    minWidth: 100,
    align: "center",
  },
  {
    id: "approve",
    label: "상태",
    minWidth: 100,
    align: "center",
  },
  {
    id: "rejectReason",
    label: "거절 사유",
    minWidth: 120,
    align: "left",
  },
  {
    id: "createdAt",
    label: "생성 일시",
    minWidth: 120,
    align: "center",
  },
  {
    id: "editedAt",
    label: "수정 일시",
    minWidth: 120,
    align: "center",
  },
];

function createData(
  id: number,
  centerId: number,
  centerName: string,
  adminName: string,
  centerTel: string,
  employeeName: string,
  employeePhone: string,
  approve: "승인" | "거절" | "대기중" | "탈퇴",
  rejectReason: string,
  createdAt: string,
  editedAt: string
) {
  return {
    id,
    centerId,
    centerName,
    adminName,
    centerTel,
    employeeName,
    employeePhone,
    approve,
    rejectReason,
    createdAt,
    editedAt,
  };
}

const rows = Array.from({ length: 54 }, (_, idx) =>
  createData(
    idx + 1,
    idx * 10 + idx * 3,
    `라이트하우스 센터${idx + 1}`,
    `김신동`,
    `010222334${idx}`,
    "김신동",
    `010${idx}22309`,
    idx % 3 === 0
      ? "대기중"
      : idx % 7 === 0
      ? "거절"
      : idx % 11 === 0
      ? "탈퇴"
      : "승인",
    "",
    "2023-11-21 16:55:06",
    "2023-11-21 16:55:22"
  )
);

const DailybookStaffRegister = () => {
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
    <Paper elevation={3}>
      <Stack
        spacing={2}
        sx={{
          padding: 2,
          overflow: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography component="h3" variant="h5">
              데일리북 시설직원 요청 관리
            </Typography>
            <Typography component="p" variant="subtitle1">
              정렬순서 : 생성일시 내림차순
            </Typography>
            <Typography component="p" variant="subtitle1">
              999개 항목이 검색됨
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <InputLabel
              htmlFor="center-name"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              대상 시설 명
              <TextField id="center-name" size="small" sx={{ ml: 1 }} />
            </InputLabel>
            <InputLabel
              htmlFor="center-name"
              sx={{
                ml: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              시설장 명
              <TextField id="center-name" size="small" sx={{ ml: 1 }} />
            </InputLabel>
            <InputLabel
              htmlFor="center-name"
              sx={{
                ml: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              시설 직원 명
              <TextField id="center-name" size="small" sx={{ ml: 1 }} />
            </InputLabel>
          </Box>
        </Box>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ height: "calc(100vh - 280px)" }}>
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
                                  color={
                                    value === "승인"
                                      ? "primary"
                                      : value === "거절"
                                      ? "error"
                                      : value === "탈퇴"
                                      ? "default"
                                      : "warning"
                                  }
                                  size="small"
                                  label={value}
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

export default DailybookStaffRegister;
