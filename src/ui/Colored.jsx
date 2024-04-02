import styled, { css } from "styled-components";

const Colored = styled.span.attrs(({ color, reverse }) => ({
  color: color || "brand",
  reverse: reverse || "false",
}))`
  ${(props) =>
    props.reverse == "true"
      ? props.color === "brand"
        ? css`
            color: var(--color-grey-400);
          `
        : css`
            color: var(--color-${props.color}-700);
          `
      : css`
          color: var(--color-${props.color}-700);
        `}

  &:hover {
    ${(props) =>
      props.reverse == "true"
        ? css`
            color: var(--color-${props.color}-700);
          `
        : css`
            color: var(--color-${props.color}-100);
          `}
  }
`;
export default Colored;
