import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

const RootLayout = () => {
  // const navigation = useNavigation();
  // useNavigation : 현재 라우트의 네비게이션 객체를 가져오는 훅
  // 현재 전환이 진행 중인지, 데이터를 불러오는 중인지 등을 알 수 있음

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
