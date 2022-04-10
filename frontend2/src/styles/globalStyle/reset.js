import { css } from "styled-components";
/* @import-normalize; */
export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: inherit;
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0;
  }

  /* Remove default padding */
  ul[class],
  ol[class],
  button,
  a {
    border: none;
    text-decoration: none;
  }
  body {
    background: linear-gradient(120deg, #07163f, #20428c, #3a69b7, #3a69b7, #3a69b7, #20428c, #07163f);
  }
  a,
  button {
    cursor: pointer;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd,
  html,
  body {
    margin: 0;
    padding: 0;
  }
  ul {
    cursor: default;
  }

  /* Set core body defaults */
  html {
    font-size: 62.5%;
    text-size-adjust: 100%;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  body,
  html {
    /* -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none; */
  }
  /* ::-webkit-scrollbar {
  width: 14px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: #757575;
  background: red;
  -webkit-border-radius: 8px;
}
::-webkit-scrollbar-track {
  background: gray;
} */

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    display: block;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  span,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
