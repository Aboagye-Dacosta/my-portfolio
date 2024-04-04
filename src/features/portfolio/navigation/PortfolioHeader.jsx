import PropTypes from "prop-types";
import { IoMdBookmark } from "react-icons/io";
import styled from "styled-components";

import { breakpoint } from "../../../styles/GlobalStyles";
import Heading from "../../../ui/Heading";
import Logo from "../../../ui/Logo";
import Name from "../../../ui/Name";
import Paragraph from "../../../ui/Paragraph";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import { useStrings } from "../../dashboard/about_me/useStrings";

const MarkIcon = styled(IoMdBookmark)`
  color: var(--color-brand-700);
`;

const StyledProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;

  @media screen and (min-width: ${breakpoint.desktop}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;
    padding: 0;
    gap: 2rem;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${breakpoint.desktop}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;

  @media screen and (min-width: ${breakpoint.desktop}) {
    text-align: left;
  }
`;

function PortfolioHeader({ children }) {
  const {
    strings: { whoIAm, whatIDo, name, logo },
  } = useStrings();
  return (
    <>
      <StyledProfileHeader>
        <div>
          <Logo src={logo} />
        </div>
        <StyledRow>
          <StyledHeading>
            <Name name={name} />
          </StyledHeading>
          <Heading as="h6">{whoIAm}</Heading>
          <Row type="horizontal">
            <MarkIcon />
            <Paragraph>{whatIDo}</Paragraph>
          </Row>
          <Spacer />
          {children}
        </StyledRow>
      </StyledProfileHeader>
    </>
  );
}

PortfolioHeader.propTypes = {
  children: PropTypes.any,
};

export default PortfolioHeader;
