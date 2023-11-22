import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "~/components/Layout";

const Dailybook = () => {
  const pathNames = useLocation().pathname.split("/")[2];
  return (
    <Layout>
      {pathNames === "register" ? (
        <div>register</div>
      ) : pathNames === "staff_register" ? (
        <div>staff_register</div>
      ) : (
        <div>register_manual</div>
      )}
    </Layout>
  );
};

export default Dailybook;
