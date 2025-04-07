import React from "react";
import SideBarMenu from "./components/SideBarMenu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-[100vh] w-[100vw] text-white flex">
      <SideBarMenu />
      <div className="p-5 pl-0 m-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
