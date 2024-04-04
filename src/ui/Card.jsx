import styled from "styled-components";
import { breakpoint } from "../styles/GlobalStyles";

const Card = styled.div`
  border-radius: 5px;
  width: 100%;
  background-color: var(--color-black-100);
  z-index: 500;
  transition: background-color 0.2s ease;
  padding: 2rem 1rem;

  cursor: pointer;

  &:hover {
    background-color: var(--color-black-100);
    box-shadow: var(--shadow-lg);
  }

  @media screen and (min-width: ${breakpoint.desktop}) {
    background-color: transparent;
  }
`;

export default Card;
