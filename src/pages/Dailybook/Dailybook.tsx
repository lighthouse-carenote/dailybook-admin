import React from "react";
import { useParams } from "react-router-dom";
import Layout from "~/components/Layout";
import DailybookRegister from "./DailybookRegister";

const Dailybook = () => {
  const { menu } = useParams();
  return (
    <Layout>
      {menu === "register" ? (
        <DailybookRegister />
      ) : menu === "staff_register" ? (
        <div>staff_register</div>
      ) : menu === "register_manual" ? (
        <div>register_manual</div>
      ) : null}
    </Layout>
  );
};

export default Dailybook;
