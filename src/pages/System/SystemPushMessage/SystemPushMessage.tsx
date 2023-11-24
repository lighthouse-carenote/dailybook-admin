import * as React from "react";
import { Paper } from "@mui/material";
import { SystemPushMessageContent } from "~/components/System/SystemPushMessage";

const messageInfo = [
  {
    title: "Dailybook",
    image: "📱",
  },
  {
    title: "Admin",
    image: "👨‍💼",
  },
];

const titles = [
  "(선택 해제)",
  "시설장 가입 요청 수락",
  "시설장 가입 요청 거절",
  "시설 직원 가입 요청",
  "시설 직원 가입 요청 수락",
  "시설 직원 가입 요청 거절",
  "보호자 가입 요청",
  "보호자 가입 요청 수락",
  "보호자 가입 요청 거절",
  "새로운 알림장이 도착했어요!",
  "알림장에 댓글이 달렸어요!",
  "새로운 공지사항이 도착했어요!",
  "공지사항에 댓글이 달렸어요!",
  "새로운 문의글이 도착했어요!",
  "문의글에 댓글이 달렸어요!",
  "새로운 문의글 답변이 도착했어요!",
  "데일리북 새소식",
  "데일리북 문의 답변",
];

const SystemPushMessage = () => {
  return (
    <Paper elevation={3}>
      <SystemPushMessageContent messageInfo={messageInfo} titles={titles} />
    </Paper>
  );
};

export default SystemPushMessage;
