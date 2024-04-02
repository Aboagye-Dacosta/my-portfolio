import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.9rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-500);
    background-color: var(--color-brand-700);
    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-black-100);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-black-700);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const StyledButton = styled.button.attrs(({ size, variation, tooltip }) => ({
  size: size || "medium",
  variation: variation || "primary",
  tooltip: tooltip || null,
}))`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  /* white-space: nowrap; */

  ${(props) => {
    switch (props.size) {
      case "small":
        return sizes.small;
      case "medium":
        return sizes.medium;
      case "large":
        return sizes.large;
    }
  }}

  ${(props) => {
    switch (props.variation) {
      case "primary":
        return variations.primary;
      case "secondary":
        return variations.secondary;
      case "danger":
        return variations.danger;
    }
  }}
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.any,
  tooltip: PropTypes.any,
};

export default Button;
