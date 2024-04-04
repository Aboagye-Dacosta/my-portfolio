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

const StyledCard = styled(Card)`
  margin-top: 3rem;

  @media screen and (min-width: ${breakpoint.desktop}) {
    margin-top: 2rem;
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.tablet}) {
    flex-direction: row;
    align-items: start;
  }
`;

export const StyledRow2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  & > p {
    text-align: center;
  }

  @media screen and (min-width: ${breakpoint.desktop}) {
    justify-content: flex-start;
    align-items: flex-start;

    & > p {
      text-align: left;
    }
  }
`;

function ExperienceCard({
  experience: { image, link: { link }, description, name, builtWith = [] } = {},
}) {
  return (
    <>
      <StyledCard>
        <a href={link}>
          <StyledRow>
            <Image src={image} />
            <StyledRow2>
              <Heading as="h3">
                <Colored>{name}</Colored>
              </Heading>
              <Paragraph>{description}</Paragraph>
              <Row type="horizontal" wrap="wrap">
                {builtWith.map((item) => (
                  <Tag type="grey" key={item}>
                    {item}
                  </Tag>
                ))}
              </Row>
            </StyledRow2>
          </StyledRow>
        </a>
      </StyledCard>
    </>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.object,
};

export default ExperienceCard;
