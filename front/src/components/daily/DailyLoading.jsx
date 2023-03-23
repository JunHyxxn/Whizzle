import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./DailyLoading.css";

const slide = {
  // position: "absolute",
  height: "60vh",
  paddingBottom: "70px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const STitle = styled.span`
  margin-top: 0;
  text-align: center;
  color: #666666;
  font-size: 18px;
  font-weight: bold;
`;

//추천 후 로딩
const DailyLoading = () => {
  return (
    <motion.div
      style={slide}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="200px"
        height="100px"
        viewBox="0 0 574.558 120"
        enableBackground="new 0 0 574.558 120"
        xmlSpace="preserve"
      >
        <defs>
          <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
            <path
              fill="#F84F5A"
              d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
            />
          </pattern>

          <text
            id="text"
            transform="matrix(1 0 0 1 -8.0684 116.7852)"
            fontSize="161.047"
            fontFamily="Pacifico"
          >
            Whizzle
          </text>

          <mask id="text_mask">
            <use x="0" y="0" xlinkHref="#text" opacity="1" fill="#fff" />
          </mask>
        </defs>

        <use x="0" y="0" xlinkHref="#text" fill="transparent" />

        <rect
          className="water-fill"
          mask="url(#text_mask)"
          fill="url(#water)"
          x="-400"
          y="0"
          width="1600"
          height="120"
        />
      </svg>

      <STitle>오늘의 위스키를 찾아드릴게요!</STitle>
      <STitle>잠시만 기다려주세요</STitle>
    </motion.div>
  );
};

export default DailyLoading;
