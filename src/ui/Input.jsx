import styled from "styled-components";

const Input = styled.input.attrs(({ type, ...rest }) => ({
  ...rest,
  type: type || "text",
}))`
  width: 100%;
  padding: 0.7rem 1rem;
  border: none;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-black-100);
  accent-color: var(--color-brand-700);
`;

export default Input;
