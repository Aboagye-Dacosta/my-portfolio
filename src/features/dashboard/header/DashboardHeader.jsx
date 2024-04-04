import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import Avatar from "../../../ui/Avatar";
import Button from "../../../ui/Button";
import Logo from "../../../ui/Logo";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import NavItem from "./NavItem";

import { useLogout } from "../../auth/useLogout";
import { useUser } from "../../auth/useUser";
import { useStrings } from "../about_me/useStrings";

const StyledDashboardHeader = styled.header`
  z-index: 1000;
  background-color: var(--color-black-100);
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
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
  gap: 2rem;
`;

const StyledLink = styled(NavLink)`
  &.active .avatar {
    outline: 1px solid var(--color-brand-700);
    outline-offset: 3px;
    outline-width: 2px;
    outline-style: dashed;
    border-radius: 100%;
  }
`;

const LogoutButton = styled.button`
  background-color: transparent;
  /* outline: none; */
  border: none;
  padding: 1rem;

  &:hover {
    background-color: var(--color-black-100);
  }
`;

function DashboardHeader() {
  const { strings: { logo } = {} } = useStrings();
  const { user: { user_metadata: { avatar, username } = {} } = {} } = useUser();
  const { logout } = useLogout();
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
        <Button as={Link} size="small" to="/">
          Portfolio
        </Button>
        <Spacer type="horizontal" />
        <StyledLink
          to="/dashboard/user"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          <Row type="horizontal" items="center" justify="center">
            <div className="avatar">
              <Avatar avatar={avatar} />
            </div>
            <span>{username}</span>
          </Row>
        </StyledLink>
        <LogoutButton onClick={() => logout()}>
          <HiArrowRightOnRectangle />
        </LogoutButton>
      </Auth>
    </StyledDashboardHeader>
  );
}

export default DashboardHeader;
