import WebFont from "webfontloader";
import { css } from "styled-components";
export const fonts = css`
  ${() =>
    WebFont.load({
      google: {
        families: [
          "Maven Pro:100,200,300,400,500,600,700,800,900",
          "Open Sans:100,200,300,400,500,600,700,800,900",
          "Poppins:100,200,300,400,500,600,700,800,900",
          "Roboto:100,200,300,400,500,600,700,800,900",
          "Lato:100,200,300,400,500,600,700,800,900",
          "Montserrat:100,200,300,400,500,600,700,800,900",
          "Raleway:100,200,300,400,500,600,700,800,900",
          "Nunito:100,200,300,400,500,600,700,800,900",
          "Mukta:100,200,300,400,500,600,700,800,900",
          "Bebas Neue:100,200,300,400,500,600,700,800,900",
          "Anton:100,200,300,400,500,600,700,800,900",
        ],
      },
    })}
`;