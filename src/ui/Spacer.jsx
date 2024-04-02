import styled, { css } from "styled-components";
import { breakpoint } from "../styles/GlobalStyles";

const Spacer = styled.div.attrs(({ size, type, hidden }) => ({
  size: size || 2,
  type: type || "vertical",
  hidden: hidden || "all",
}))`
  display: block;
  ${(props) =>
    breakpoint[props.hidden]
      ? css`
          @media screen and (max-width: ${breakpoint[props.hidden]}) {
            display: none;
          }
        `
      : css`
          display: block;
        `}

  ${(props) => {
    switch (props.type) {
      case "vertical":
        return css`
          height: ${props.size}rem;
        `;
      case "horizontal":
        return css`
          width: ${props.size}rem;
        `;
    }
  }}
`;

export default Spacer;
