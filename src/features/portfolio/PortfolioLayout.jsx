import PropTypes from "prop-types"
import styled from "styled-components";
import { ActiveNavProvider } from "./navigation/ActiveNavProvider";

const StyledPortfolioLayout = styled.div`
  background: var(--color-black);
  min-height: 100vh;
`;

function PortfolioLayout({ children }) {
  return (
    <ActiveNavProvider>
      <StyledPortfolioLayout>{children}</StyledPortfolioLayout>
    </ActiveNavProvider>
  );
}

PortfolioLayout.propTypes = {
  children: PropTypes.any
}

export default PortfolioLayout;
