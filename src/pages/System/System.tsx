import React from "react";
import Layout from "~/components/Layout";
import { useParams } from "react-router-dom";
import SystemMessaging from "./SystemMessaging";
import SystemPushMessage from "./SystemPushMessage";

const System = () => {
  const { menu } = useParams();

  return (
    <Layout>
      {menu === "messaging" ? (
        <SystemMessaging />
      ) : menu === "push_message" ? (
        <SystemPushMessage />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default System;
