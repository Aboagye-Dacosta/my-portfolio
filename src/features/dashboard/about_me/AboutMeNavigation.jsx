import styled from "styled-components";
import AboutMeNavItem from "./AboutMeNavItem";

const StyledAboutMeNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: fixed;
`;

function AboutMeNavigation() {
  return (
    <StyledAboutMeNavigation>
      <AboutMeNavItem to="/dashboard/about-me/description">
        Description
      </AboutMeNavItem>
      <AboutMeNavItem to="/dashboard/about-me/what-i-do">
        What I do and am
      </AboutMeNavItem>
      <AboutMeNavItem to="/dashboard/about-me/social">
        Social links
      </AboutMeNavItem>
      <AboutMeNavItem to="/dashboard/about-me/brand">Brand</AboutMeNavItem>
    </StyledAboutMeNavigation>
  );
}

export default AboutMeNavigation;
