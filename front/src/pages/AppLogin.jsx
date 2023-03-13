import React, { useEffect } from "react";
import styled from "styled-components";

// 버튼 import
import kakao from "../assets/img/kakao.png";
import naver from "../assets/img/naver.png";
import google from "../assets/img/google.png";
import loginBackground from "../assets/img/loginBackground.png";

const SImg = styled.img`
  width: 250px;
  height: 55px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const SP = styled.p`
  font-size: 20px;
  color: white;
`;

const AppLogin = () => {
  useEffect(() => {
    const navDiv = document.getElementById("navbar");
    navDiv.style.backgroundColor = "transparent";
    const rootDiv = document.getElementById("root");
    rootDiv.style.backgroundImage = `url(${loginBackground})`;
  }, []);

  const onClickHandler = (e) => {
    const clicked = e.target.alt;

    if (clicked === "naver") {
      console.log(`${clicked} 로그인`);
    } else if (clicked === "kakao") {
      console.log(`${clicked} 로그인`);
    } else if (clicked === "google") {
      console.log(`${clicked} 로그인`);
    }

    window.location.href = `http://localhost:8080/oauth2/authorization/${clicked}`;
  };

  return (
    <>
      <SDiv>
        <SP style={{ fontSize: "32px", marginBottom: "0px", fontWeight: "bold" }}>
          Login to Your Account
        </SP>
        <SP>login with social networks</SP>
        <SImg src={naver} alt="naver" onClick={onClickHandler} />
        <SImg src={kakao} alt="kakao" onClick={onClickHandler} />
        <SImg src={google} alt="google" onClick={onClickHandler} />
      </SDiv>
    </>
  );
};

export default AppLogin;
