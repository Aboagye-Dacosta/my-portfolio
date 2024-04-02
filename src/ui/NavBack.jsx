import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Colored from "./Colored";

const StyledLink = styled(Link)`
  & span {
    margin: 0 1rem;
  }
  &:hover > span {
    display: inline-block;
    transition: 0.1s;
    transform: translateX(-10px);
  }
`;

function NavBack({ label, direction = "normal" }) {
  return (
    <Colored>
      <StyledLink to={-1}>
        {direction == "normal" && <span>&larr;</span>} {label}{" "}
        {direction === "reverse" && <span>&rarr;</span>}
      </StyledLink>
    </Colored>
  );
}

NavBack.propTypes = {
  direction: PropTypes.string,
  label: PropTypes.string,
};

export default NavBack;
