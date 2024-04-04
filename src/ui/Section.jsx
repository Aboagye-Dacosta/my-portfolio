import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useActive } from "../features/portfolio/navigation/ActiveNavProvider";
import { breakpoint } from "../styles/GlobalStyles";
import Heading from "./Heading";

const StyledSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 0 10rem 0;
`;
const SectionHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--color-black);
  padding: 1rem;
  font-weight: bold;
  z-index: 1000;

  @media screen and (min-width: ${breakpoint.desktop}) {
    display: none;
  }
`;

function Section({ children, title, id }) {
  const { setActiveId } = useActive();
  return (
    <StyledSection
      viewport={{ amount: 0.5 }}
      onViewportEnter={() => setActiveId(id)}
      id={id}
    >
      {title && (
        <SectionHeader>
          <Heading as="h2">{title}</Heading>
        </SectionHeader>
      )}
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Section;
