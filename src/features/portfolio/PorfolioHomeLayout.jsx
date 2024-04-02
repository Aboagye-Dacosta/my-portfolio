import PropTypes from "prop-types"
import styled from "styled-components";
import { breakpoint } from "../../styles/GlobalStyles";

const StyledPortfolioHomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  @media (min-width: ${breakpoint.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 3rem;
    padding: 0 5rem 0;
    /* overflow: hidden; */
  }
`;
function PortfolioHomeLayout({ children }) {
  return <StyledPortfolioHomeLayout>{children}</StyledPortfolioHomeLayout>;
}

PortfolioHomeLayout.propTypes = {
  children: PropTypes.any
}

export default PortfolioHomeLayout;
