import { Link } from "react-router-dom";
import Colored from "../../../ui/Colored";
import Row from "../../../ui/Row";
import Section from "../../../ui/Section";
import Spacer from "../../../ui/Spacer";
import ProjectItem from "./ProjectItem";

import styled from "styled-components";
import { useShowRegularProjects } from "./useShowRegularProjects";

const StyledLink = styled(Link)`
  & span {
    margin: 0 1rem;
  }
  &:hover > span {
    display: inline-block;
    transition: 0.1s;
    transform: translateX(10px);
  }
`;

function Projects() {
  const { showRegulars = [] } = useShowRegularProjects();
  return (
    <Section title="Projects" id="my-projects">
      {showRegulars.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
      <Spacer />

      <Row items="center" justify="start" type="horizontal">
        <Colored>
          <StyledLink to="/dacosta-portfolio/projects">
            See all my projects <span>&rarr;</span>
          </StyledLink>
        </Colored>
      </Row>
    </Section>
  );
}

export default Projects;
