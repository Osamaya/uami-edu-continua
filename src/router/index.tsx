import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout"
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import UploadExcel from "../pages/UploadExcel";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Login />}/>

        <Route path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />

        <Route path="/upload" element={
            <Layout>
              <UploadExcel />
            </Layout>
          }/>
      </Routes>
    </BrowserRouter>
  );
}
