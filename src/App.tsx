import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DashboardPage = React.lazy(() => import("./pages/Home"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const SystemPage = React.lazy(() => import("./pages/System"));
const DailybookPage = React.lazy(() => import("./pages/Dailybook"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/system/:menu" element={<SystemPage />} />
          <Route path="/dailybook/:menu" element={<DailybookPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
