import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
      {/* Outlet : 자녀 라우트를 렌더링 해야할 장소를 표시하는 마커 역할을 함 */}
    </>
  );
};

export default RootLayout;
