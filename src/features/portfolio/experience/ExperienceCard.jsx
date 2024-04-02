import PropTypes from "prop-types";
import styled from "styled-components";

import { breakpoint } from "../../../styles/GlobalStyles";
import Card from "../../../ui/Card";
import Colored from "../../../ui/Colored";
import Heading from "../../../ui/Heading";
import Image from "../../../ui/Image";
import Paragraph from "../../../ui/Paragraph";
import Row from "../../../ui/Row";
import Tag from "../../../ui/Tag";

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
  }
`;

function ExperienceCard({
  experience: { image, link: { link }, description, name, builtWith = [] } = {},
}) {
  return (
    <Card>
      <a href={link}>
        <StyledRow>
          <Image src={image} />
          <Row>
            <Heading as="h3">
              <Colored>{name}</Colored>
            </Heading>
            <Paragraph>{description}</Paragraph>
            <Row type="horizontal">
              {builtWith.map((item) => (
                <Tag type="grey" key={item}>
                  {item}
                </Tag>
              ))}
            </Row>
          </Row>
        </StyledRow>
      </a>
    </Card>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.object,
};

export default ExperienceCard;
