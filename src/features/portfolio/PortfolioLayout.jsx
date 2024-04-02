import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ActiveNavProvider } from "./navigation/ActiveNavProvider";

const StyledPortfolioLayout = styled.div`
  background: var(--color-black);
  min-height: 100vh;
`;

function PortfolioLayout() {
  return (
    <ActiveNavProvider>
      <StyledPortfolioLayout>
        <Outlet />
      </StyledPortfolioLayout>
    </ActiveNavProvider>
  );
}

export default PortfolioLayout;
