import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import SharedLayout from "./components/SharedLayout/SharedLayout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage.jsx"));
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Loader from "./components/Loader/Loader.jsx";

import Header from "./components/Header/Header.jsx";

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
