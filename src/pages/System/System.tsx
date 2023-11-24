import React from "react";
import Layout from "~/components/Layout";
import { useParams } from "react-router-dom";
import SystemMessaging from "./SystemMessaging";
import SystemPushMessage from "./SystemPushMessage";
import SystemCommonCode from "./SystemCommonCode";

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
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default System;
