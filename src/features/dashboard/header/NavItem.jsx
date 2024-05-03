import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import ActiveNav from "../../../ui/ActiveNav";

const StyledNavItem = styled(NavLink)`
  padding: 1rem 2rem;
  position: relative;

  ${(props) =>
    props?.active
      ? css`
          color: var(--color-grey-500);
        `
      : null}
`;

function NavItem({ children, to }) {
  const location = useLocation();
  const { pathname } = location;
  const active = pathname.split("/").includes(to.split("/").at(-1));

  return (
    <StyledNavItem to={to} active={active}>
      {children}
      {active && <ActiveNav layout layoutId="nav-Id" />}
    </StyledNavItem>
  );
}

NavItem.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

export default NavItem;
