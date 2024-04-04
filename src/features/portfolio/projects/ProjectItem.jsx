import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoint } from "../../../styles/GlobalStyles";
import Card from "../../../ui/Card";
import Colored from "../../../ui/Colored";
import Heading from "../../../ui/Heading";
import Image from "../../../ui/Image";
import Paragraph from "../../../ui/Paragraph";
import { StyledRow2 } from "../experience/ExperienceCard";

const StyledRow = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
  }
`;

function ProjectItem({
  project: { image, description, dateBuilt, link: { link } = {} } = {},
}) {
  return (
    <a href={link}>
      <StyledRow>
        <Image src={image} />
        <StyledRow2>
          <Heading as="h3">
            <Colored>{new Date(dateBuilt).getFullYear()}</Colored>
          </Heading>
          <Paragraph>{description}</Paragraph>
        </StyledRow2>
      </StyledRow>
    </a>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.object,
};

export default ProjectItem;
