import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DisplayNavigation from "./DisplayNavigation";

const StyledDisplayLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 2rem;
`;

function DisplayLayout() {
  return (
    <StyledDisplayLayout>
      <div>
        <DisplayNavigation />
      </div>
      <div>
        <Outlet />
      </div>
    </StyledDisplayLayout>
  );
}

export default DisplayLayout;
