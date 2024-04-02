import styled from "styled-components";

import BackgroundGradient from "../../../ui/BackgroundGradient";
import Heading from "../../../ui/Heading";
import NavBack from "../../../ui/NavBack";
import Spacer from "../../../ui/Spacer";
import ProjectsTable from "./ProjectsTable";

const StyledAllProjects = styled.div`
  padding: 5rem;
  z-index: 1000;
  position: relative;
`;

function AllProjects() {
  return (
    <>
      <StyledAllProjects>
        <NavBack label="Dacosta Solomon" />
        <Spacer />
        <Heading>All my projects</Heading>
        <Spacer />
        <ProjectsTable />
      </StyledAllProjects>
      <BackgroundGradient />
    </>
  );
}

export default AllProjects;
