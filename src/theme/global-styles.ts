import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --primary-font: 'Gemunu Libre', sans-serif;
    --base-font-size: 14px;
    --base-spacing: 15px;
    --base-radius: 12px;
    --light-background-color: #f5f8fc;
    --box-background-color: #fff;
    --text-color: #444;
    --primary-color: #5a38fc;
    --primary-background-color: #f8f2ea;
    --color-over-solid: #fff;
    --accent-color: #c5c6ca;
    --highlight-color: #f7e277;
    --date-color: #fabca1;
    --loader-color: #ff4d00;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-attachment: fixed;
    background-color: var(--primary-background-color);
    background-repeat: repeat;
    font-family: var(--primary-font);
    font-size: var(--base-font-size);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  main {
    margin: 30px;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
    margin: 30px 0 15px 0;
  }

  @media (max-width: 576px) {
    main {
      margin: 30px;
    }
  }
`;

export default GlobalStyle;
