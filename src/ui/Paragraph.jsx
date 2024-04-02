import styled, { css } from "styled-components";

const Paragraph = styled.p.attrs(({ align, weight, size }) => ({
  align: align || "left",
  weight: weight || "normal",
  size: size || 1.6,
}))`
  ${(props) => {
    switch (props.align) {
      case "center":
        return css`
          text-align: center;
          font-weight: ${props.weight};
          font-size: ${props.size}rem;
        `;
      case "left":
        return css`
          text-align: left;
          font-weight: ${props.weight};
          font-size: ${props.size}rem;
        `;
      case "right":
        return css`
          text-align: right;
          font-weight: ${props.weight};
          font-size: ${props.size}rem;
        `;
    }
  }}
`;

export default Paragraph;
