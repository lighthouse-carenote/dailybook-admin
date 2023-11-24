import React from "react";
import Layout from "~/components/Layout";
import { useParams } from "react-router-dom";
import SystemMessaging from "./SystemMessaging";
import SystemPushMessage from "./SystemPushMessage";
import SystemCommonCode from "./SystemCommonCode";
import SystemLog from "./SystemLog";
import SystemScheduler from "./SystemScheduler";

const systemComponentMap = {
  messaging: <SystemMessaging />,
  push_message: <SystemPushMessage />,
  code: <SystemCommonCode />,
  log: <SystemLog />,
  scheduler: <SystemScheduler />,
};

const System = () => {
  const { menu } = useParams();

  const componentToRender = !!menu && systemComponentMap[menu];

  return <Layout>{componentToRender}</Layout>;
};

export default System;
