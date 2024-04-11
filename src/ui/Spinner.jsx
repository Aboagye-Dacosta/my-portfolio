import styled, { keyframes } from "styled-components";
import { breakpoint } from "../styles/GlobalStyles";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;
  width: 7.4rem;

  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-brand-700) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-700));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;

  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 10.4rem;
  }
`;

export default Spinner;
