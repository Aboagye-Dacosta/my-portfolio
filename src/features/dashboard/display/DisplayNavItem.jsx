import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledDisplayNavItem = styled(NavLink)`
  padding: 1rem 2rem;
  position: relative;

  ${(props) =>
    props?.active
      ? css`
          color: var(--color-grey-500);
        `
      : null}
`;

const ActiveNav = styled(motion.span)`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-700);
`;

function DisplayNavItem({ children, to }) {
  const location = useLocation();
  const { pathname } = location;
  const active =
    pathname.split("/").slice(-2).join("") === to.split("/").slice(-2).join("");

  return (
    <StyledDisplayNavItem to={to} active={active}>
      {children}
      {active && <ActiveNav layout layoutId="display-Id" />}
    </StyledDisplayNavItem>
  );
}

DisplayNavItem.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

export default DisplayNavItem;
