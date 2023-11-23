import React from "react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuList from "./MenuList";

const Menu = () => {
  // const pathNames = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        overflow: "auto",
        borderRight: 1,
        borderColor: "rgba(0, 0, 0, 0.12)",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography variant="subtitle1" gutterBottom mb="0">
            Welcome, Dev Admin
          </Typography>
          <IconButton sx={{ marginRight: 1 }} aria-label="logout">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Box>
      <List sx={{ width: "100%", maxWidth: 300 }}>
        <ListItem disablePadding>
          <ListItemButton component="a" onClick={() => navigate("/")}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" onClick={() => navigate("/#")}>
            <ListItemText primary="System" />
          </ListItemButton>
        </ListItem>
        <MenuList
          data={[
            { path: "/system/messaging/", label: "SMS/LMS 발송 (운영자용)" },
            {
              path: "/system/push_message/",
              label: "Push Noti 발송 (개발자용)",
            },
          ]}
          menu={"공통기능"}
        />
        <MenuList
          data={[
            { path: "/system/code/", label: "공통 코드" },
            { path: "/system/log/", label: "HTTP 요청 응답 이력" },
            { path: "/system/scheduler/", label: "스케줄러 관리" },
          ]}
          menu={"시스템 데이터"}
        />
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" onClick={() => navigate("/#")}>
            <ListItemText primary="Dailybook" />
          </ListItemButton>
        </ListItem>
        <MenuList
          data={[
            { path: "/", label: "시설장 요청 관리" },
            { path: "/", label: "시설직원 요청 관리" },
            { path: "/", label: "보호자 수기 가입" },
          ]}
          menu={"가입 승인 관리"}
        />
        <MenuList
          data={[
            { path: "/", label: "전체 게시글 통계" },
            { path: "/", label: "공지사항" },
            { path: "/", label: "알림장" },
            { path: "/", label: "알림장 조회율" },
          ]}
          menu={"데이터 관리"}
        />
        <MenuList
          data={[
            { path: "/", label: "고객의 소리 관리" },
            { path: "/", label: "사용자 관리" },
            { path: "/", label: "사용자 스위칭" },
            { path: "/", label: "시설 관리" },
            { path: "/", label: "시설 상담" },
            { path: "/", label: "시설 상담 이력" },
          ]}
          menu={"CRM 관리"}
        />
        <MenuList
          data={[
            { path: "/", label: "홈 배너 관리" },
            { path: "/", label: "데일리북 소식 관리" },
          ]}
          menu={"앱 관리"}
        />
        <Divider />
      </List>
    </Box>
  );
};

export default Menu;
