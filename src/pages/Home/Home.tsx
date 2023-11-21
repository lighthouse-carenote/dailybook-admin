import React from "react";
import Layout from "~/components/Layout";

// root path ::  dashboard
const Home = () => {
  return (
    <Layout>
      <div>
        <div>
          <div>데일리북 사용자 통계</div>
          <div>데일리북 게시글 통계</div>
          <div>데일리북 승인 대기 통계</div>
        </div>
        <div>
          <div>데일리북 사용자 통계</div>
          <div>데일리북 게시글 Top 7</div>
          <div>데일리북 가입자 통계</div>
        </div>
        <div>
          <div>데일리북 월별 알림장 조회율</div>
          <div>데일리북 일별 알림장 조회율</div>
        </div>
        <div>
          <div>월별 시설장 가입</div>
          <div>월별 사용자 가입</div>
          <div>월별 알림장 수</div>
          <div>월별 첨부파일 수</div>
        </div>
        <div>
          <div>월별 시설장 가입 누적</div>
          <div>월별 사용자 가입 누적</div>
          <div>월별 알림장 수 누적</div>
          <div>월별 첨부파일 수 누적</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
