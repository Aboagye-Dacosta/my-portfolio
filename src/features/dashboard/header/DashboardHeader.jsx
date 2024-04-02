import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import Avatar from "../../../ui/Avatar";
import Logo from "../../../ui/Logo";
import Row from "../../../ui/Row";
import NavItem from "./NavItem";

import Spacer from "../../../ui/Spacer";
import { useStrings } from "../about_me/useStrings";

const StyledDashboardHeader = styled.header`
  z-index: 1000;
  background-color: var(--color-black-100);
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Auth = styled(Tabs)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledLink = styled(NavLink)`
  &.active {
    outline: 1px solid var(--color-brand-700);
    outline-offset: 3px;
    outline-width: 2px;
    outline-style: dashed;
    border-radius: 100%;
  }
`;

function DashboardHeader() {
  const { strings: { logo } = {} } = useStrings();
  return (
    <StyledDashboardHeader>
      <Logo src={logo} />
      <Tabs>
        {/* <NavItem to="/dashboard/statistics">Dashboard</NavItem> */}
        <NavItem to="/dashboard/about-me">About me</NavItem>
        <NavItem to="/dashboard/projects">Projects</NavItem>
        <NavItem to="/dashboard/display">Display</NavItem>
      </Tabs>
      <Auth>
        <Link to="/">Portfolio</Link>
        <Spacer type="horizontal" />
        <StyledLink
          to="/dashboard/user"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          <Row>
            <Avatar />
          </Row>
        </StyledLink>
        <HiArrowRightOnRectangle />
      </Auth>
    </StyledDashboardHeader>
  );
}

export default DashboardHeader;
