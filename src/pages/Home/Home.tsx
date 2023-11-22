import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Layout from "~/components/Layout";

const cardContainerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  padding: 1,
  border: 1,
  borderColor: "rgba(0, 0, 0, 0.12)",
  marginBottom: 2,
};

const cardStyle = {
  padding: 2,
  width: "100%",
};

const Home = () => {
  return (
    <Layout>
      {/* Dashboard */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ ...cardContainerStyle }}>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              데일리북 사용자 통계
            </Typography>
            <div id="jsGrid_user" className="w3-margin-bottom"></div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              데일리북 게시글 통계
            </Typography>
            <div id="jsGrid_writing" className="w3-margin-bottom"></div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              데일리북 승인 대기 통계
            </Typography>
            <div id="jsGrid_register" className="w3-margin-bottom"></div>
          </Card>
        </Box>

        <Box sx={{ ...cardContainerStyle }}>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              데일리북 사용자 통계
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="myChart_carenote_user_statistics"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              데일리북 게시글 Top 7
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas id="myChart_carenote_top5" width="" height=""></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              데일리북 가입자 통계
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="myChart_carenote_user_register"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
        </Box>

        <Box sx={{ ...cardContainerStyle }}>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              데일리북 월별 알림장 조회율
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_announcement_monthly_vtr"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              데일리북 일별 알림장 조회율
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_announcement_daily_vtr"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
        </Box>

        <Box sx={{ ...cardContainerStyle }}>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              월별 시설장 가입
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_monthly_statistics_01"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              월별 사용자 가입
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_monthly_statistics_02"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              월별 알림장 수
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_monthly_statistics_03"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              월별 첨부파일 수
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_monthly_statistics_04"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
        </Box>

        <Box sx={{ ...cardContainerStyle }}>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              월별 시설장 가입 누적
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_monthly_statistics_05"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              월별 사용자 가입 누적
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_monthly_statistics_06"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              월별 알림장 수 누적
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_monthly_statistics_07"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
          <Card variant="outlined" sx={{ ...cardStyle }}>
            <Typography variant="h6" fontWeight={600} gutterBottom m="0" pb={1}>
              월별 첨부파일 수 누적
            </Typography>
            <div style={{ padding: "8px" }}>
              <canvas
                id="carenote_monthly_statistics_08"
                width=""
                height=""
              ></canvas>
            </div>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
