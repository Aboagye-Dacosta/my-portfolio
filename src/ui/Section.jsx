import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
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
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry.isIntersecting && inView) setActiveId(id);
    },
  });

  return (
    <StyledSection id={id} ref={ref}>
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
