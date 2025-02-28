import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import AppBar from "./components/AppBar/AppBar";
import PageLoader from "./components/Loader/PageLoader";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
