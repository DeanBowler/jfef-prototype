import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {  
    background-image: linear-gradient(
      45deg,
      hsl(47deg 100% 59%) 0%,
      hsl(40deg 100% 62%) 14%,
      hsl(33deg 100% 65%) 29%,
      hsl(25deg 100% 67%) 43%,
      hsl(15deg 100% 68%) 57%,
      hsl(5deg 100% 70%) 71%,
      hsl(353deg 100% 67%) 86%,
      hsl(343deg 100% 61%) 100%
    );

    background-attachment: fixed;

    font-family: 'GT Walsheim';

    button {
      font-family: 'GT Walsheim';

      font-size: 16px;

      background-color: hsl(345deg 80% 60%);
      color: rgba(255,255,255,0.9);
      border: none;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
      cursor: pointer;
      width: 100%;

      :hover {
        background-color: hsl(345deg 70% 50%);
      }
    }

    input {
      font-family: 'GT Walsheim';
      background:  hsl(345deg 30% 92%);
      color: hsla(345deg 100% 20% / 0.85);
      border: none;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      font-size: 1.125rem;

      &::placeholder {
        color: hsl(345deg 40% 55%);
      }

      &:focus {
        outline: 2px solid hsl(345deg 30% 60%);
      }
    }

    label {
      color: hsla(345deg 100% 20%);
    }

    &:after {
      content: "";
      z-index: -1;

      background-attachment: fixed;
      position: fixed;
      inset: 0px;
      pointer-events: none;
      background-image: url(https://deanbowler.dev/background.svg);
      mix-blend-mode: multiply;
    }
  }

  h1, h2, h3 {
    color: hsl(345deg 60% 35%);
  }

  h2, h3 {
    margin-top: 0;
  }

  @font-face {
  font-weight: 300;
  font-family: 'GT Walsheim';
  src: url('https://likelyloanscdn.blob.core.windows.net/styles/fonts/fonts/GT-Walsheim-Pro-Light.woff2')
      format('woff2'),
    url('https://likelyloanscdn.blob.core.windows.net/styles/fonts/fonts/GT-Walsheim-Pro-Light.woff')
      format('woff');
}
@font-face {
  font-weight: normal;
  font-family: 'GT Walsheim';
  src: url('https://likelyloanscdn.blob.core.windows.net/styles/fonts/fonts/GT-Walsheim-Pro-Regular.woff2')
      format('woff2'),
    url('https://likelyloanscdn.blob.core.windows.net/styles/fonts/fonts/GT-Walsheim-Pro-Regular.woff')
      format('woff');
}
@font-face {
  font-weight: bold;
  font-family: 'GT Walsheim';
  src: url('https://likelyloanscdn.blob.core.windows.net/styles/fonts/fonts/GT-Walsheim-Pro-Medium.woff2')
      format('woff2'),
    url('https://likelyloanscdn.blob.core.windows.net/styles/fonts/fonts/GT-Walsheim-Pro-Medium.woff')
      format('woff');
}
`;
