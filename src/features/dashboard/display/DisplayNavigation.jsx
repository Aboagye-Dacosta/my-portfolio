import styled from "styled-components";
import DisplayNavItem from "./DisplayNavItem";

const StyledDisplayNavigation = styled.div`
display: flex;
flex-direction: column;
`;

function DisplayNavigation() {
  return (
    <StyledDisplayNavigation>
      <DisplayNavItem to="/dacosta/dashboard/display/regular">
        Regular Projects
      </DisplayNavItem>
      <DisplayNavItem to="/dacosta/dashboard/display/experiences">
        Experiences
      </DisplayNavItem>
    </StyledDisplayNavigation>
  );
}

export default DisplayNavigation;
