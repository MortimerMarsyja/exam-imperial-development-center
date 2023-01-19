import { createGlobalStyle } from "styled-components";

interface Props {
  theme: string;
}

const GlobalStyles = createGlobalStyle<Props>`
  body {
    background-color: ${({ theme }) =>
      theme === "dark" ? "#1e1e1e" : "#f5f5f5"};
    margin: 0;
    padding: 0;
    font-family:  Helvetica, Sans-Serif;
  }

  .page-layout {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 52px;
  }

  .page-content{
    margin-top: 24px;
    margin-left: 200px;
  }

  #toast{
    display: none;
    &.show{
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    animation: toast 0.5s ease-in-out;
    }
  }

  @media (max-width: 540px) {
    .page-content{
    margin-left: 160px;
    }
  }

  @media (max-width: 365px) {
    .page-content{
    margin-left: 120px;
    }
  }
  
`;

export default GlobalStyles;
