import React from "react";
import Layout from "~/components/Layout";
import { useParams } from "react-router-dom";
import SystemMessaging from "./SystemMessaging";
import SystemPushMessage from "./SystemPushMessage";
import SystemCommonCode from "./SystemCommonCode";
import SystemLog from "./SystemLog";

const System = () => {
  const { menu } = useParams();

  return (
    <Layout>
      {menu === "messaging" ? (
        <SystemMessaging />
      ) : menu === "push_message" ? (
        <SystemPushMessage />
      ) : menu === "code" ? (
        <SystemCommonCode />
      ) : menu === "log" ? (
        <SystemLog />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default System;
