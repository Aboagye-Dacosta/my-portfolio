import PropTypes from "prop-types";
import { IoMdBookmark } from "react-icons/io";
import styled from "styled-components";

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

function PortfolioHeader({ children }) {
  const {
    strings: { whoIAm, whatIDo, name, logo },
  } = useStrings();
  return (
    <>
      <Row type="horizontal" gap={2}>
        <div>
          <Logo src={logo} />
        </div>
        <Row>
          <Heading>
            <Name name={name} />
          </Heading>
          <Heading as="h6">{whoIAm}</Heading>
          <Row type="horizontal">
            <MarkIcon />
            <Paragraph>{whatIDo}</Paragraph>
          </Row>
          <Spacer />
          {children}
        </Row>
      </Row>
    </>
  );
}

PortfolioHeader.propTypes = {
  children: PropTypes.any,
};

export default PortfolioHeader;
