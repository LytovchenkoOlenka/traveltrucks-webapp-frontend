import "./App.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage.jsx"));
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Layout from "./components/Layout/Layout.jsx";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}
