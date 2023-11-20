import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DashboardPage = React.lazy(() => import("./pages/Home"));
const LoginPage = React.lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
