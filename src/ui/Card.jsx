import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  width: 100%;
  background-color: transparent;
  z-index: 500;
  transition: background-color 0.2s ease;
  padding: 2rem 1rem;

  cursor: pointer;

  &:hover {
    background-color: var(--color-black-100);
    box-shadow: var(--shadow-lg);
   
  }
`;

export default Card;
