import styled, { css } from "styled-components";

const Row = styled.div.attrs(({ type, items, justify, gap, wrap }) => ({
  type: type || "vertical",
  items: items || "flex-start",
  justify: justify || "start",
  gap: gap || 1.6,
  wrap: wrap || "nowrap",
}))`
  display: flex;
  flex-wrap: ${(props) => props.wrap};
  ${(props) => {
    switch (props.type) {
      case "horizontal":
        return css`
          align-items: ${props.items};
          justify-content: ${props.justify};
          gap: ${props.gap}rem;
        `;
      case "vertical":
        return css`
          flex-direction: column;
          align-items: ${props.items};
          justify-content: ${props.justify};
          gap: ${props.gap}rem;
        `;
    }
  }}
`;

export default Row;
