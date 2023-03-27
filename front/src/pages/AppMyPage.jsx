import React, { useEffect } from "react";
import colorLogo from "../assets/img/colorLogo.png";
import logo from "../assets/img/logo.png";
import styled from "styled-components";

//components import
import MyBadge from "../components/mypage/MyBadge";
import MyProfile from "../components/mypage/MyProfile";
import MypageTab from "../components/mypage/MypageTab";

const SContainer = styled.div`
  margin-top: 150px;
  max-width: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SInfoDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppMyPage = () => {
  // 페이지 mount시 네비게이션 바 이미지와 글씨 색 변경
  useEffect(() => {
    const navLogo = document.getElementById("logo");
    navLogo.src = colorLogo;
    const navTexts = document.querySelectorAll(".text, .dropdown");
    for (let i = 0; i < navTexts.length; i++) {
      navTexts[i].style.color = "#000000";
    }
    // 페이지 unmount시 원래대로 복구
    return () => {
      navLogo.src = logo;
      for (let i = 0; i < navTexts.length; i++) {
        navTexts[i].style.color = "#ffffff";
      }
    };
  }, []);

  const exampleUser = {
    nickname: "drunkenbear",
    email: "ludwings0330@gmail.com",
    provider: "GOOGLE",
    image: {
      url: "assets/img/userExampleProfile.png",
      originName: "default_member_image.png",
    },
    level: 43.0,
  };

  return (
    <>
      <SContainer>
        <SInfoDiv>
          <MyProfile user={exampleUser} />
          <MyBadge />
        </SInfoDiv>
        <MypageTab />
      </SContainer>
    </>
  );
};

export default AppMyPage;
