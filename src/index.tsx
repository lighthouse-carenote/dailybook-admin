import React from "react";
import ReactDOM from "react-dom";
import { CONSTANTS } from "./libs";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    @media (max-width: ${CONSTANTS.CSS.MOBILE_MAX_WIDTH}) {
      height: 100%;
    }
  }
  html, body {
    height: 100%;
    position: relative;
  }
  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  * {
    /* font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
    color: #191F29; */
  }


  /* input type="number" */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  :root {
    --grey900: #191F29;
    --grey800: #333D4C;
    --grey700: #4E5968;
    --grey600: #6B7684;
    --grey500: #8B95A1;
    --grey400: #B0B8C1;
    --grey300: #D1D6DB;
    --grey200: #DDE1E6;
    --grey100: #E5E8EB;
    --grey50: #F2F4F6;
    --bg01: #F1F1F5;
    --bg02: #F9FAFB;
    --disabledBg: #B0B8C1;
    --white: #FFFFFF;
    --whiteHover: #F3F7FA;
    --textBlack: #191F29;
    --textGrey: #6B7684;
    --textDisabled: #B0B8C1;
    --textPlaceholder: #BDBDBD;
    --border01: #DDE1E6;
    --border02: #F2F4F6;
    --error: #B00020;
    --confirm: #1657FF;
    --primary: #00A976;
    --shadePrimary01: #00986A;
    --shadePrimary02: #00875E;
    --shadePrimary03: #007652;
    --shadePrimary04: #006546;
    --shadePrimary05: #00543B;
    --shadePrimary06: #00432F;
    --shadePrimary07: #003223;
    --shadePrimary08: #002117;
    --shadePrimary09: #00100B;
    --tintPrimary01: #19B183;
    --tintPrimary02: #32BA91;
    --tintPrimary03: #4CC29F;
    --tintPrimary04: #66CBAC;
    --tintPrimary05: #7FD4BA;
    --tintPrimary06: #99DCC8;
    --tintPrimary07: #B2E5D5;
    --tintPrimary08: #CCEDE3;
    --tintPrimary09: #E5F6F1;
    --secondaryPrimary: #3200FF;
    --shadeSecondaryPrimary01: #2D00E5;
    --shadeSecondaryPrimary02: #2800CC;
    --shadeSecondaryPrimary03: #2300B2;
    --shadeSecondaryPrimary04: #1E0099;
    --shadeSecondaryPrimary05: #19007F;
    --shadeSecondaryPrimary06: #140066;
    --shadeSecondaryPrimary07: #0F004C;
    --shadeSecondaryPrimary08: #0A0033;
    --shadeSecondaryPrimary09: #050019;
    --tintSecondaryPrimary01: #4619FF;
    --tintSecondaryPrimary02: #5A32FF;
    --tintSecondaryPrimary03: #6F4CFF;
    --tintSecondaryPrimary04: #8466FF;
    --tintSecondaryPrimary05: #987FFF;
    --tintSecondaryPrimary06: #AD99FF;
    --tintSecondaryPrimary07: #C1B2FF;
    --tintSecondaryPrimary08: #D6CCFF;
    --tintSecondaryPrimary09: #EAE5FF;
    --btnDisabled: #B0B8C1;
    --btnWhiteHover: #F3F7FA;
    --btnWhiteActive: #D6DCE1;
    --btnPrimaryHover: #00875E;
    --btnPrimaryActive: #006546;
    --visitCare: #9C6DFF;
    --visitBath: #702DFF;
    --visitNursing: #5100FE;
    --dnProtection: #FF4D4D;
    --shortProtection: #D1182E;
    --homeForMany: #4876FF;
    --homeForLittle: #112C7B;
    --headerZIndex: 99;
    --backgroundBlackZIndex: 100;
    --modalZIndex: 101;
  }
`;

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  rootElement
);
