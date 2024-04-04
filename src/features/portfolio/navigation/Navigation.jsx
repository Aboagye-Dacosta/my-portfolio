import styled from "styled-components";
import { breakpoint } from "../../../styles/GlobalStyles";
import Spacer from "../../../ui/Spacer";
import NavFooter from "./NavFooter";
import NavList from "./NavList";
import PortfolioHeader from "./PortfolioHeader";

const StyledNavigation = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  z-index: 1000;
`;

const Navigator = styled.div`
  height: 30rem;
  width: 100%;
  height: 100%;
  padding: 3rem 0 0;
  z-index: 1000;

  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.desktop}) {
    position: fixed;
    height: 95vh;
    width: 35dvw;
    left: 10rem;
  }
`;

function Navigation() {
  return (
    <StyledNavigation>
      <Navigator>
        <PortfolioHeader>
          <NavList>
            <NavList.Item to="#about-me">About Me</NavList.Item>
            <NavList.Item to="#my-experiences">Experience</NavList.Item>
            <NavList.Item to="#my-projects">Projects</NavList.Item>
          </NavList>
          <Spacer size={3} hidden="tablet" />
          <NavFooter />
        </PortfolioHeader>
      </Navigator>
    </StyledNavigation>
  );
}

export default Navigation;
