import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoint } from "../../../styles/GlobalStyles";
import Card from "../../../ui/Card";
import Colored from "../../../ui/Colored";
import Heading from "../../../ui/Heading";
import Image from "../../../ui/Image";
import Paragraph from "../../../ui/Paragraph";
import Row from "../../../ui/Row";

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
  }
`;

function ProjectItem({
  project: { image, description, dateBuilt, link: { link } = {} } = {},
}) {
  return (
    <Card as="a" href={link} target="_blank">
      <StyledRow>
        <Image src={image} />
        <Row>
          <Heading as="h3">
            <Colored>{new Date(dateBuilt).getFullYear()}</Colored>
          </Heading>
          <Paragraph>{description}</Paragraph>
        </Row>
      </StyledRow>
    </Card>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.object,
};

export default ProjectItem;
