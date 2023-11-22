import React from "react";
import Layout from "~/components/Layout";
import { useParams } from "react-router-dom";
import SystemMessaging from "./SystemMessaging";

const System = () => {
  const { menu } = useParams();

  return (
    <Layout>
      {menu === "messaging" ? <SystemMessaging /> : <>System Here!</>}
    </Layout>
  );
};

export default System;
