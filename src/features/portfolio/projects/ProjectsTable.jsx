import styled from "styled-components";

import { breakpoint } from "../../../styles/GlobalStyles";
import Table from "../../../ui/Table";
import ProjectTableRow from "./ProjectTableRow";
import ProjectTableRowMobile from "./ProjectTableRowMobile";

import { useProjects } from "../../dashboard/projects/useProjects";

const DesktopTable = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: block;
  }
`;

const MobileTable = styled.div`
  display: block;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

function ProjectsTable() {
  const { projects } = useProjects();
  // if(isLoadingProjects) return <FullPageLoader />
  return (
    <>
      <DesktopTable>
        <Table columns="4.2rem 10rem 2.5fr 4fr 2fr">
          <Table.Header>
            <div></div>
            <div>Year</div>
            <div>Project</div>
            <div>Built with</div>
            <div>Link</div>
          </Table.Header>
          <Table.Body
            data={projects}
            render={(data, i) => <ProjectTableRow key={i} project={data} />}
          />
        </Table>
      </DesktopTable>
      <MobileTable>
        <Table columns="1fr 1fr">
          <Table.Header>
            <div>Project</div>
            <div>Link</div>
          </Table.Header>
          <Table.Body
            data={projects}
            render={(data, i) => (
              <ProjectTableRowMobile key={i} project={data} />
            )}
          />
        </Table>
      </MobileTable>
    </>
  );
}

export default ProjectsTable;
