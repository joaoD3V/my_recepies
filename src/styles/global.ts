import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --grey-800: #33323F;
    --grey-200: #656B81;
    --yellow-200: #F9C365;
    --orange-300: #C77136;
    --orange-100: #E06663;
    --orange-50: #D9968C;
    --dark-red-400: #56273B;
    --brown-500: #463D49;
    --white: #FFFFFF;
  };

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }


   h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    background: var(--grey-800);
    -webkit-font-smoothing: antialiased;
  } 

  button {
    cursor: pointer;
  }
`;