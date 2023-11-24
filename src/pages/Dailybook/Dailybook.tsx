import React from "react";
import { useParams } from "react-router-dom";
import Layout from "~/components/Layout";
import { DailybookRegister } from "./DailybookRegister";
import { DailybookStaffRegister } from "./DailybookStaffRegister";
import { DailybookRegisterManual } from "./DailybookRegisterManual";

const Dailybook = () => {
  const { menu } = useParams();
  return (
    <Layout>
      {menu === "register" ? (
        <DailybookRegister />
      ) : menu === "staff_register" ? (
        <DailybookStaffRegister />
      ) : menu === "register_manual" ? (
        <DailybookRegisterManual />
      ) : null}
    </Layout>
  );
};

export default Dailybook;
