import PropTypes from "prop-types"
import styled from "styled-components";
import { breakpoint } from "../../styles/GlobalStyles";

const StyledPortfolioHomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding: 0 0.5rem 0;

  @media screen and (min-width: ${breakpoint.tablet}) {
    padding: 0 15rem 0;
  }

  @media (min-width: ${breakpoint.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 3rem;

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
