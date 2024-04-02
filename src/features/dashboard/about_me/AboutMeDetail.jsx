import { Outlet } from "react-router-dom";
import styled from "styled-components";

import AboutMeNavigation from "./AboutMeNavigation";

const StyledAboutMeDetail = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 1.6rem;
`;

function AboutMeDetail() {
  return (
    <StyledAboutMeDetail>
      <div>
        <AboutMeNavigation />
      </div>
      <div>
        <Outlet />
      </div>
    </StyledAboutMeDetail>
  );
}

export default AboutMeDetail;
