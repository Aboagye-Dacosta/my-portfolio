import {
  FaHashnode,
  FaLinkedin,
  FaSquareGithub,
  FaSquareTwitter,
} from "react-icons/fa6";
import styled from "styled-components";

const StyledNavFooter = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.7rem;
  font-weight: bold;

  color: var(--color-indigo-100);

  & a {
    transition: 200ms ease;
  }

  & a:hover {
    transform: scale(1.2);
  }

  & a:first-of-type {
    color: var(--color-brand-700);
  }
`;

function NavFooter() {
  return (
    <StyledNavFooter>
      <a href="https://github.com/Aboagye-Dacosta">
        <FaSquareGithub />
      </a>
      <a href="https://www.linkedin.com/in/solomon-aboagye-011776210/">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/CODE_MAN">
        <FaSquareTwitter />
      </a>
      <a href="https://dacostasolomon-codeman.hashnode.dev">
        <FaHashnode />
      </a>
    </StyledNavFooter>
  );
}

export default NavFooter;
