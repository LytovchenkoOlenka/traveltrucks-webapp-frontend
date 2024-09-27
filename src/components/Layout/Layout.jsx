import { Suspense } from "react";
import css from "./Layout.module.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </div>
  );
}
