import React from "react";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
